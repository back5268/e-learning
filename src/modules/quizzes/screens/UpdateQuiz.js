import { DropdownForm, FormUpdateDialog, InputForm, InputNumberForm } from '@/components'
import { removePropObject } from '@/utils'
import { useEffect, useState } from 'react'
import { addQuizzeApi, updateQuizzeApi } from '../api'
import { useDetailQuizze } from '../utils'

const UpdateQuizze = (props) => {
    const { setVisible, setParams, visible } = props
    const QuizzeDetail = useDetailQuizze(typeof visible === 'number' ? visible : undefined)
    const [infos, setInfos] = useState({ name: '' })

    useEffect(() => {
        if (QuizzeDetail) {
            setInfos({
                ...QuizzeDetail,
            })
        }
    }, [QuizzeDetail])

    const handleData = () => {
        let info = { ...infos }
        if (!(info.lessonId && info.lessonId[0])) return 'Vui lòng chọn bài học!'
        if (typeof visible === 'number')
            info = { ...removePropObject(info, QuizzeDetail), Quizze_id: visible }
        return info
    }

    return (
        <FormUpdateDialog
            title={(typeof visible === 'number' ? 'Chi tiết ' : 'Thêm mới ') + 'quizze'}
            handleData={handleData}
            visible={visible}
            setVisible={setVisible}
            setParams={setParams}
            refreshObjects={[setInfos]}
            route={"/apartment_management"}
            actions={{ add: addQuizzeApi, update: updateQuizzeApi }}
        >
            <div className='grid grid-form'>
                <div className='col-12 lg:col-6'>
                    <InputForm
                        id="title"
                        value={infos.title}
                        onChange={(e) => setInfos({ ...infos, title: e.target.value })}
                        label="Tiêu đề (*)"
                        required
                    />
                    <InputNumberForm
                        id="duration"
                        value={infos.duration}
                        handleOnChange={(e) => setInfos({ ...infos, duration: e })}
                        label="Thời gian (*)"
                        required
                    />
                    <InputNumberForm
                        id="totalQuestion"
                        value={infos.totalQuestion}
                        handleOnChange={(e) => setInfos({ ...infos, totalQuestion: e })}
                        label="Số câu hỏi (*)"
                        required
                    />
                </div>
                <div className='col-12 lg:col-6'>
                    <InputNumberForm
                        id="passingScore"
                        value={infos.passingScore}
                        handleOnChange={(e) => setInfos({ ...infos, passingScore: e })}
                        label="Điểm qua môn (*)"
                        required
                    />
                    <DropdownForm
                        id="lessonId"
                        value={infos.lessonId}
                        optionValue="title"
                        options={[]}
                        onChange={(e) => setInfos({ ...infos, lessonId: e.target.value })}
                        label="Bài học (*)"
                    />
                </div>
            </div>
        </FormUpdateDialog>
    )
}

export default UpdateQuizze
