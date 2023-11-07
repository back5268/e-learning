import React, { useState } from 'react'
import { Columnz, DataTablez, useGetParams, HeaderListForm } from '@/components'
import { useListQuizze } from '../utils'
import { GridForm, Inputz } from '@/components'
import UpdateQuizze from './UpdateQuiz'
import { deleteQuizzeApi } from '../api'

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

const Quizze = () => {
    const initParam = useGetParams()
    const [params, setParams] = useState(initParam)
    const [visibled, setVisibled] = useState(false)
    const data = useListQuizze()

    return (
        <div className="card">
            {visibled && <UpdateQuizze setVisible={setVisibled} setParams={setParams} visible={visibled} />}
            <HeaderListForm title="Danh sách quizzes" />
            <Header setParams={setParams} />
            <DataTablez
                value={data}
                title="quizzes"
                totalRecords={data.length}
                params={params}
                setParams={setParams}
                route="/Quizze"
                setVisibledDialog={setVisibled}
                actionsInfo={{ deleteAction: deleteQuizzeApi }}
            >
                <Columnz field="id" header="Id" />
                <Columnz field="title" header="Tiêu đề" />
                <Columnz field="duration" header="Thời gian" />
                <Columnz field="totalQuestion" header="Số câu hỏi" />
                <Columnz header="Bài học" />
            </DataTablez>
        </div>
    )
}

export default Quizze
