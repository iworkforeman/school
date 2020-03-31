import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {YoutubeCardModule} from '../../../widgets/youtube-card/youtube-card.module';
import {ImageUploadModule} from '../../../widgets/image-upload/imageupload.module';

import {CreateCourseComponent} from "./createcourse.component";

const TEACHER_ROUTE = [{path: '', component: CreateCourseComponent}];

@NgModule({
    declarations: [
        CreateCourseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        YoutubeCardModule,
        ImageUploadModule,
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule.forChild(TEACHER_ROUTE)
    ]
})
export class CreateCourseModule {
}
