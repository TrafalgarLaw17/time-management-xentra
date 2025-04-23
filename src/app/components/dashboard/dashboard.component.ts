import { Component, } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public doughnutChartType: 'doughnut' = 'doughnut';

  public doughnutChartData: ChartData<'doughnut', number[], string> = {
    labels: ['Completed Tasks', 'Pending Tasks'],
    datasets: [
      {
        data: [3, 1],
        backgroundColor: ['#92C34F', '#F4AE4D'],
      }
    ]
  };

  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          usePointStyle: true,     
          pointStyle: 'circle',
      
        }
      }
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        left: 20
      }
    }
  };

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
