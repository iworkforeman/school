import {Component, OnInit} from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';


@Component({
    selector: 'app-edit-course',
    templateUrl: './editcourse.component.html',
    styleUrls: ['./editcourse.component.scss']
})
export class EditCourseComponent implements OnInit {
    pageTitle: string = 'Edit The Water Cycle Course';
    
    bsValue: Date;
    bsValue2: Date;
    bsValueRange: Date[];
    bsInlineValue = new Date();
    bsConfig: Partial<BsDatepickerConfig> = {
      containerClass: 'date-picker'
    }

    constructor() {
    }

    ngOnInit() {
    }

}
