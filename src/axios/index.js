import { listToast } from '@/constants'
import { generateRSAkey } from '@/lib'
import { setToast } from '@/redux/features/toast'
import store from '@/redux/store'
import axios from 'axios'
import { clientId } from './getClientId'

export const clientApi = axios.create({
    baseURL: 'https://devapibdc.dxmb.vn/',
    timeout: 10000,
})

clientApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        const item = store.getState().item || {}
        const time = Date.now()
        config.headers['Authorization'] = `Bearer ${token}`
        config.headers['info'] = JSON.stringify({
            client_id: `${clientId}`,
            deivce_name: 'win10amddmddm',
            bundle_id: '2131231231',
            company_id: item.company_id,
            building_id: item.building_id,
            time,
            signature: generateRSAkey(clientId + time),
        })
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

clientApi.interceptors.response.use(
    async function (res) {
        if (res.data.mess === 'token-expired') {
            localStorage.removeItem('userInfo')
            localStorage.removeItem('token')
        }
        return res
    },
    async function (error) {
        console.log(error)
        store.dispatch(setToast({ ...listToast[1], detail: 'Đường truyền không ổn định, vui lòng thử lại sau!' }))
        return { data: {}, status: false, mess: 'Đường truyền không ổn định, vui lòng thử lại sau!' }
    },
)
