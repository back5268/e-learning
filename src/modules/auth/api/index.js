import { getData, postData } from '@/lib/request'

export const getAuthApi = (params) => getData('web2/auth/get', params)
export const getMyToolApi = (params) => getData('web2/info/getListMyTool', params)
export const loginApi = (params) => postData('web2/auth/login', params)
export const setPasswordAPI = (params) => postData('web2/auth/authOtp', params)
export const forgotPasswordAPI = (params) => postData('web2/auth/forgotPassword', params)
export const verifyAccountAPI = (params) => postData('web2/auth/login', params)
