import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

import {QuizzesComponent} from "./quizzes.component";

const GRADE_ROUTE = [{path: '', component: QuizzesComponent}];

@NgModule({
    declarations: [
        QuizzesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(GRADE_ROUTE)
    ]
})
export class QuizzesModule {
}
