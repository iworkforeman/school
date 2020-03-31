import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pupil-dashboard',
    templateUrl: './teacherdashboard.component.html',
    styleUrls: ['./teacherdashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {
    pageTitle: string = 'E-Learning Dashboard (Teacher)';
    

    constructor() {
    }

    ngOnInit() {
    }

}
