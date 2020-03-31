import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';

import {CreateCourseComponent} from "./createcourse.component";
import {YoutubeCardComponent} from "./youtube-card/youtube-card.component";
import {ImageUploadComponent} from './image/imageupload.component';

const TEACHER_ROUTE = [{path: '', component: CreateCourseComponent}];

@NgModule({
    declarations: [
        CreateCourseComponent,
        YoutubeCardComponent,
        ImageUploadComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule.forChild(TEACHER_ROUTE)
    ]
})
export class CreateCourseModule {
}
