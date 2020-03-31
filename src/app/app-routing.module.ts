import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {Layout2Component} from "./layout/layouts/layout-2/layout.component";
import {PupilComponent} from "./layout/pupil/pupil.component";
import {TeacherComponent} from "./layout/teacher/teacher.component";


const routes: Routes = [
    {
        path: "pupil",
        component: PupilComponent,
        children: [
            {
                path: "",
                redirectTo: "dashboard",
                pathMatch: "full",
            },
            {
                path: "dashboard",
                loadChildren: "./pages/pupil/dashboard/dashboard.module#DashboardModule"
            },
            {
                path: "course",
                loadChildren: "./pages/pupil/assignment/assignment.module#AssignmentModule"
            }
        ]
    },
    {
        path: "teacher",
        component: TeacherComponent,
        children: [
            {
                path: "",
                redirectTo: "dashboard",
                pathMatch: "full",
            },
            {
                path: "dashboard",
                loadChildren: "./pages/teacher/dashboard/teacherdashboard.module#TeacherDashboardModule"
            },
            {
                path: "create-course",
                loadChildren: "./pages/teacher/course/createcourse.module#CreateCourseModule"
            },
            {
                path: "edit-course",
                loadChildren: "./pages/teacher/course/edit-course/editcourse.module#EditCourseModule"
            },
            {
                path: "my-courses",
                loadChildren: "./pages/teacher/course/my-course/mycourse.module#MyCourseModule"
            },
            {
                path: "grade",
                loadChildren: "./pages/teacher/grade/grade.module#GradeModule"
            },
            {
                path: "grades",
                loadChildren: "./pages/teacher/grade-list/grades.module#GradesModule"
            },
            {
                path: "quizzes",
                loadChildren: "./pages/teacher/quizzes/quizzes.module#QuizzesModule"
            }
        ]
    },
    {
        path: "",
        component: Layout2Component,
        children: [
            {
                path: "",
                redirectTo: "login",
                pathMatch: "full",
            },
            {
                path: "login",
                loadChildren: "./pages/sample-pages/login/login.module#LoginModule"
            },
            {
                path: "sample-pages/lockscreen",
                loadChildren: "./pages/sample-pages/lockscreen/lockscreen.module#LockscreenModule"
            },
            {
                path: "404",
                loadChildren: "./pages/sample-pages/four-zero-four/four-zero-four.module#FourZeroFourModule"
            },
            {
                path: "**",
                redirectTo: "/404"
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
