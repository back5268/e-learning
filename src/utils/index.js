export const formatNumber = (amount) => {
    if (amount) return new Intl.NumberFormat('en-US').format(amount)
}

export const removePropObject = (object1, object2) => {
    const changedProperties = {}
    for (const key in object1) {
        if (object1.hasOwnProperty(key) && JSON.stringify(object1[key]) !== JSON.stringify(object2[key])) {
            changedProperties[key] = object1[key]
        }
    }
    return changedProperties
}

export const removeUndefinedProps = (obj) => {
    for (let prop in obj) {
        if (!(obj[prop] || obj[prop] === '' || obj[prop] === 0)) {
            delete obj[prop]
        }
    }
    return obj
}

export const refreshObject = (object) => {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (typeof object[key] === 'string') object[key] = ''
            else if (Array.isArray(object[key])) object[key] = []
            else if (typeof object[key] === 'object') object[key] = {}
            else object[key] = undefined
        }
    }
    return object
}

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

export const getArrId = (arr) => {
    const newArr = []
    if (arr && arr[0]) {
        arr.forEach((a) => {
            if (a.user_id) {
                newArr.push(a.user_id)
            } else {
                newArr.push(a.id)
            }
        })
    }
    return newArr
}

export const checkJson = (str) => {
    try {
        const data = JSON.parse(str)
        return data
    } catch (e) {
        return false
    }
}

export const removeSpecialCharacter = (string) => {
    // Loại bỏ dấu
    const normalizedString = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    // Thay thế khoảng trắng bằng dấu gạch dưới
    const resultString = normalizedString.replace(/\s+/g, '_')

    return resultString
}
