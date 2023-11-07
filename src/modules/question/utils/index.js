import { useEffect, useState } from 'react'
import { listQuestionApi, detailQuestionApi } from '../api'

export const useListQuestion = (params) => {
    const [data, setData] = useState([])
    async function fetchData() {
        const response = await listQuestionApi({ status: 1, ...params })
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        fetchData()
    }, [JSON.stringify(params)])
    return data
}

export const useDetailQuestion = (id) => {
    const [data, setData] = useState({})
    async function fetchData() {
        const response = await detailQuestionApi(id)
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        if (id) fetchData()
    }, [id])
    return data
}
