import { FormAuth, FormInput } from '@/components/FormAuth'
import { listToast } from '@/constants'
import { validate } from '@/lib/validate'
import { setToast, ToggleLoading } from '@/redux/features'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginApi } from '../api'

const Login = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [checked, setChecked] = useState(true)
    const [user, setUser] = useState(() => {
        const dataJson = localStorage.getItem('user')
        const data = dataJson ? JSON.parse(dataJson) : undefined
        if (data) return data
        return {
            username: '',
            pword: '',
        }
    })

    async function fetchData() {
        if (validate('email', user.username)) {
            user.email = user.username
            user.phone = undefined
        } else if (validate('phone', user.username)) {
            user.phone = user.username
            user.email = undefined
        } else {
            setLoading(false)
            dispatch(setToast({ ...listToast[1], detail: 'Username không đúng định dạng email hoặc số điện thoại!' }))
            return
        }
        if (checked) localStorage.setItem('user', JSON.stringify(user))
        else localStorage.removeItem('user')
        const response = await loginApi({ ...user, username: undefined })
        if (response) setLoading(false)
        if (response.data.status) {
            const token = response.data.data.token
            localStorage.setItem('token', token)
            dispatch(setToast({ ...listToast[0], detail: 'Đăng nhập thành công!' }))
            dispatch(ToggleLoading(true))
        } else dispatch(setToast({ ...listToast[1], detail: 'Tài khoản hoặc mật khẩu không chính xác!' }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetchData()
    }

    return (
        <FormAuth
            subtitle="Đăng nhập hệ thống"
            handleSubmit={handleSubmit}
            lableSubmit="Đăng nhập"
            titleFooter="Quên mật khẩu"
            linkTitleFooter="/auth/forgot_password"
            disabled={!user.username || !user.pword || (user.pword && user.pword.length < 6)}
            loading={loading}
            rememberPassword={{ checked, setChecked }}
        >
            <FormInput
                id="username"
                label="Tài khoản"
                value={user.username}
                onChange={(e) => {
                    setUser({ ...user, username: e.target.value })
                    localStorage.setItem('username', e.target.value);
                }}
                required
            />
            <FormInput
                id="pword"
                label="Mật khẩu"
                type="password"
                value={user.pword}
                onChange={(e) => setUser({ ...user, pword: e.target.value })}
                required
            />
        </FormAuth>
    )
}

export default Login
