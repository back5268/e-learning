import React, { useState } from 'react'
import { Columnz, DataTablez, useGetParams, HeaderListForm } from '@/components'
import { useListChapter } from '../utils'
import { GridForm, Inputz } from '@/components'
import UpdateChapter from './UpdateChapter'
import { deleteChapterApi } from '../api'

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

const Chapter = () => {
    const initParam = useGetParams()
    const [params, setParams] = useState(initParam)
    const [visibled, setVisibled] = useState(false)
    const data = useListChapter()

    return (
        <div className="card">
            {visibled && <UpdateChapter setVisible={setVisibled} setParams={setParams} visible={visibled} />}
            <HeaderListForm title="Danh sách chương" />
            <Header setParams={setParams} />
            <DataTablez
                value={data}
                title="chương"
                totalRecords={data.length}
                params={params}
                setParams={setParams}
                route="/Chapter"
                setVisibledDialog={setVisibled}
                actionsInfo={{ deleteAction: deleteChapterApi }}
            >
                <Columnz field="id" header="Id" />
                <Columnz field="title" header="Tiêu đề" />
                <Columnz header="Khóa học" />
            </DataTablez>
        </div>
    )
}

export default Chapter
