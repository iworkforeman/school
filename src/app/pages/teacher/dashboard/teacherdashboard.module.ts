import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {TeacherDashboardComponent} from "./teacherdashboard.component";
import {CourseCardComponent} from "../../../widgets/course-card/course-card.component";

const PUPIL_ROUTE = [{path: '', component: TeacherDashboardComponent}];

@NgModule({
    declarations: [
        TeacherDashboardComponent,
        CourseCardComponent
    ],
    imports: [
        RouterModule.forChild(PUPIL_ROUTE),
        CommonModule,
    ]
})
export class TeacherDashboardModule {
}
