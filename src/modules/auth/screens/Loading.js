import { Fragment, useEffect } from 'react'
import { ProgressBar } from 'primereact/progressbar'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToggleLoading, setUserInfo } from '@/redux/features'
import { getAuthApi } from '../api'

const Loading = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function fetchData() {
        const getAuth = await getAuthApi()
        if (getAuth.data && getAuth.data.status) {
            const userInfo = getAuth.data.data
            dispatch(setUserInfo(userInfo))
        } else {
            localStorage.removeItem('token')
            dispatch(ToggleLoading(false))
            return
        }
        dispatch(ToggleLoading(false))
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        const clientId = localStorage.getItem('clientId')
        if (!token || !clientId) {
            dispatch(ToggleLoading(false))
            navigate('/auth/login')
        } else fetchData()
    }, [])

    return (
        <Fragment>
            <Fragment>
                <ProgressBar mode="indeterminate" style={{ height: '4px', zIndex: '1001' }}></ProgressBar>
                <div className="block surface-ground fixed w-full h-full top-0 left-0" style={{ zIndex: '1000' }}></div>
            </Fragment>
            {props.children}
        </Fragment>
    )
}

export default Loading
