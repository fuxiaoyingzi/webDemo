import apiMockConfig from './mock/mock'
const axios = require('axios');
const baseUrl = "http://192.168.2.176:12306";
const Mock = require('mockjs');
	apiMockConfig.mocks.forEach(config=>{
		if  (config.enabled) {
			Mock.mock(baseUrl + config.api,config.method, ()=>{
				return {
					msg: 'ok',
					code: '0',
					success: true,
					data: config.data
				}
			});
		}
    });
    

    function createAxios(type){
        let timeout = 20000; //统一的超时时间
        var token = "123456789";
     
        let applicationHeaderPayload = {
            'Content-Type': 'application/json; charset=utf-8',
            'token':token,
            'Accept': '*/*'
        }
        let applicationHeader = {
            'Content-Type': 'application/x-www-form-urlencoded', 
            'token':token,
            'Accept': '*/*'
        }; 
        let args = {}; //配置参数
        let axiosInstance; //请求实力
        switch(type){
            case "payload" :
                args = {
                    timeout,
                    "headers": applicationHeaderPayload
                };
                break;
            case "formData" :
                args = {
                    timeout,
                    "headers" : applicationHeader
                };
                break;
            default :
                break;
        }
        axiosInstance = axios.create(args);

        axiosInstance.interceptors.request.use (function (config) { //请求拦截器
            console.log("baseUrl+config.url = "+baseUrl+config.url)
            config.url = baseUrl+config.url;
            return config;
        }, function (error) {
            console.log("request error")
            return Promise.reject(error);
        });

        axiosInstance.interceptors.response.use(function (response) { //返回拦截器
            console.log("response---"+JSON.stringify(response))
            return handleSuccess(response);
        }, function (data) {
            console.log("response error--"+data)
            return handleError(data);
        });
        return axiosInstance;
    }

    function handleSuccess(response){ //处理正常返回
       
        let code = response.data.code;
        console.log("handleSuccess code ---"+code)
        if(code == 0){
            return Promise.resolve(response.data);
        }else{
            return Promise.reject(response);
        }
    }
    function handleError(response){ //处理失败返回
        if (response && response.response && response.response.status==401) { 
            return Promise.reject(response);
        }
        console.error("handleError--"+response);
        return Promise.reject(response);
    }
    
    //payload块
    const payload = createAxios("payload");
    //formdata块
    const formdata = createAxios("formData");
    
    const getUserInfo = () => {
        return payload.post("/api/mock/getUserInfo");
    }
    
    //todo 请求参数
    export default {
        payload,
        formdata,
        getUserInfo,
    }