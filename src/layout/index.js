import './styles/layout.scss'
import React, { useState, useRef } from 'react'
import { classNames } from 'primereact/utils'
import AppTopbar from './AppTopbar'
import AppSidebar from './AppSidebar'
import AppFooter from './AppFooter'

const Layout = (props) => {
    const sidebarRef = useRef(null)
    const [hideSidebar, setHideSidebar] = useState(false)

    const onMenuToggle = () => {
        setHideSidebar(!hideSidebar)
    }

    return (
        <React.Fragment>
            <div className="layout-wrapper">
                <AppTopbar onMenuToggle={onMenuToggle} />
                <div ref={sidebarRef} className={classNames('layout-sidebar', { 'hide-menu': hideSidebar })}>
                    <AppSidebar />
                </div>
                <div className={classNames('layout-main-container', { 'hide-sidebar': hideSidebar })}>
                    <div className="layout-main">{props.children}</div>
                    <AppFooter />
                </div>
                <div className={classNames({ 'layout-mask': !hideSidebar })} onClick={onMenuToggle}></div>
            </div>
        </React.Fragment>
    )
}

export default Layout
