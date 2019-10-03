import { Component, OnInit, Input, OnChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnChanges {
  @Input() pieData: Array<number>;
  @ViewChild('myCanvas', {static: false}) myCanvas: ElementRef;
  constructor(public api:ApiService) { }

  ngOnChanges() {
    var myChart = new Chart(this.myCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Latitude > 0", "Latitude < 0", "Longitude > 0", "Longitude < 0"],
        datasets: [{
          backgroundColor: [
            "#e74c3c",
            "#2ecc71",
            "#f1c40f",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#34495e"
          ],
          data: this.pieData || [0,0,0,0]
        }]
      }
    });
    window.addEventListener("resize", ()=> {myChart.resize()});
  }
}
