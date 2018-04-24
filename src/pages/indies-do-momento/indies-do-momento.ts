import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-indies-do-momento',
  templateUrl: 'indies-do-momento.html'
})
export class IndiesDoMomentoPage {
  @ViewChild('cupHead') cupHead;
  @ViewChild('ori') ori;
  @ViewChild('celeste') celeste;
  @ViewChild('iconoclasts') iconoclasts;
 
  barChart1: any;
   

  constructor(public navCtrl: NavController) {
  }
  
// Sistema de votação quase impletmentado
  ionViewDidLoad() {
 
    this.barChart1 = new Chart(this.cupHead.nativeElement, {

        type: 'bar',
        data: {
            labels: ["Gostam", "Tanto faz", "Odiaram" ],
            datasets: [{
                label: 'Quantidade de Avaliações',
                data: [100, 50, 20 ],
                backgroundColor: [
                    'rgba(10, 153, 108,0.2)',
                    'rgba(218, 215, 92, 0.2)',
                    'rgba(231, 49, 49, 0.2)'
                     
                ],
                borderColor: [
                    'rgba(10, 153, 108,1)',
                    'rgba(218, 215, 92, 1)',
                    'rgba(231, 49, 49, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });

    this.barChart1 = new Chart(this.ori.nativeElement, {

        type: 'bar',
        data: {
            labels: ["Gostam", "Tanto faz", "Odiaram" ],
            datasets: [{
                label: 'Quantidade de Avaliações',
                data: [100, 20, 15 ],
                backgroundColor: [
                    'rgba(10, 153, 108,0.2)',
                    'rgba(218, 215, 92, 0.2)',
                    'rgba(231, 49, 49, 0.2)'
                     
                ],
                borderColor: [
                    'rgba(10, 153, 108,1)',
                    'rgba(218, 215, 92, 1)',
                    'rgba(231, 49, 49, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });

    this.barChart1 = new Chart(this.celeste.nativeElement, {

        type: 'bar',
        data: {
            labels: ["Gostam", "Tanto faz", "Odiaram" ],
            datasets: [{
                label: 'Quantidade de Avaliações',
                data: [50, 80, 30 ],
                backgroundColor: [
                    'rgba(10, 153, 108,0.2)',
                    'rgba(218, 215, 92, 0.2)',
                    'rgba(231, 49, 49, 0.2)'
                     
                ],
                borderColor: [
                    'rgba(10, 153, 108,1)',
                    'rgba(218, 215, 92, 1)',
                    'rgba(231, 49, 49, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });

    this.barChart1 = new Chart(this.iconoclasts.nativeElement, {

        type: 'bar',
        data: {
            labels: ["Gostam", "Tanto faz", "Odiaram" ],
            datasets: [{
                label: 'Quantidade de Avaliações',
                data: [50, 20, 30 ],
                backgroundColor: [
                    'rgba(10, 153, 108,0.2)',
                    'rgba(218, 215, 92, 0.2)',
                    'rgba(231, 49, 49, 0.2)'
                     
                ],
                borderColor: [
                    'rgba(10, 153, 108,1)',
                    'rgba(218, 215, 92, 1)',
                    'rgba(231, 49, 49, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });




  }
}
