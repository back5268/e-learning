import { clientApi } from '@/axios'
import { convertData, createFormData } from './request'

export const postData = (url, data, isUpload = false, blob = false, timeout = 600000) => {
    if (isUpload || blob) {
        const { file, files, image, avatar, cmt_image, images, vehicle_registration, logo, signature, ...params } = data
        data = createFormData(params, file, files, image, avatar, cmt_image, images, vehicle_registration, logo, signature)
    } else data = convertData(data)
    if (blob)
        return clientApi.post(url, data, {
            timeout,
            responseType: 'blob',
            headers: { 'Content-Type': 'multipart/form-data' },
        })
    else if (isUpload) return clientApi.post(url, data, { timeout, headers: { 'Content-Type': 'multipart/form-data' } })
    else return clientApi.post(url, data, { timeout })
}

export const getData = (url, params, blob = false, timeout = 600000) => {
    params = convertData(params)
    if (blob)
        return clientApi.get(url + '?' + params, {
            params,
            timeout,
            responseType: 'blob',
            headers: { 'Content-Type': 'multipart/form-data' },
        })
    else return clientApi.get(url, { params })
}
