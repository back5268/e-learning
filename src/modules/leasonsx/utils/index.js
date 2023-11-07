import { useEffect, useState } from 'react'
import { listLeasonApi, detailLeasonApi } from '../api'

export const useListLeason = (params) => {
    const [data, setData] = useState([])
    async function fetchData() {
        const response = await listLeasonApi({ status: 1, ...params })
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        fetchData()
    }, [JSON.stringify(params)])
    return data
}

export const useDetailLeason = (id) => {
    const [data, setData] = useState({})
    async function fetchData() {
        const response = await detailLeasonApi(id)
        if (response.data.status) setData(response.data.data)
    }
    useEffect(() => {
        if (id) fetchData()
    }, [id])
    return data
}
