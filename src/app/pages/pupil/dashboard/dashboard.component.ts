import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pupil-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    pageTitle: string = 'E-Learning Dashboard (Pupil)';
    pageSubTitle: string = 'Good evening John, Here are your assignments:';

    blogPosts: any[] = [
        {
            title: 'Learning about the Compass',
            date: 'Due in 2 days',
            img: '1.jpg'
        },
        {
            title: 'Learning about the Compass',
            date: 'Due in 2 days',
            img: '1.jpg'
        },
        {
            title: 'Learning about the Compass',
            date: 'Due in 2 days',
            img: '1.jpg'
        },
        {
            title: 'Learning about the Compass',
            date: 'Due in 2 days',
            img: '1.jpg'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
