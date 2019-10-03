import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularRevision';
  constructor(private api: ApiService) {
  }
  ngOnInit() {
    this.api.getUserList();
  }
}
