import { InputText, Dropdown, Button, Calendar } from '@/uiCore'
import { refreshObject } from '@/utils'
import { MultiSelect } from 'primereact/multiselect'
import { classNames } from 'primereact/utils'
import { useLocation } from 'react-router-dom'
import { removeUndefinedProps } from '@/utils'
import { databaseDate } from '@/lib'

export const Calendarz = (props) => {
    const { className, ...inputprop } = props
    return (
        <div className={classNames('col-12 mb-3 md:col-6 lg:col-3', className)}>
            <Calendar
                showIcon
                readOnlyInput
                showButtonBar
                dateFormat="dd/mm/yy"
                selectionMode="range"
                placeholder="Chọn khoảng thời gian"
                className="w-full"
                style={{ minHeight: '42px' }}
                {...inputprop}
            />
        </div>
    )
}

export const MultiSelectz = (props) => {
    const { optionLabel, optionValue, className, ...inputprop } = props
    return (
        <div className={classNames('col-12 mb-3 md:col-6 lg:col-3', className)}>
            <MultiSelect
                filter
                display="chip"
                optionValue={optionValue ? optionValue : 'id'}
                optionLabel={optionLabel ? optionLabel : 'name'}
                className="w-full"
                emptyMessage="Không tìm thấy dữ liệu"
                style={{ minHeight: '42px' }}
                {...inputprop}
            />
        </div>
    )
}

export const Inputz = (props) => {
    const { id, placeholder, className, ...inputprop } = props
    return (
        <div className={classNames('mb-3 col-12 md:col-6 lg:col-3', className)}>
            <InputText
                id={id}
                placeholder={placeholder ? placeholder : 'Tìm kiếm theo tên ...'}
                className="w-full"
                style={{ minHeight: '42px' }}
                {...inputprop}
            />
        </div>
    )
}

export const Dropdownz = (props) => {
    const { optionLabel, optionValue, className, ...inputprop } = props
    return (
        <div className={classNames('col-12 mb-3 md:col-6 lg:col-3', className)}>
            <Dropdown
                filter
                className="w-full"
                optionLabel={optionLabel ? optionLabel : 'name'}
                optionValue={optionValue ? optionValue : 'id'}
                emptyMessage="Không tìm thấy dữ liệu"
                style={{ minHeight: '42px' }}
                {...inputprop}
            />
        </div>
    )
}

export const HeaderListForm = ({ title, SubTitle }) => {
    return (
        <div
            className="header__list-form flex align-items-center mb-4 justify-content-between"
            style={{ height: '50px', borderBottom: '2px solid #dee2e6' }}
        >
            <b className="text-xl p-0">{title}</b>
            {SubTitle && <SubTitle />}
        </div>
    )
}

export const GridForm = (props) => {
    const { className, setParams, filter, setFilter, handleFilter } = props
    const location = useLocation()

    const handleClear = () => {
        setParams((pre) => {
            return {
                page: pre.page || 1,
                limit: pre.limit || 20,
                first: pre.first || 0,
                render: pre.render,
            }
        })
        setFilter({ ...refreshObject(filter) })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let filters = { ...filter }
        if (filters.dates && filters.dates[0]) {
            filters.from = databaseDate(filter.dates[0])
            filters.to = filter.dates[1] ? databaseDate(filter.dates[1], true) : databaseDate(filter.dates[0], true)
            filters.dates = undefined
        }
        if (handleFilter) filters = handleFilter(filter)
        setParams((pre) => {
            return {
                page: pre.page || 1,
                limit: pre.limit || 20,
                first: pre.first || 0,
                render: pre.render,
                ...removeUndefinedProps(filters),
            }
        })
    }

    // useEffect(() => {
    //     const query = {}
    //     const queryParams = new URLSearchParams(location.search)
    //     const dates = []
    //     for (let [key, value] of queryParams.entries()) {
    //         if (key === 'from' || key === 'to') {
    //             if (key === 'from') {
    //                 dates[0] = new Date(value)
    //             }
    //             if (key === 'to') {
    //                 dates[1] = new Date(value)
    //             }
    //         } else query[key] = value === '0' || Number(value) ? Number(value) : value
    //     }
    //     if (dates && dates[0]) query['dates'] = dates
    //     setFilter({ ...filter, ...query })
    // }, [])

    return (
        <form onSubmit={handleSubmit} className="grid formgrid">
            {props.children}
            <div className={classNames('mb-4 col-12 md:col-12 lg:col-3 flex justify-content-end gap-3', className)}>
                <Button
                    type="button"
                    raised
                    size="small"
                    severity="secondary"
                    label="Làm mới"
                    onClick={() => handleClear()}
                />
                <Button type="submit" raised size="small" label="Lọc" severity="info" icon="pi pi-filter" />
            </div>
        </form>
    )
}
