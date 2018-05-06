import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
import { DatePipe } from '@angular/common';
 

@Injectable()
export class AuthProvider {

   
//não está funcionando
//verificar com calma qual foi o problema no código
  constructor(
    
    public storage: Storage,
    private datepipe: DatePipe
  ) {

    }

   public insert(account : Account){
     let key = this.datepipe.transform(new Date(),"ddMMyyyyHHmmss");
     return this.save(key,account);
   }
   public update(key: string, account : Account){
     return this.save(key,account);
   }
   public save(key:string,account : Account){
     return this.storage.set(key,account);
   }
   public remove(key: string) {
    return this.storage.remove(key);
  }
  public getAll(){
    let accounts : Accounts [] = [];

    return this.storage.forEach((value: Account, key:string, iterationNumber:Number)=>{
      let account = new Accounts();

      account.key = key;
      account.account = value;
      accounts.push(account);
    })
    .then(()=>{
      return Promise.resolve(accounts);
    })
    .catch((error)=>{
      return Promise.reject(error);
    });
  }

}

export class Account{
  email:string;
  password:string;
}

export class Accounts{
  key:string;
  account : Account;
}
