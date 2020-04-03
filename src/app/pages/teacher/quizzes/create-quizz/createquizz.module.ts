import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {Ng5SliderModule} from 'ng5-slider';

import {CreateQuizzComponent} from "./createquizz.component";

const QUIZZ_ROUTE = [{path: '', component: CreateQuizzComponent}];

@NgModule({
    declarations: [
        CreateQuizzComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(QUIZZ_ROUTE)
    ]
})
export class CreateQuizzModule {
}
