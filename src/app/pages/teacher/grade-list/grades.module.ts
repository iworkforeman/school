import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {DataTablesModule} from 'angular-datatables';

import {GradesComponent} from "./grades.component";

const GRADES_ROUTE = [{path: '', component: GradesComponent}];

@NgModule({
    declarations: [
        GradesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        DataTablesModule,
        RouterModule.forChild(GRADES_ROUTE)
    ]
})
export class GradesModule {
}
