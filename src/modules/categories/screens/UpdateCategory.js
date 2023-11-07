import { DropdownForm, FormUpdateDialog, InputForm, InputNumberForm } from '@/components'
import { removePropObject } from '@/utils'
import { useEffect, useState } from 'react'
import { addCategoryApi, updateCategoryApi } from '../api'
import { useDetailCategory } from '../utils'
import { useListCourse } from '@/modules/courses/utils'

const UpdateCategory = (props) => {
    const { setVisible, setParams, visible } = props
    const CategoryDetail = useDetailCategory(typeof visible === 'number' ? visible : undefined)
    const [infos, setInfos] = useState({ name: '' })
    const courses = useListCourse()

    useEffect(() => {
        if (CategoryDetail) {
            setInfos({
                ...CategoryDetail,
            })
        }
    }, [CategoryDetail])

    const handleData = () => {
        let info = { ...infos }
        if (typeof visible === 'number')
            info = { ...removePropObject(info, CategoryDetail), Category_id: visible }
        return info
    }

    return (
        <FormUpdateDialog
            title={(typeof visible === 'number' ? 'Chi tiết ' : 'Thêm mới ') + 'Category'}
            handleData={handleData}
            visible={visible}
            setVisible={setVisible}
            setParams={setParams}
            refreshObjects={[setInfos]}
            route={"/apartment_management"}
            actions={{ add: addCategoryApi, update: updateCategoryApi }}
        >
            <InputForm
                id="Name"
                value={infos.Name}
                onChange={(e) => setInfos({ ...infos, Name: e.target.value })}
                label="Tên category (*)"
                required
            />
        </FormUpdateDialog>
    )
}

export default UpdateCategory
