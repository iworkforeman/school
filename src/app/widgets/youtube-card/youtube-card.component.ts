import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-youtube-card',
    templateUrl: './youtube-card.component.html',
    styleUrls: ['./youtube-card.component.scss']
})
export class YoutubeCardComponent implements OnInit {
    @Input() title: String;
    @Input() description: String;

    constructor() {
    }

    ngOnInit() {
    }

}
