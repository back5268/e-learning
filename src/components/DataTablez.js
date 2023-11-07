import React, { useState, Fragment, useEffect, useRef, memo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Column, DataTable } from '@/uiCore'
import { confirmDialog } from 'primereact/confirmdialog'
import { setToast } from '@/redux/features/toast'
import { removeUndefinedProps } from '@/utils'
import moment from 'moment'
import { listToast } from '@/constants'

export const Body = ({ data, value, key, label }) => {
    key = key || 'id'
    label = label || 'Name'
    const item = data && data[0] ? data.find((d) => d[key] === value) : null
    if (item)
        return item.color ? (
            <span
                className="text-center font-bold text-white text-xs"
                style={{
                    backgroundColor: item.color,
                    borderRadius: '4px',
                    padding: '4px',
                    minWidth: '100px',
                    display: 'inline-block',
                }}
            >
                {item[label]}
            </span>
        ) : (
            <p>{item[label]}</p>
        )
    else return ''
}

export const TimeBody = (value, type) => {
    if (value && type === 'date') return <Fragment>{moment(value).format('DD/MM/YYYY')}</Fragment>
    if (value) return <Fragment>{moment(value).format('DD/MM/YYYY HH:mm:ss')}</Fragment>
}

export const Columnz = (props) => {
    const { ...prop } = props
    return <Column {...prop} />
}

export const useGetParams = () => {
    const location = useLocation()
    const params = {}
    params.page = 1
    params.limit = 20
    params.render = false
    const queryParams = new URLSearchParams(location.search)
    for (let [key, value] of queryParams.entries()) {
        params[key] = Number(value) || value
    }
    params.first = (params.page - 1) * params.limit
    return params
}

export const ActionBody = ({
    id,
    route,
    deleteAction,
    params,
    setParams,
    setVisibledDialog,
    handleDelete,
    moreActions,
    handleAfterCallApi,
}) => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState(null)

    async function accept() {
        const params = handleDelete ? handleDelete(id) : { id }
        const response = await deleteAction(params)
        if (response.data.status) {
            dispatch(setToast({ ...listToast[0], detail: 'Xóa dữ liệu thành công!' }))
            if (params && setParams) {
                setParams((pre) => {
                    return { ...pre, render: !pre.render }
                })
            }
            if (handleAfterCallApi) handleAfterCallApi(id)
        } else dispatch(setToast({ ...listToast[1], detail: response.data.mess }))
    }

    const confirm = () => {
        confirmDialog({
            message: 'Bạn có muốn tiếp tục xóa dữ liệu này?',
            header: 'E-learning',
            icon: 'pi pi-info-circle',
            accept,
        })
    }

    useEffect(() => {
        if (params) {
            setQuery(
                '?' +
                new URLSearchParams(
                    removeUndefinedProps({
                        ...params,
                        page: undefined,
                        limit: undefined,
                        render: undefined,
                        first: undefined,
                    }),
                ).toString(),
            )
        }
    }, [params])

    return (
        <div className="gap-2 flex justify-content-center">
            {route &&
                (setVisibledDialog ? (
                    <Button onClick={() => setVisibledDialog(id)} icon="pi pi-eye" rounded outlined />
                ) : (
                    <Link to={route + '/detail/' + id + (query ? query : '')}>
                        <Button icon="pi pi-pencil" severity="info" rounded outlined />
                    </Link>
                ))}
            {route && (
                <Button type="button" rounded outlined icon="pi pi-trash" onClick={confirm} severity="danger" />
            )}
        </div>
    )
}

