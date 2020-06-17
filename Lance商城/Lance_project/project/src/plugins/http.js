import axios from 'axios'
//设置默认地址
const BASE_URL ='http://localhost:62078'
axios.defaults.baseURL=BASE_URL
//请求拦截器
/* axios.interceptor.request.use(req=>{
   // req.headers.authorization = localStorage.getItem('token')
  return req
})
//拦截器
axios.interceptor.response.use(res=>{
    return res
}) */

//导出
export default axios