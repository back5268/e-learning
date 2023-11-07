import { postData, getData } from '@/lib/request'

export const listQuestionApi = (params) => getData('api/Question/GetAllQuestion', params)
export const deleteQuestionApi = (params) => postData('api/Question/DeleteQuestion', params)
export const detailQuestionApi = (params) => getData('api/Question/GetQuestionById', params)
export const addQuestionApi = (params) => postData('/api/Question/AddQuestion', params)
export const updateQuestionApi = (params) => postData('/api/Question/UpdateQuestion', params)
