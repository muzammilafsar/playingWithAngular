import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-percentage-card',
  templateUrl: './percentage-card.component.html',
  styleUrls: ['./percentage-card.component.scss']
})
export class PercentageCardComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

}
