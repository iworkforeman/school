import {Component, OnInit} from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-create-course',
    templateUrl: './createcourse.component.html',
    styleUrls: ['./createcourse.component.scss']
})
export class CreateCourseComponent implements OnInit {
    pageTitle: string = 'Create New Course';
  
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
