import React, { useState } from 'react'
import MenuSidebar from './MenuSidebar'
import { MenuProvider } from './context/menucontext'

const AppSidebar = () => {
    const [model, setModel] = useState([{
        children: [
            {
                name: "Quản lý danh mục", route: "/categories", icon: "pi pi-microsoft"
            },
            {
                name: "Quản lý khóa học", route: "/courses", icon: "pi pi-desktop"
            },
            {
                name: "Quản lý chương", route: "/chapters", icon: "pi pi-palette"
            },
            {
                name: "Quản lý bài học", route: "/leasons", icon: "pi pi-book"
            },
            {
                name: "Quản lý quizzes", route: "/quizzes", icon: "pi pi-folder"
            },
            {
                name: "Quản lý Câu hỏi", route: "/questions", icon: "pi pi-question"
            },
        ]
    }
    ])

    return (
        <MenuProvider>
            <ul className="layout-menu ">
                {model.map((item, i) => {
                    return <MenuSidebar item={item} root={true} index={i} key={i} />
                })}
            </ul>
        </MenuProvider>
    )
}

export default AppSidebar
