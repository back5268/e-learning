import { useEffect, useState } from 'react'
import { listChapterApi, detailChapterApi } from '../api'

export const useListChapter = (params) => {
    const [data, setData] = useState([])
    async function fetchData() {
        const response = await listChapterApi({ status: 1, ...params })
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        fetchData()
    }, [JSON.stringify(params)])
    return data
}

export const useDetailChapter = (id) => {
    const [data, setData] = useState({})
    async function fetchData() {
        const response = await detailChapterApi(id)
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        if (id) fetchData()
    }, [id])
    return data
}
