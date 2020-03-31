import {Component, OnInit} from '@angular/core';
import {Options, LabelType} from 'ng5-slider';


@Component({
    selector: 'app-quizzes',
    templateUrl: './quizzes.component.html',
    styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
    pageTitle: string = 'Quizzes';
    classMembers: any[] = [
      'Andy Pondy', 'Bobby Brown', 'Jane Appleseed', 'John Smith', 'Kevin Smith', 'Larry Buris', 'Mathew Thets', 'Newile Modharo', 'Organge Pee', 'Peter Happiness'
    ];
    navLinks: any[] = [
      'English', 'Maths', 'French', 'Science', 'History and Geo', 'PSHE', 'Citizenship', 'ICT', 'ART', 'Archives'
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
