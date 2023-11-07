import { Button, Image } from '@/uiCore'
import React, { useEffect } from 'react'

export const UploadFile = (props) => {
    const { file, setFile, label } = props

    useEffect(() => {
        return () => {
            file && URL.revokeObjectURL(file.preview)
        }
    }, [file])

    const handleFile = (e) => {
        const file = e.target.files[0]
        if (!file) return
        if (file.type) file.preview = URL.createObjectURL(file)
        setFile(file)
    }

    const clearImg = () => {
        setFile(null)
    }

    return (
        <div className="mb-3 px-2">
            <label className="font-medium">{label || 'Chọn file'}</label>
            <div className="card mt-2">
                <div className="flex justify-content-end align-items-center mb-3">
                    <div className="flex align-items-center gap-2">
                        <Button
                            icon="pi pi-times"
                            disabled={!file}
                            onClick={clearImg}
                            severity="danger"
                            label="Bỏ chọn"
                            type="button"
                        />
                        <label className="p-button p-fileupload-choose p-component" style={{ minHeight: '40px' }}>
                            <i className="pi pi-plus mr-2"></i>
                            <span className="p-button-text p-clickable">Chọn file</span>
                            <input type="file" onChange={handleFile} className="p-inputtext p-component" />
                        </label>
                    </div>
                </div>
                <div className="card bg-color flex">
                    {file && file.type && (
                        <div className="flex flex-column gap-2">
                            <Image src={file.preview || file} height="120px" preview></Image>
                            <a target="_blank" className="font-semibold">
                                {file.name}
                            </a>
                        </div>
                    )}
                    {file && !file.type && (
                        <a target="_blank" href={file.name || file} className="font-semibold">
                            {file.name || file}
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
