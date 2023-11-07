import React, { useState } from 'react'
import { Columnz, DataTablez, useGetParams, HeaderListForm, Body } from '@/components'
import { useListCourse } from '../utils'
import { GridForm, Inputz } from '@/components'
import UpdateCourse from './UpdateCourse'
import { deleteCourseApi } from '../api'
import { useListCategory } from '@/modules/categories/utils'

const Header = ({ setParams }) => {
    const [filter, setFilter] = useState({ key_search: '' })

    return (
        <GridForm setParams={setParams} filter={filter} setFilter={setFilter} className="lg:col-9">
            <Inputz
                value={filter.key_search}
                placeholder="Tìm kiếm theo tên"
                onChange={(e) => setFilter({ ...filter, key_search: e.target.value })}
            />
        </GridForm>
    )
}

const Course = () => {
    const initParam = useGetParams()
    const [params, setParams] = useState(initParam)
    const [visibled, setVisibled] = useState(false)
    const data = useListCourse()
    const categories = useListCategory()

    return (
        <div className="card">
            {visibled && <UpdateCourse setVisible={setVisibled} setParams={setParams} visible={visibled} />}
            <HeaderListForm title="Danh sách khóa học" />
            <Header setParams={setParams} />
            <DataTablez
                value={data}
                title="khóa học"
                totalRecords={data.length}
                params={params}
                setParams={setParams}
                route="/Course"
                setVisibledDialog={setVisibled}
                actionsInfo={{ deleteAction: deleteCourseApi }}
            >
                <Columnz field="id" header="Id" />
                <Columnz field="Name" header="Tên khóa học" />
                <Columnz field="Descrpition" header="Mô tả" />
                <Columnz field="Price" header="Giá" />
                <Columnz field="isPublic" header="Trạng thái" />
                <Columnz field="LastUpdated" header="Thời gian cập nhật cuối" />
                <Columnz body={e => Body({ data: categories, value: e.categoryId })} header="Thuộc danh mục" />
            </DataTablez>
        </div>
    )
}

export default Course
