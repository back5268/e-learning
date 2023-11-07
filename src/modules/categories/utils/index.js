import { useEffect, useState } from 'react'
import { listCategoryApi, detailCategoryApi } from '../api'

export const useListCategory = (params) => {
    const [data, setData] = useState([])
    async function fetchData() {
        const response = await listCategoryApi({ status: 1, ...params })
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        fetchData()
    }, [JSON.stringify(params)])
    return data
}

export const useDetailCategory = (id) => {
    const [data, setData] = useState({})
    async function fetchData() {
        const response = await detailCategoryApi(id)
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        if (id) fetchData()
    }, [id])
    return data
}
