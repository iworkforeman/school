import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {AssignmentComponent} from "./assignment.component";

const BLOG_ROUTE = [{path: '', component: AssignmentComponent}];

@NgModule({
    declarations: [
        AssignmentComponent
    ],
    imports: [
        RouterModule.forChild(BLOG_ROUTE),
        CommonModule
    ]
})
export class AssignmentModule {
}
