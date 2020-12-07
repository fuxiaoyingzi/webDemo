import {mockUser} from './mock-user'

const mockList = [
  mockUser,
  // 在这个列表下面添加对应的
]
// -----这里可以添加其他mock请求配置------
const apiMockConfig = {
  mocks:[],
  mockEnabled:function(path){
    var result = false;
    this.mocks.forEach(item=>{
      if (item.api == path) {
        result = item.enabled;
      }
    });
    return result;
  }
};
mockList.forEach(configs=>{
  Object.keys(configs).forEach(key=>{
    apiMockConfig.mocks.push(configs[key]);
  });
});
export default apiMockConfig;