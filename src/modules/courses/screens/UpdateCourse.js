import { DropdownForm, FormUpdateDialog, InputForm, InputNumberForm } from '@/components'
import { removePropObject } from '@/utils'
import { useEffect, useState } from 'react'
import { addCourseApi, updateCourseApi } from '../api'
import { useDetailCourse } from '../utils'

const UpdateCourse = (props) => {
    const { setVisible, setParams, visible } = props
    const CourseDetail = useDetailCourse(typeof visible === 'number' ? visible : undefined)
    const [infos, setInfos] = useState({ name: '' })

    useEffect(() => {
        if (CourseDetail) {
            setInfos({
                ...CourseDetail,
            })
        }
    }, [CourseDetail])

    const handleData = () => {
        let info = { ...infos }
        if (!(info.categorryId && info.categorryId[0])) return 'Vui lòng chọn danh mục!'
        if (typeof visible === 'number')
            info = { ...removePropObject(info, CourseDetail), Course_id: visible }
        return info
    }

    return (
        <FormUpdateDialog
            title={(typeof visible === 'number' ? 'Chi tiết ' : 'Thêm mới ') + 'Course'}
            handleData={handleData}
            visible={visible}
            setVisible={setVisible}
            setParams={setParams}
            refreshObjects={[setInfos]}
            route={"/apartment_management"}
            actions={{ add: addCourseApi, update: updateCourseApi }}
        >
            <div className='grid grid-form'>
                <div className='col-12 lg:col-6'>
                    <InputForm
                        id="Name"
                        value={infos.Name}
                        onChange={(e) => setInfos({ ...infos, Name: e.target.value })}
                        label="Tên (*)"
                        required
                    />
                    <InputForm
                        id="Description"
                        value={infos.Description}
                        onChange={(e) => setInfos({ ...infos, Description: e.target.value })}
                        label="Mô tả"
                    />
                    <InputNumberForm
                        id="Price"
                        value={infos.Price}
                        handleOnChange={(e) => setInfos({ ...infos, Price: e })}
                        label="Giá (*)"
                        required
                    />
                </div>
                <div className='col-12 lg:col-6'>
                    <InputForm
                        id="image_url"
                        value={infos.image_url}
                        onChange={(e) => setInfos({ ...infos, image_url: e.target.value })}
                        label="Image Url (*)"
                        required
                    />
                    <DropdownForm
                        id="categorryId"
                        value={infos.categorryId}
                        optionValue="title"
                        options={[]}
                        onChange={(e) => setInfos({ ...infos, categorryId: e.target.value })}
                        label="Danh mục (*)"
                    />
                </div>
            </div>
        </FormUpdateDialog>
    )
}

export default UpdateCourse
