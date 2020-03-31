import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {YoutubeCardComponent} from "./youtube-card.component";

@NgModule({
    declarations: [
        YoutubeCardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        YoutubeCardComponent
    ]
})
export class YoutubeCardModule {
}
