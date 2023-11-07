import { postData, getData } from '@/lib/request'

export const listCourseApi = (params) => getData('api/Quiz/GetAllQuiz', params)
export const deleteCourseApi = (params) => postData('api/Quiz/DeleteQuiz', params)
export const detailCourseApi = (params) => getData('api/Quiz/GetQuizById', params)
export const addCourseApi = (params) => postData('/api/Quiz/AddQuiz', params)
export const updateCourseApi = (params) => postData('/api/Quiz/UpdateQuiz', params)
