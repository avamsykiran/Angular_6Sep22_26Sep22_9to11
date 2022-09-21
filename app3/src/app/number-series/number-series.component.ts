import { Component, OnInit } from '@angular/core';
import { NumberSeriesService } from '../services/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {

  lb: number;
  ub: number;

  results!: number[];
  errMsg!: string | null;
  isJobDone: boolean;

  constructor(private nss: NumberSeriesService) {
    this.lb = 0;
    this.ub = 0;
    this.isJobDone = true;
  }

  ngOnInit(): void {
  }

  start() {
    this.results = [];
    this.errMsg = null;
    this.isJobDone = false;

    this.nss.generateSeries(this.lb, this.ub).subscribe({
      next: data => this.results.push(data),
      error: err => { this.errMsg = err; this.isJobDone = true; },
      complete: () => this.isJobDone = true
    });
  }
}
