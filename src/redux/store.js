import { configureStore } from '@reduxjs/toolkit'
import toastSlice from './features/toast'
import userSlice from './features/userInfo'
import loadingSlice from './features/loading'

const store = configureStore({
    reducer: {
        loading: loadingSlice,
        toast: toastSlice,
        userInfo: userSlice,
    },
})

export default store
export const reduxStage = store.getState()
