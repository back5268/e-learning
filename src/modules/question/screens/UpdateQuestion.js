import { DropdownForm, FormUpdateDialog, InputForm, InputNumberForm } from '@/components'
import { removePropObject } from '@/utils'
import { useEffect, useState } from 'react'
import { addQuestionApi, updateQuestionApi } from '../api'
import { useDetailQuestion } from '../utils'

const UpdateQuestion = (props) => {
    const { setVisible, setParams, visible } = props
    const QuestionDetail = useDetailQuestion(typeof visible === 'number' ? visible : undefined)
    const [infos, setInfos] = useState({ name: '' })

    useEffect(() => {
        if (QuestionDetail) {
            setInfos({
                ...QuestionDetail,
            })
        }
    }, [QuestionDetail])

    const handleData = () => {
        let info = { ...infos }
        if (!(info.QuizId && info.QuizId[0])) return 'Vui lòng chọn Quizze!'
        if (typeof visible === 'number')
            info = { ...removePropObject(info, QuestionDetail), Question_id: visible }
        return info
    }

    return (
        <FormUpdateDialog
            title={(typeof visible === 'number' ? 'Chi tiết ' : 'Thêm mới ') + 'câu hỏi'}
            handleData={handleData}
            visible={visible}
            setVisible={setVisible}
            setParams={setParams}
            refreshObjects={[setInfos]}
            route={"/apartment_management"}
            actions={{ add: addQuestionApi, update: updateQuestionApi }}
        >
            <div className='grid grid-form'>
                <div className='col-12 lg:col-6'>
                    <InputForm
                        id="QuestionContent"
                        value={infos.QuestionContent}
                        onChange={(e) => setInfos({ ...infos, QuestionContent: e.target.value })}
                        label="Nội dung (*)"
                        required
                    />
                </div>
                <div className='col-12 lg:col-6'>
                    <DropdownForm
                        id="QuizId"
                        value={infos.QuizId}
                        optionValue="title"
                        options={[]}
                        onChange={(e) => setInfos({ ...infos, QuizId: e.target.value })}
                        label="Quizze (*)"
                    />
                </div>
            </div>
        </FormUpdateDialog>
    )
}

export default UpdateQuestion
