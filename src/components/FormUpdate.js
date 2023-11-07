import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, InputText, MultiSelect } from '@/uiCore'
import { Dropdown, InputSwitch, InputTextarea, Calendar } from '@/uiCore'
import { classNames } from 'primereact/utils'
import { useDispatch } from 'react-redux'
import { setToast } from '@/redux/features/toast'
import { formatNumber, refreshObject, scrollToTop } from '@/utils'
import { REGEX, getMessageFormat, listToast } from '@/constants'
import { Dialogz } from './Dialogz'

export const CalendarForm = (props) => {
    const { id, label, className, ...inputprop } = props
    return (
        <div className="mb-3 px-2 change-disabled">
            {label && (
                <label htmlFor={id} className="font-medium">
                    {label}
                </label>
            )}
            <Calendar
                inputId={id}
                dateFormat="dd/mm/yy"
                showIcon
                showButtonBar
                className={classNames('w-full mt-2', className)}
                hourFormat="24"
                placeholder={label && `Chọn ${label.toLowerCase()}`}
                style={{ minHeight: '42px' }}
                {...inputprop}
            />
        </div>
    )
}

export const InputTextareaForm = (props) => {
    const { id, label, className, ...inputprop } = props
    return (
        <div className="mb-3 px-2 change-disabled">
            {label && (
                <label htmlFor={id} className="font-medium">
                    {label}
                </label>
            )}
            <InputTextarea
                autoResize
                id={id}
                rows={6}
                cols={30}
                className={classNames('w-full mt-2', className)}
                placeholder={`Nhập ${label && label.toLowerCase()}`}
                {...inputprop}
            />
        </div>
    )
}

export const InputNumberForm = (props) => {
    const { value, handleOnChange, ...prop } = props
    const onChange = (e) => {
        let v = e.target.value
        if (!v) {
            handleOnChange('')
            return
        }
        let result = ''
        if (v == 0 && !result) {
            handleOnChange(0)
        } else if (v) {
            for (let i = 0; i < v.length; i++) {
                if (!isNaN(v[i])) {
                    result += v[i]
                }
            }
            if (Number(result)) handleOnChange(Number(result))
        }
    }
    return (
        <InputForm
            value={value === 0 ? 0 : formatNumber(value) || ''}
            onChange={onChange}
            {...prop}
            style={{ minHeight: '42px' }}
        />
    )
}

export const InputSwitchForm = (props) => {
    const { id, label, className, ...inputprop } = props
    return (
        <div className="mb-3 px-2">
            <label htmlFor={id} className="font-medium">
                {label ? label : 'Trạng thái'}
            </label>
            <div className="w-full mt-2 align-items-center flex" style={{ minHeight: '42px', lineHeight: '42px' }}>
                <InputSwitch inputId={id} className={className} {...inputprop} />
            </div>
        </div>
    )
}

export const InputForm = (props) => {
    const { label, id, placeholder, type, className, required, ...inputprop } = props
    const [error, setError] = useState(false)

    const handleValidate = (e) => {
        const value = e.target.value
        if (required) {
            if (!value) {
                setError(getMessageFormat())
                return
            } else if (REGEX[type] ? !REGEX[type].test(value) : false) {
                setError(getMessageFormat(type))
                return
            }
        }
    }

    const setFocus = () => {
        setError(false)
    }

    return (
        <div className="mb-3 px-2 change-disabled">
            {label && (
                <div className="w-full flex justify-content-between">
                    <label htmlFor={id} className="font-medium w-full">
                        {label}
                    </label>
                    {required && error && <span className="p-error w-full text-right">{error}</span>}
                </div>
            )}
            <InputText
                id={id}
                className={classNames('w-full mt-2', { 'p-invalid': required && error }, className)}
                placeholder={placeholder || (label && `Nhập ${label.toLowerCase()}`)}
                onBlur={handleValidate}
                onInput={required && setFocus}
                required={required}
                pattern={type === 'password' ? undefined : REGEX[type]}
                type={type === 'phone' ? 'number' : type}
                style={{ minHeight: '42px' }}
                {...inputprop}
            />
        </div>
    )
}

export const MultiSelectForm = (props) => {
    const { id, label, optionLabel, optionValue, placeholder, className, options, ...inputprop } = props
    return (
        <div className="mb-3 px-2 change-disabled">
            {label && (
                <label htmlFor={id} className="mt-3 font-medium w-5">
                    {label}
                </label>
            )}
            {options && options[0] ? (
                <MultiSelect
                    inputId={id}
                    filter
                    display="chip"
                    className={classNames('w-full mt-2', className)}
                    optionLabel={optionLabel ? optionLabel : 'name'}
                    optionValue={optionValue ? optionValue : 'id'}
                    options={options}
                    placeholder={placeholder || (label && `Chọn ${label.toLowerCase()}`)}
                    style={{ minHeight: '42px' }}
                    {...inputprop}
                />
            ) : (
                <MultiSelect
                    inputId={id}
                    className={classNames('w-full mt-2', className)}
                    placeholder={placeholder || (label && `Chọn ${label.toLowerCase()}`)}
                    options={[]}
                    style={{ minHeight: '42px' }}
                    {...inputprop}
                />
            )}
        </div>
    )
}

