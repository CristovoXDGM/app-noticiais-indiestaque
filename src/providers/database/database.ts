import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db : SQLiteObject;
  private isOpen : boolean;

  constructor(public http: HttpClient, public storage:SQLite) {
    
    if(!this.isOpen){

      this.storage = new SQLite();
      this.storage.create({name:"data.db",location:"default"}).then((db:SQLiteObject) => {
        this.db = db;
        db.executeSql("CREATE TABLE IF NOT EXIST users (id PRIMARY KEY AUTOINCREMENT, identification TEXT,fullName TEXT, password TEXT)",[])
        this.isOpen = true;
     
      }).catch((error)=>{
        console.log(error);
      })


    }

  }

  CreateUser(identication: string, fullName: string, password: string){
    return new Promise((resolve,reject) =>{
      let sql = "INSERT INTO users (identification, fullName, password) VALUES (?, ?, ?)"
      this.db.executeSql(sql,[identication, fullName, password]).then((data)=>{
        resolve(data);
      }, (error)=>{
        reject(error);
      });
    });
  }

  GetAllUsers(){
    return new Promise((resolve,reject)=>{
      this.db.executeSql("SELECT * users",[]).then((data)=>{
        let arrayUsers = [];
        if(data.rows.length > 0 ){

          for (let i = 0; i < data.rows.length; i++) {
            arrayUsers.push({
              id: data.rows.item(i).id,
              identification:data.rows.item(i).identification,
              name:data.rows.item(i).name,
              password:data.rows.item(i).password
            });
          }
        }
        resolve(arrayUsers);
      }, (error)=>{
        reject(error);
      })
    })
  }

}
