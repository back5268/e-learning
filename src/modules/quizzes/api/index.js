import { postData, getData } from '@/lib/request'

export const listQuizzeApi = (params) => getData('api/Quiz/GetAllQuiz', params)
export const deleteQuizzeApi = (params) => postData('api/Quiz/DeleteQuiz', params)
export const detailQuizzeApi = (params) => getData('api/Quiz/GetQuizById', params)
export const addQuizzeApi = (params) => postData('/api/Quiz/AddQuiz', params)
export const updateQuizzeApi = (params) => postData('/api/Quiz/UpdateQuiz', params)
