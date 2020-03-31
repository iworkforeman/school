import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {Ng5SliderModule} from 'ng5-slider';

import {GradeComponent} from "./grade.component";

const GRADE_ROUTE = [{path: '', component: GradeComponent}];

@NgModule({
    declarations: [
        GradeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        Ng5SliderModule,
        RouterModule.forChild(GRADE_ROUTE)
    ]
})
export class GradeModule {
}
