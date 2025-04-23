import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-progress-tracker',
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.css']
})
export class ProgressTrackerComponent {

  constructor() { }

  public timelineChartType: 'bar' = 'bar';
  
  public timelineChartData = {
    labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    datasets: [
      {
        label: 'Start',
        data: [1, 3, 6, 7],
        backgroundColor: 'rgba(0,0,0,0)',
        stack: 'timeline'
      },
      {
        label: 'Duration',
        data: [2, 4, 3, 4],
        backgroundColor: ['#6c5ce7', '#00cec9', '#fdcb6e', '#fab1a0'], 
        stack: 'timeline'
      }
    ]
  };
  
    public timelineChartOptions: ChartOptions<'bar'> = {
      indexAxis: 'y', 
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        tooltip: { enabled: true }
      },
      scales: {
        x: {
          stacked: true,
          title: { display: true, text: 'Time' }
        },
        y: {
          stacked: true
        }
      }
    };
}
