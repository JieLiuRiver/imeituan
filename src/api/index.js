import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/4123/GET/v1',
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 10000
});
// 内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'
axiosInstance.interceptors.response.use(response => response, e => Promise.reject(e))

export default axiosInstance;