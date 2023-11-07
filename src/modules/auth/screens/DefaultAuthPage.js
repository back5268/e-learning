import React from 'react'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'

export const DefaultAuthPage = (props) => {
    const { title, sub_title, img } = props
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
            <div className="flex flex-column align-items-center justify-content-center">
                <div className="card w-full mx-8 sm:px-8 flex flex-column align-items-center">
                    <div
                        className="flex mt-6 justify-content-center align-items-center bg-pink-500 border-circle"
                        style={{ height: '3.2rem', width: '3.2rem' }}
                    >
                        <i className="pi pi-fw pi-exclamation-circle text-2xl text-white"></i>
                    </div>
                    <h1 className="text-900 font-bold text-5xl mb-2">{title}</h1>
                    <div className="text-600 mb-5">{sub_title}</div>
                    <img src={img} alt={title} className="mb-5" width="80%" />
                    <Button className="mb-6" onClick={handleGoBack} icon="pi pi-arrow-left" label="Go back" text />
                </div>
            </div>
        </div>
    )
}

export const AccessDeniedPage = () => {
    return (
        <DefaultAuthPage
            title="Access Denied"
            sub_title="Bạn không có quyền truy cập"
            img="/assets/img/permissionPage.svg"
        />
    )
}

export const ErrorPage = () => {
    return <DefaultAuthPage title="Error Occured" sub_title="Liên kết không tồn tại" img="/assets/img/errorPage.svg" />
}
