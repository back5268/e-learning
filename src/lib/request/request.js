export const createFormData = (body = {}, file, files, image, avatar, cmt_image, images, vehicle_registration, logo, signature) => {
    const data = new FormData()
    if (file) {
        data.append('file', file)
    }
    if (image) {
        data.append('image', image)
    }
    if (avatar) {
        data.append('avatar', avatar)
    }
    if (logo) {
        data.append('logo', logo)
    }
    if (signature) {
        data.append('signature', signature)
    }
    if (files) {
        Object.keys(files).forEach((value) => {
            data.append("files", files[value])
        })
    }
    if (images) {
        Object.keys(images).forEach((value) => {
            data.append("images", images[value])
        })
    }
    if (vehicle_registration) {
        Object.keys(vehicle_registration).forEach((value) => {
            data.append("vehicle_registration", vehicle_registration[value])
        })
    }
    if (cmt_image) {
        data.append('cmt_image', cmt_image)
    }
    Object.keys(body).forEach((key) => {
        if (typeof body[key] === 'object') data.append(key, JSON.stringify(body[key]))
        else if (body[key] || body[key] === 0 || body[key] === '') data.append(key, body[key])
    })
    return data
}
export const convertData = (body = {}) => {
    Object.keys(body).forEach((key) => {
        if (typeof body[key] === 'object') {
            body[key] = JSON.stringify(body[key])
        }
    })
    return body
}
