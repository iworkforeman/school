import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-create-quizz',
    templateUrl: './createquizz.component.html',
    styleUrls: ['./createquizz.component.scss']
})
export class CreateQuizzComponent implements OnInit {
    pageTitle: string = 'Create Quizz';

    constructor() {
    }

    ngOnInit() {
    }

}
