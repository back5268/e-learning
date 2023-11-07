import React, { Fragment } from 'react'
import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { hideToast } from './redux/features/toast'
import { ConfirmDialog } from 'primereact/confirmdialog'
import { Toast } from 'primereact/toast'
import { ScrollTop } from 'primereact/scrolltop'
import { Loading } from './modules/auth'
import { errorPage, routes } from './routes'
import { PublicRoutes, PrivateRoutes } from './routes/Routes'
import Layout from '@/layout'

function App() {
    const dispatch = useDispatch()
    const toastOptions = useSelector((state) => state.toast)
    const loading = useSelector((state) => state.loading)
    const toast = useRef(null)

    useEffect(() => {
        if (toastOptions.severity) {
            const show = () => {
                toast.current.show({ ...toastOptions })
            }
            show()
            dispatch(hideToast())
        }
    }, [toastOptions])

    return (
        <div className="App">
            <ScrollTop />
            <ConfirmDialog />
            <Toast ref={toast} />
            <Router>
                {loading ? (
                    <Loading loading={loading} />
                ) : (
                    <Routes>
                        {routes.map((route, index) => {
                            const DefaultLayout = route.layout ? Layout : Fragment
                            const Page = route.component
                            return (
                                <Route key={index} element={!route.public ? <PrivateRoutes /> : <PublicRoutes />}>
                                    <Route
                                        path={route.path}
                                        element={
                                            <DefaultLayout>
                                                <Page />
                                            </DefaultLayout>
                                        }
                                    />
                                </Route>
                            )
                        })}
                        <Route path={errorPage.path} element={<errorPage.component />} />
                    </Routes>
                )}
            </Router>
        </div>
    )
}

export default App
