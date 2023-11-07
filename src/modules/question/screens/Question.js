import React, { useState } from 'react'
import { Columnz, DataTablez, useGetParams, HeaderListForm, Body } from '@/components'
import { useListQuestion } from '../utils'
import { GridForm, Inputz } from '@/components'
import UpdateQuestion from './UpdateQuestion'
import { deleteQuestionApi } from '../api'

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

const Question = () => {
    const initParam = useGetParams()
    const [params, setParams] = useState(initParam)
    const [visibled, setVisibled] = useState(false)
    const data = useListQuestion()
    const quizzs = useListQuestion()

    return (
        <div className="card">
            {visibled && <UpdateQuestion setVisible={setVisibled} setParams={setParams} visible={visibled} />}
            <HeaderListForm title="Danh sách câu hỏi" />
            <Header setParams={setParams} />
            <DataTablez
                value={data}
                title="Questions"
                totalRecords={data.length}
                params={params}
                setParams={setParams}
                route="/Question"
                setVisibledDialog={setVisibled}
                actionsInfo={{ deleteAction: deleteQuestionApi }}
            >
                <Columnz field="id" header="Id" />
                <Columnz field="QuestionContent" header="Nội dung" />
                <Columnz body={e => Body({ data: quizzs, value: e.QuizId })} header="Quizze" />
            </DataTablez>
        </div>
    )
}

export default Question
