import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from './../database/database';

@Injectable()
export class CreateUserProvider {

  constructor(private dbProvider:DatabaseProvider) { }

  public insert(usuario:usuarios){
    return this.dbProvider.getDB()
    .then((db:SQLiteObject)=>{
      let sql ='insert into usuarios (nome,usuario,senha) values(?, ?, ?)';
      let data = [usuario.nome,usuario.usuario,usuario.senha];

      return db.executeSql(sql,data)
      .catch((error)=> console.log(error));
    })
    .catch((error)=> console.log(error));
  }
  public update(usuario:usuarios){
    return this.dbProvider.getDB()
    .then((db:SQLiteObject)=>{
      let sql ='update usuarios set nome =?, usuario = ?, senha = ? where id = ?';
      let data = [usuario.nome,usuario.usuario,usuario.senha,,usuario.id];

      return db.executeSql(sql,data)
      .catch((error)=> console.log(error));
    })
    .catch((error)=> console.log(error));
  }

  public remove(id:number){
    return this.dbProvider.getDB()
    .then((db:SQLiteObject)=>{
      let sql ='delete from usuarios where id = ?';
      let data = [id];

      return db.executeSql(sql,data)
      .catch((error)=> console.log(error));
    })
    .catch((error)=> console.log(error));
  }

  public get(id:number){
    return this.dbProvider.getDB()
    .then((db:SQLiteObject)=>{
      let sql ='select * from usuarios where id = ?';
      let data = [id];

      return db.executeSql(sql,data)
      .then((data:any)=>{
        if(data.rows.length > 0){
        let item = data.rows.item(0);
        let usuario = new usuarios();
        usuario.id = item.id;
        usuario.nome = item.nome;
        usuario.usuario = item.usuario;
        usuario.senha = item.senha;
        }
        return null
      })
      .catch((error)=> console.log(error));
    })
    .catch((error)=> console.log(error));
  }

  public getALL(id:number){
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT usuario FROM usuarios  where id = ?';
        var data: any[] = [id];

        // filtrando pelo nome
        if (name) {
          sql += ' and usuario like ?'
          data.push('%' + name + '%');
        }

        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let products: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var product = data.rows.item(i);
                products.push(product);
              }
              return products;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
    }
  }
  


export class usuarios{
  id:number;
  nome:string;
  usuario:string;
  senha:string;
}