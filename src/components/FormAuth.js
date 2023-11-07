import { Button, Checkbox, InputText } from '@/uiCore'
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { classNames } from 'primereact/utils'
import { REGEX, getMessageFormat } from '@/constants'

export const FormAuth = (props) => {
    const {
        title,
        subtitle,
        linkSubtitle,
        handleSubmit,
        lableSubmit,
        titleFooter,
        linkTitleFooter,
        loading,
        rememberPassword,
        disabled,
    } = props

    return (
        <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
            <div className="flex flex-column align-items-center justify-content-center">
                <div
                    className="w-full surface-card pt-2 pb-6 px-4 sm:px-8"
                    style={{ borderTop: '6px solid rgb(60, 141, 188)' }}
                >
                    <div className="text-center mb-5 flex flex-column">
                        <div>
                            {title ? (
                                <div className="text-900 text-2xl font-semibold mt-6 mb-3">{title}</div>
                            ) : (
                                <div className=' mt-6 mb-4'>
                                    <b style={{ fontSize: '24px', color: '#3c8dbc' }}>E-LEARNING</b>
                                </div>
                            )}
                        </div>
                        {linkSubtitle ? (
                            <Link to={linkSubtitle}>
                                <Button
                                    icon="pi pi-arrow-left font-semibold"
                                    style={{ color: 'var(--primary-color)' }}
                                    label={subtitle}
                                    text
                                />
                            </Link>
                        ) : (
                            <span className="text-600 font-medium">{subtitle}</span>
                        )}
                    </div>

                    <form onSubmit={handleSubmit}>
                        {props.children}
                        {titleFooter && (
                            <div className="flex align-items-center justify-content-between gap-5">
                                <div className="flex align-items-center mt-2">
                                    {rememberPassword && (
                                        <Fragment>
                                            <Checkbox
                                                checked={rememberPassword.checked}
                                                onChange={() => rememberPassword.setChecked((pre) => !pre)}
                                                className="mr-2"
                                            ></Checkbox>
                                            <label>Nhớ mật khẩu</label>
                                        </Fragment>
                                    )}
                                </div>
                                <Link
                                    to={linkTitleFooter}
                                    className="font-medium no-underline text-right"
                                    style={{ color: 'var(--primary-color)' }}
                                >
                                    {titleFooter}
                                </Link>
                            </div>
                        )}
                        <Button
                            disabled={disabled}
                            loading={loading}
                            label={lableSubmit || 'Submit'}
                            className="w-full p-3 text-xl mt-4"
                        ></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export const FormInput = (props) => {
    const { id, label, placeholder, type, className, required, ...inputProp } = props
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
        <div className="mb-3">
            {label && (
                <div className="w-full flex justify-content-between">
                    <label htmlFor={id} className="w-full block text-900 text-lg font-medium mb-2">
                        {label}
                    </label>
                    {required && error && <span className="p-error w-full text-right">{error}</span>}
                </div>
            )}
            <InputText
                id={id}
                placeholder={placeholder || `Nhập ${label.toLowerCase()}`}
                className={classNames('md:w-30rem p-3', { 'p-invalid': error }, className)}
                onBlur={handleValidate}
                onInput={required && setFocus}
                required={required}
                pattern={type === 'password' ? undefined : REGEX[type]}
                type={type === 'phone' ? 'number' : type}
                {...inputProp}
            />
        </div>
    )
}
