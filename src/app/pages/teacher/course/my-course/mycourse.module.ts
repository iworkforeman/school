import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

import {MyCourseComponent} from "./mycourse.component";

const TEACHER_ROUTE = [{path: '', component: MyCourseComponent}];

@NgModule({
    declarations: [
        MyCourseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(TEACHER_ROUTE)
    ]
})
export class MyCourseModule {
}