export const RenderHeader = ({
    route,
    setVisibledDialog,
}) => {
    return (
        <div className="flex flex-wrap justify-content-between gap-2 align-items-center">
            <div className="flex gap-2">
                {route &&
                    (setVisibledDialog ? (
                        <Button
                            onClick={() => setVisibledDialog(true)}
                            icon="pi pi-plus"
                            label="Thêm mới"
                            size="small"
                            severity="info"
                            raised
                        />
                    ) : (
                        <Link to={route + '/insert'}>
                            <Button icon="pi pi-plus" severity="info" label="Thêm mới" size="small" raised />
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export const DataTablez = memo((props) => {
    const {
        params,
        setParams,
        totalRecords,
        title,
        dataKey,
        selectedProducts,
        setSelectedProducts,
        route,
        setVisibledDialog,
        headerInfo,
        actionsInfo,
        hideParams,
        handleAfterCallApi,
        ...prop
    } = props
    const { items, moreOptions, exportApi, setVisibleImport } = headerInfo || {}
    const { deleteAction, noDialog, handleDelete, moreActions } = actionsInfo || {}
    const [loading, setLoading] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const onPage = (event) => {
        setParams({
            ...params,
            first: event.first,
            limit: event.rows,
            page: event.page !== 0 ? event.page + 1 : 1,
        })
    }

    const timeoutRef = useRef()
    useEffect(() => {
        loadLazyData()
    }, [params])

    const loadLazyData = () => {
        setLoading(true)
        timeoutRef.current = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        if (hideParams) return
        const query = {}
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                const value = params[key]
                // if (Array.isArray(value) && !value[0]) {
                // } else if (!['rows', 'render', 'first'].includes(key) && !['', undefined, null].includes(value))
                //     query[key] = value
                if (['page', 'limit'].includes(key)) {
                    query[key] = value
                }
            }
        }
        navigate(location.pathname + '?' + new URLSearchParams(query).toString())
    }, [params])

    return (
        <DataTable
            lazy
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            paginator
            rowHover
            header={RenderHeader({
                route,
                setVisibledDialog,
                selectedProducts,
                items,
                moreOptions,
                params,
                setParams,
                handleAfterCallApi,
                exportApi,
                title,
                setVisibleImport,
            })}
            first={params.first}
            rows={params.limit}
            totalRecords={totalRecords}
            rowsPerPageOptions={[20, 50, 100]}
            onPage={onPage}
            dataKey={dataKey ? dataKey : 'id'}
            loading={loading}
            showGridlines
            stripedRows
            emptyMessage={'Không tìm thấy ' + title}
            currentPageReportTemplate="Tổng số: {totalRecords} bản ghi"
            selection={selectedProducts}
            selectionMode="multiple"
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            {...prop}
        >
            {selectedProducts && setSelectedProducts && (
                <Columnz selectionMode="multiple" headerStyle={{ width: '3rem' }} />
            )}
            <Columnz header="#" body={(data, options) => options.rowIndex + 1} style={{ width: '1rem' }} />
            {props.children}
            {actionsInfo && (
                <Columnz
                    header="Actions"
                    body={(e) =>
                        ActionBody({
                            route,
                            params,
                            setParams,
                            id: dataKey ? e[dataKey] : e.id,
                            deleteAction,
                            setVisibledDialog: noDialog ? undefined : setVisibledDialog,
                            handleDelete,
                            moreActions,
                            handleAfterCallApi,
                        })
                    }
                />
            )}
        </DataTable>
    )
})

export const DataTablezV2 = (props) => {
    const { data, title, dataKey, handleDelete, deleteAction, setData, ...prop } = props
    const dispatch = useDispatch()

    async function accept(id) {
        const params = handleDelete ? handleDelete(id) : { id }
        const response = await deleteAction(params)
        if (response.data.status) {
            dispatch(setToast({ ...listToast[0], detail: 'Xóa dữ liệu thành công!' }))
            if (setData) setData(id)
        } else dispatch(setToast({ ...listToast[1], detail: response.data.mess }))
    }

    const confirm = (id) => {
        confirmDialog({
            message: 'Bạn có muốn tiếp tục xóa dữ liệu này?',
            header: 'E-learning',
            icon: 'pi pi-info-circle',
            accept: () => accept(id),
        })
    }

    const ActionBody = (id) => {
        return (
            <Button type="button" rounded outlined icon="pi pi-trash" onClick={() => confirm(id)} severity="danger" />
        )
    }

    return (
        <DataTable
            value={data}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            paginator
            first="0"
            rows="100"
            currentPageReportTemplate="Tổng số: {totalRecords} bản ghi"
            totalRecords={data.length}
            dataKey={dataKey ? dataKey : 'id'}
            stripedRows
            showGridlines
            emptyMessage={'Không tìm thấy ' + title}
            {...prop}
        >
            <Columnz header="#" body={(data, options) => Number(options.rowIndex) + 1} style={{ width: '1rem' }} />
            {props.children}
            {deleteAction && <Columnz header="Actions" body={(e) => ActionBody(e.id)} />}
        </DataTable>
    )
}
