import { useEffect, useState } from 'react'
import { listQuizzeApi, detailQuizzeApi } from '../api'

export const useListQuizze = (params) => {
    const [data, setData] = useState([])
    async function fetchData() {
        const response = await listQuizzeApi({ status: 1, ...params })
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        fetchData()
    }, [JSON.stringify(params)])
    return data
}

export const useDetailQuizze = (id) => {
    const [data, setData] = useState({})
    async function fetchData() {
        const response = await detailQuizzeApi(id)
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        if (id) fetchData()
    }, [id])
    return data
}
