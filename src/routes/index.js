import { AccessDeniedPage, ChangePassword, ErrorPage, ForgotPassword, Login, SetPassword } from '@/modules/auth'
import Category from '@/modules/categories/screens/Category'
import Chapter from '@/modules/chapters/screens/Chapter'
import Course from '@/modules/courses/screens/Course'
import Leason from '@/modules/leasonsx/screens/Leason'
import Question from '@/modules/question/screens/Question'
import Quizzes from '@/modules/quizzes/screens/Quiz'


export const routes = [
    // ==================== Authentication ==============================
    { path: '/auth/login', component: Login, public: true },
    { path: '/auth/forgot_password', component: ForgotPassword, public: true },
    { path: '/auth/set_password', component: SetPassword, public: true },
    { path: '/auth/change_password', component: ChangePassword },

    // ==================== Quản Lý Công Ty ==============================
    { path: '/', component: Category, layout: true },
    { path: '/courses', component: Course, layout: true },
    { path: '/leasons', component: Leason, layout: true },
    { path: '/quizzes', component: Quizzes, layout: true },
    { path: '/questions', component: Question, layout: true },
    { path: '/chapters', component: Chapter, layout: true },
    { path: '/categories', component: Category, layout: true },
]

export const errorPage = { path: '*', component: ErrorPage }
export const accessDeniedPage = { path: '*', component: AccessDeniedPage }
