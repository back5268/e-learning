import { postData, getData } from '@/lib/request'

export const listLeasonApi = (params) => getData('api/Quiz/GetAllQuiz', params)
export const deleteLeasonApi = (params) => postData('api/Quiz/DeleteQuiz', params)
export const detailLeasonApi = (params) => getData('api/Quiz/GetQuizById', params)
export const addLeasonApi = (params) => postData('/api/Quiz/AddQuiz', params)
export const updateLeasonApi = (params) => postData('/api/Quiz/UpdateQuiz', params)
