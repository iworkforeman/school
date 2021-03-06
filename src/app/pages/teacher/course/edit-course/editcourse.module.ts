import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';

import {YoutubeCardModule} from '../../../../widgets/youtube-card/youtube-card.module';
import {ImageUploadModule} from '../../../../widgets/image-upload/imageupload.module';

import {EditCourseComponent} from "./editcourse.component";

const EDIT_COURSE_ROUTE = [{path: '', component: EditCourseComponent}];

@NgModule({
    declarations: [
        EditCourseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        YoutubeCardModule,
        ImageUploadModule,
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule.forChild(EDIT_COURSE_ROUTE)
    ]
})
export class EditCourseModule {
}
