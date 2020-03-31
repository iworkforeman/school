import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {DashboardComponent} from "./dashboard.component";

const PUPIL_ROUTE = [{path: '', component: DashboardComponent}];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild(PUPIL_ROUTE),
        CommonModule
    ]
})
export class DashboardModule {
}
