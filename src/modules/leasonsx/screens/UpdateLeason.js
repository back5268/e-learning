import { DropdownForm, FormUpdateDialog, InputForm, InputNumberForm } from '@/components'
import { removePropObject } from '@/utils'
import { useEffect, useState } from 'react'
import { addLeasonApi, updateLeasonApi } from '../api'
import { useDetailLeason } from '../utils'
import { useListCourse } from '@/modules/courses/utils'

const UpdateLeason = (props) => {
    const { setVisible, setParams, visible } = props
    const LeasonDetail = useDetailLeason(typeof visible === 'number' ? visible : undefined)
    const [infos, setInfos] = useState({ name: '' })
    const courses = useListCourse()

    useEffect(() => {
        if (LeasonDetail) {
            setInfos({
                ...LeasonDetail,
            })
        }
    }, [LeasonDetail])

    const handleData = () => {
        let info = { ...infos }
        if (!(info.ChapterId && info.ChapterId[0])) return 'Vui lòng chọn chapter!'
        if (typeof visible === 'number')
            info = { ...removePropObject(info, LeasonDetail), Leason_id: visible }
        return info
    }

    return (
        <FormUpdateDialog
            title={(typeof visible === 'number' ? 'Chi tiết ' : 'Thêm mới ') + 'bài học'}
            handleData={handleData}
            visible={visible}
            setVisible={setVisible}
            setParams={setParams}
            refreshObjects={[setInfos]}
            route={"/apartment_management"}
            actions={{ add: addLeasonApi, update: updateLeasonApi }}
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
                        id="ChapterId"
                        value={infos.ChapterId}
                        optionValue="title"
                        options={courses}
                        onChange={(e) => setInfos({ ...infos, ChapterId: e.target.value })}
                        label="Chapter (*)"
                    />
                </div>
            </div>
        </FormUpdateDialog>
    )
}

export default UpdateLeason
