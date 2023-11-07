import React, { useState } from 'react'
import { Columnz, DataTablez, useGetParams, HeaderListForm } from '@/components'
import { useListCategory } from '../utils'
import { GridForm, Inputz } from '@/components'
import UpdateCategory from './UpdateCategory'
import { deleteCategoryApi } from '../api'

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

const Category = () => {
    const initParam = useGetParams()
    const [params, setParams] = useState(initParam)
    const [visibled, setVisibled] = useState(false)
    const data = useListCategory()

    return (
        <div className="card">
            {visibled && <UpdateCategory setVisible={setVisibled} setParams={setParams} visible={visibled} />}
            <HeaderListForm title="Danh mục" />
            <Header setParams={setParams} />
            <DataTablez
                value={data}
                title="danh mục"
                totalRecords={data.length}
                params={params}
                setParams={setParams}
                route="/Category"
                setVisibledDialog={setVisibled}
                actionsInfo={{ deleteAction: deleteCategoryApi }}
            >
                <Columnz field="id" header="Id" />
                <Columnz field="title" header="Tên danh mục" />
            </DataTablez>
        </div>
    )
}

export default Category
