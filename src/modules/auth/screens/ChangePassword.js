import { FormAuth, FormInput } from '@/components/FormAuth'
import { listToast } from '@/constants'
import { postData } from '@/lib/request'
import { setToast } from '@/redux/features/toast'
import { clearUserInfo } from '@/redux/features/userInfo'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })

    async function fetchData() {
        const response = await postData('web2/user/changePassword', passwords)
        if (response) setLoading(false)
        if (response.data.status) {
            dispatch(setToast({ ...listToast[0], detail: 'Đổi mật khẩu thành công, vui lòng đăng nhập lại!' }))
            localStorage.removeItem('token')
            dispatch(clearUserInfo())
            navigate('/auth/login')
        } else dispatch(setToast({ ...listToast[1], detail: response.data.mess }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (passwords.newPassword !== passwords.confirmPassword) {
            dispatch(setToast({ ...listToast[1], detail: 'Mật khẩu mới và xác nhận mật khẩu không giống nhau!' }))
            return
        }
        setLoading(true)
        fetchData()
    }

    return (
        <FormAuth
            title="Đổi mật khẩu"
            subtitle="Go to Dashboard"
            handleSubmit={handleSubmit}
            lableSubmit="Đổi mật khẩu"
            linkSubtitle="/"
            loading={loading}
            disabled={!passwords.newPassword || !passwords.oldPassword || !passwords.confirmPassword}
        >
            <FormInput
                id="oldPassword"
                label="Mật khẩu cũ"
                value={passwords.oldPassword}
                type="password"
                required
                onChange={(e) => setPasswords({ ...passwords, oldPassword: e.target.value })}
            />
            <FormInput
                id="newPassword"
                label="Mật khẩu mới"
                value={passwords.newPassword}
                type="password"
                required
                onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
            />
            <FormInput
                id="confirmPassword"
                label="Xác nhận mật khẩu"
                value={passwords.confirmPassword}
                type="password"
                required
                onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
            />
        </FormAuth>
    )
}

export default ChangePassword
