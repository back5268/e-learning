import { postData, getData } from '@/lib/request'

export const listCategoryApi = (params) => getData('api/Quiz/GetAllQuiz', params)
export const deleteCategoryApi = (params) => postData('api/Quiz/DeleteQuiz', params)
export const detailCategoryApi = (params) => getData('api/Quiz/GetQuizById', params)
export const addCategoryApi = (params) => postData('/api/Quiz/AddQuiz', params)
export const updateCategoryApi = (params) => postData('/api/Quiz/UpdateQuiz', params)
