import { Component } from '@angular/core';
import { ViewController,  AlertController } from 'ionic-angular';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
  items:any;
  text: string;

  constructor(public viewCTRL:ViewController ,public alertCtrl: AlertController) {
      
    
  }

  FiltrarClick( ){
    
    this.viewCTRL.dismiss();

    let prompAlert = this.alertCtrl.create({

      title:'Filtrar',
      message:'Testando o alerte, escreve algo abaixo',
      inputs:[{
        type:'radio',
        label: 'Corrida',
        value: 'racing',
        checked: false
      },
      {
        type:'radio',
        label: 'Plataforma',
        value: 'plataform',
        checked: false
      },
      {
        type:'radio',
        label: 'Atirar e correr',
        value: 'GunAndRun',
        checked: false
      },
      {
        type:'radio',
        label: 'Inovador',
        value: 'inovator',
        checked: false
      }
    ],
      buttons:[{
        text:'Cancelar',
        handler:data=>{
          this.viewCTRL.dismiss();
        }
      },
      {
        text:'Salvar',
        handler:data=>{
         console.log('recebeu ',data);
        }
      }
    ]


    });

    prompAlert.present()
    
    
  }

  SobreClick(){

    this.viewCTRL.dismiss();

    let sobreAlert = this.alertCtrl.create({

      title:'IndiestaqueAPP',
      message:'Desenvolvido por Cristovão Fárias',
      buttons:[{
        text:'Ok',
        handler:data=>{
          this.viewCTRL.dismiss();
        }
      }]
    });

    sobreAlert.present()

  }

  ajudaClick(){

    this.viewCTRL.dismiss();

    let ajudaAlert = this.alertCtrl.create({

      title:'Ajuda',
      subTitle:'Está Tendo algum problema ?',
      message:'Por favor nos conte o que aconteceu:',

      inputs:[{
       type:'textArea',
       name:'Descrição',
       placeholder:'Descreva o problema '
      }],

      buttons:[
        {
          text:'Cancelar',
          handler:data=>{
            this.viewCTRL.dismiss();
          }
        },
        {
          text:'Enviar',
          handler:data=>{
            console.log(data);
          }
        }
      ]
    });

    ajudaAlert.present()
  }

}
