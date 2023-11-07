import { postData, getData } from '@/lib/request'

export const listChapterApi = (params) => getData('api/Quiz/GetAllQuiz', params)
export const deleteChapterApi = (params) => postData('api/Quiz/DeleteQuiz', params)
export const detailChapterApi = (params) => getData('api/Quiz/GetQuizById', params)
export const addChapterApi = (params) => postData('/api/Quiz/AddQuiz', params)
export const updateChapterApi = (params) => postData('/api/Quiz/UpdateQuiz', params)
