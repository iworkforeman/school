import {Component, OnInit} from '@angular/core';
import {Options, LabelType} from 'ng5-slider';


@Component({
    selector: 'app-grade',
    templateUrl: './grade.component.html',
    styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {
    pageTitle: string = 'Grades';
    classMembers: any[] = [
      'Andy Pondy', 'Bobby Brown', 'Jane Appleseed', 'John Smith', 'Kevin Smith', 'Larry Buris', 'Mathew Thets', 'Newile Modharo', 'Organge Pee', 'Peter Happiness'
    ];

    // ng5-slider
    sliderValue: number = 1;
    sliderOptions: Options = {
      floor: 0,
      ceil: 2,
      showTicks: true,
      getLegend: (value: number): string => {
        if (value == 0)
          return '<b>Poor</b>';
        else if (value == 1)
          return '<b>Normal</b>';
        else if (value == 2)
          return '<b>Great</b>';
      },
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            if (value == 0)
              return '<b>Poor</b>';
            else if (value == 1)
              return '<b>Normal</b>';
            else if (value == 2)
              return '<b>Great</b>';
          default:
            return '';
        }
      }
    };


    constructor() {
    }

    ngOnInit() {
    }

}
