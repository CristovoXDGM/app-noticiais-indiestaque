 
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }


  public getDB(){
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    });
  }

  public createDatabase(){
    return this.getDB()
    .then((db:SQLiteObject)=>{
        this.createTable(db);

        this.inserDefaultValues(db);
    })
    .catch(error => console.error(error));
  }

  private createTable(db:SQLiteObject){
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS usuarios (id integer primary key AUTOINCREMENT NOT NULL,nome TEXT, usuario TEXT, senha TEXT)'] 
    ])
    .then(()=> console.log('tabelas criadas'))
    .catch(error => console.error('Erro ao criar as tabelas',error));
  }

  private inserDefaultValues(db:SQLiteObject){
    db.executeSql('select COUNT(id) as qtd from usuarios', {})
    .then((data: any) => {
      //Em caso de não existir nenhum registro
      if (data.rows.item(0).qtd == 0) {

        // Criando as tabelas
        db.sqlBatch([
          ['insert into usuarios (nome,usuario,senha) values (?,?,?)', ['teste'],['teste1'],['teste123']] 
        ])
          .then(() => console.log('Dados padrões incluídos'))
          .catch(e => console.error('Erro ao incluir dados padrões', e));

      }
    })
    .catch(e => console.error('Erro ao consultar a qtd de categorias', e));
    }

    
  }


