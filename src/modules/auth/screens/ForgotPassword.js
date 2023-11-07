import { FormAuth, FormInput } from '@/components'
import { listToast } from '@/constants'
import { validate } from '@/lib'
import { forgotPasswordAPI } from '@/modules/auth/api'
import { setToast } from '@/redux/features'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);
    async function fetchData(params, type) {
        const response = await forgotPasswordAPI(params)
        if (response) setLoading(false)
        if (response.data.status) {
            localStorage.setItem('usernameReset', username)
            dispatch(
                setToast({
                    ...listToast[0],
                    detail:
                        'Mã xác nhận đã được gửi đến ' + (type === 'email' ? 'email ' : 'số điện thoại ') + username,
                }),
            )
            navigate('/auth/set_password')
        } else dispatch(setToast({ ...listToast[1], detail: response.data.mess }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        let type = ''
        if (validate('email', username)) type = 'email'
        else if (validate('phone', username)) type = 'phone'
        else {
            setLoading(false)
            dispatch(
                setToast({ ...listToast[1], detail: 'Dữ liệu nhập không đúng định dạng email hoặc số điện thoại!' }),
            )
            return
        }
        fetchData({ key_search: username }, type)
    }

    return (
        <FormAuth
            title="Quên mật khẩu"
            subtitle="Quay lại đăng nhập"
            handleSubmit={handleSubmit}
            linkSubtitle="/auth/login"
            loading={loading}
            disabled={!username}
        >
            <FormInput
                id="username"
                label="Email hoặc số điện thoại"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
            />
        </FormAuth>
    )
}

export default ForgotPassword
