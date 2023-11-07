import React, { useState } from 'react'
import { Columnz, DataTablez, useGetParams, HeaderListForm } from '@/components'
import { useListLeason } from '../utils'
import { GridForm, Inputz } from '@/components'
import UpdateLeason from './UpdateLeason'
import { deleteLeasonApi } from '../api'

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

const Leason = () => {
    const initParam = useGetParams()
    const [params, setParams] = useState(initParam)
    const [visibled, setVisibled] = useState(false)
    const data = useListLeason()

    return (
        <div className="card">
            {visibled && <UpdateLeason setVisible={setVisibled} setParams={setParams} visible={visibled} />}
            <HeaderListForm title="Danh sách bài học" />
            <Header setParams={setParams} />
            <DataTablez
                value={data}
                title="bài học"
                totalRecords={data.length}
                params={params}
                setParams={setParams}
                route="/Leason"
                setVisibledDialog={setVisibled}
                actionsInfo={{ deleteAction: deleteLeasonApi }}
            >
                <Columnz field="id" header="Id" />
                <Columnz field="title" header="Tiêu đề" />
                <Columnz header="Chapter" />
            </DataTablez>
        </div>
    )
}

export default Leason
