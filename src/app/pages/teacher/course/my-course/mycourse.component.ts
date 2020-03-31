import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-my-course',
    templateUrl: './mycourse.component.html',
    styleUrls: ['./mycourse.component.scss']
})
export class MyCourseComponent implements OnInit {
    navLinks: Array<any> = ['English', 'Maths', 'French', 'Science', 'History and Geo', 'PSHE', 'Citizeship', 'ICT', 'Art'];
    myCourses: Array<any> = [
        {
            title: 'Learning about the Compass',
            date: '2 April - 3 April',
            img: '1.jpg'
        },
        {
            title: 'The Water Cycle',
            date: 'Draft',
            img: '2.jpg'
        },
        {
            title: 'Learning about the Compass',
            date: '2 April - 3 April',
            img: '3.jpg'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
