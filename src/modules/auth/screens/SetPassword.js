import { FormAuth, FormInput } from '@/components'
import { listToast } from '@/constants'
import { validate } from '@/lib'
import { setPasswordAPI } from '@/modules/auth/api'
import { setToast } from '@/redux/features'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SetPassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [infos, setInfos] = useState(() => {
        const username = localStorage.getItem('usernameReset') || ''
        return { key_search: username, otp: '', newPassword: '', confirmPassword: '' }
    })

    useEffect(() => {
        const username = localStorage.getItem('usernameReset')
        if (!username || !(validate('email', username) || validate('phone', username))) {
            navigate('/auth/login')
        }
    }, [])

    async function fetchData() {
        const response = await setPasswordAPI(infos)
        if (response) setLoading(false)
        if (response.data.status) {
            localStorage.removeItem('usernameReset')
            dispatch(setToast({ ...listToast[0], detail: 'Đổi mật khẩu thành công, vui lòng đăng nhập lại!' }))
            navigate('/auth/login')
        } else dispatch(setToast({ ...listToast[1], detail: response.data.mess }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (infos.newPassword !== infos.confirmPassword) {
            dispatch(setToast({ ...listToast[1], detail: 'Mật khẩu mới và xác nhận mật khẩu không giống nhau!' }))
            return
        }
        setLoading(true)
        fetchData()
    }

    return (
        <FormAuth
            title="Đặt mật khẩu mới"
            subtitle="Trở lại"
            handleSubmit={handleSubmit}
            linkSubtitle="/auth/forgot_password"
            loading={loading}
            disabled={!infos.otp || !infos.newPassword || !infos.confirmPassword}
        >
            <FormInput id="key_search" label="Tài khoản" disabled value={infos.key_search} />
            <FormInput
                id="otp"
                label="OTP"
                value={infos.otp}
                type="number"
                required
                onChange={(e) => setInfos({ ...infos, otp: e.target.value })}
            />
            <FormInput
                id="newPassword"
                label="Mật khẩu mới"
                value={infos.newPassword}
                type="password"
                required
                onChange={(e) => setInfos({ ...infos, newPassword: e.target.value })}
            />
            <FormInput
                id="confirmPassword"
                label="Xác nhận mật khẩu"
                value={infos.confirmPassword}
                type="password"
                required
                onChange={(e) => setInfos({ ...infos, confirmPassword: e.target.value })}
            />
        </FormAuth>
    )
}

export default SetPassword
