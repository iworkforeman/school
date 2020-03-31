import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-pupil',
  templateUrl: 'pupil.component.html',
  styleUrls: ['pupil.component.scss']
})
export class PupilComponent implements OnInit {
  maTheme: string = this.service.maTheme  

  constructor(public service: AppService) {}

  ngOnInit() {
  }
}