export const DropdownForm = (props) => {
    const { id, label, optionLabel, optionValue, placeholder, className, ...inputprop } = props
    return (
        <div className="mb-3 px-2 change-disabled">
            {label && (
                <label htmlFor={id} className="font-medium">
                    {label}
                </label>
            )}
            <Dropdown
                filter
                inputId={id}
                className={classNames('w-full mt-2', className)}
                optionLabel={optionLabel ? optionLabel : 'name'}
                optionValue={optionValue ? optionValue : 'id'}
                placeholder={placeholder || (label && `Chọn ${label.toLowerCase()}`)}
                emptyMessage="Không tìm thấy dữ liệu"
                style={{ minHeight: '42px' }}
                {...inputprop}
            />
        </div>
    )
}

export const FormUpdate = (props) => {
    const {
        checkId,
        title,
        handleData,
        actions,
        className,
        route,
        refreshObjects,
        setVisible,
        setResident,
        setParams,
        handleAfterCallApi,
        handleRefreshObject,
        ...prop
    } = props
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState(() => {
        return location.search
    })

    async function fetchDataSubmit(info) {
        if (checkId) {
            const response = await actions.update(info)
            if (response) setLoading(false)
            if (response.data.status) {
                if (route) navigate(route + query)
                if (setParams) {
                    setParams((pre) => {
                        return { ...pre, render: !pre.render }
                    })
                    if (refreshObjects && refreshObjects[0]) {
                        refreshObjects.forEach((d) => {
                            if (typeof d === 'function') {
                                d((e) => {
                                    const status = e.status
                                    if (Array.isArray(e)) return []
                                    else if (typeof e === 'string') return ''
                                    else return { ...refreshObject(e), status }
                                })
                            }
                        })
                    }
                }
                if (setVisible) setVisible((pre) => !pre)
                dispatch(setToast({ ...listToast[0], detail: `Cập nhật ${title || 'dữ liệu'} thành công!` }))
            } else dispatch(setToast({ ...listToast[1], detail: response.data.mess }))
        } else {
            const response = await actions.add(info)
            if (response) setLoading(false)
            if (response.data.status) {
                scrollToTop()
                if (refreshObjects && refreshObjects[0]) {
                    refreshObjects.forEach((d) => {
                        if (typeof d === 'function') {
                            d((e) => {
                                if (e) {
                                    const status = e.status
                                    if (typeof e === 'boolean') return !e
                                    if (Array.isArray(e)) return []
                                    else if (typeof e === 'string') return ''
                                    else return { ...refreshObject(e), status }
                                }
                            })
                        }
                    })
                }
                if (setParams)
                    setParams((pre) => {
                        return { ...pre, render: !pre.render }
                    })
                if (handleAfterCallApi) handleAfterCallApi(info)
                if (handleRefreshObject) handleRefreshObject()
                dispatch(setToast({ ...listToast[0], detail: `Thêm ${title || 'dữ liệu'} thành công!` }))
            } else dispatch(setToast({ ...listToast[1], detail: response.data.mess }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const info = handleData()
        if (typeof info === 'string') {
            dispatch(setToast({ ...listToast[1], detail: info }))
            setLoading(false)
        } else {
            fetchDataSubmit(info)
        }
    }

    return (
        <div className={classNames({ card: !setVisible }, className)} {...prop}>
            <form onSubmit={handleSubmit}>
                {title && (
                    <div
                        className="font-left flex align-items-center mb-4"
                        style={{ height: '50px', borderBottom: '2px solid #dee2e6' }}
                    >
                        <b className="text-xl p-0">
                            {checkId ? 'Chi tiết' : 'Thêm mới'} {title}
                        </b>
                    </div>
                )}
                {props.children}
                <div className="justify-content-end flex gap-3">
                    {route || setVisible ? (
                        <Button
                            type="button"
                            raised
                            size="small"
                            severity="danger"
                            icon={setVisible ? 'pi pi-times' : ''}
                            label={setVisible ? 'Hủy' : 'Trở về'}
                            onClick={() => {
                                if (route && !setVisible) navigate(route + query)
                                else {
                                    setVisible(false)
                                    if (refreshObjects && refreshObjects[0]) {
                                        refreshObjects.forEach((d) => {
                                            if (typeof d === 'function') {
                                                d((e) => {
                                                    if (Array.isArray(e)) return []
                                                    else if (typeof e === 'string') return ''
                                                    else return { ...refreshObject(e) }
                                                })
                                            }
                                        })
                                    }
                                }
                            }}
                        />
                    ) : (
                        ''
                    )}
                    {route && actions && <Button
                        type="submit"
                        raised
                        loading={loading}
                        size="small"
                        icon="pi pi-save"
                        severity="info"
                        label={setVisible ? 'Xác nhận' : checkId ? 'Cập nhật' : 'Thêm mới'}
                    />}
                </div>
            </form>
        </div>
    )
}

export const FormUpdateDialog = (props) => {
    const { title, visible, setVisible, onHide, ...prop } = props
    return (
        Boolean(visible) && <Dialogz title={title} visible={Boolean(visible)} onHide={onHide} setVisible={setVisible} width="1200px">
            <FormUpdate setVisible={setVisible} checkId={typeof visible === 'number' || typeof visible === 'string'} {...prop}>
                <div className="card mt-4">{props.children}</div>
            </FormUpdate>
        </Dialogz>
    )
}
