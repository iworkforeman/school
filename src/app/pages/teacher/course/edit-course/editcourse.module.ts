import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';

import {EditCourseComponent} from "./editcourse.component";
import {YoutubeCardComponent} from "../youtube-card/youtube-card.component";
import {ImageUploadComponent} from '../image/imageupload.component';

const EDIT_COURSE_ROUTE = [{path: '', component: EditCourseComponent}];

@NgModule({
    declarations: [
        EditCourseComponent,
        YoutubeCardComponent,
        ImageUploadComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule.forChild(EDIT_COURSE_ROUTE)
    ]
})
export class EditCourseModule {
}
