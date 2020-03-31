import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {ImageUploadComponent} from "./imageupload.component";

@NgModule({
    declarations: [
        ImageUploadComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ImageUploadComponent
    ]
})
export class ImageUploadModule {
}
