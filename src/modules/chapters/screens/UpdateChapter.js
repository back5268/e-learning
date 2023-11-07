import { DropdownForm, FormUpdateDialog, InputForm, InputNumberForm } from '@/components'
import { removePropObject } from '@/utils'
import { useEffect, useState } from 'react'
import { addChapterApi, updateChapterApi } from '../api'
import { useDetailChapter } from '../utils'
import { useListCourse } from '@/modules/courses/utils'

const UpdateChapter = (props) => {
    const { setVisible, setParams, visible } = props
    const ChapterDetail = useDetailChapter(typeof visible === 'number' ? visible : undefined)
    const [infos, setInfos] = useState({ name: '' })
    const courses = useListCourse()

    useEffect(() => {
        if (ChapterDetail) {
            setInfos({
                ...ChapterDetail,
            })
        }
    }, [ChapterDetail])

    const handleData = () => {
        let info = { ...infos }
        if (!(info.CourseId && info.CourseId[0])) return 'Vui lòng chọn khóa học!'
        if (typeof visible === 'number')
            info = { ...removePropObject(info, ChapterDetail), Chapter_id: visible }
        return info
    }

    return (
        <FormUpdateDialog
            title={(typeof visible === 'number' ? 'Chi tiết ' : 'Thêm mới ') + 'Chapter'}
            handleData={handleData}
            visible={visible}
            setVisible={setVisible}
            setParams={setParams}
            refreshObjects={[setInfos]}
            route={"/apartment_management"}
            actions={{ add: addChapterApi, update: updateChapterApi }}
        >
            <div className='grid grid-form'>
                <div className='col-12 lg:col-6'>
                    <InputForm
                        id="Title"
                        value={infos.Title}
                        onChange={(e) => setInfos({ ...infos, Title: e.target.value })}
                        label="Tiêu đề (*)"
                        required
                    />
                </div>
                <div className='col-12 lg:col-6'>
                    <DropdownForm
                        id="CourseId"
                        value={infos.CourseId}
                        optionValue="title"
                        options={courses}
                        onChange={(e) => setInfos({ ...infos, CourseId: e.target.value })}
                        label="Khóa học (*)"
                    />
                </div>
            </div>
        </FormUpdateDialog>
    )
}

export default UpdateChapter
