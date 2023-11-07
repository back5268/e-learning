import { useEffect, useState } from 'react'
import { listCourseApi, detailCourseApi } from '../api'

export const useListCourse = (params) => {
    const [data, setData] = useState([])
    async function fetchData() {
        const response = await listCourseApi({ status: 1, ...params })
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        fetchData()
    }, [JSON.stringify(params)])
    return data
}

export const useDetailCourse = (id) => {
    const [data, setData] = useState({})
    async function fetchData() {
        const response = await detailCourseApi(id)
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        if (id) fetchData()
    }, [id])
    return data
}
