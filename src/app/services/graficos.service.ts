import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import {Graficos} from '../models/dataGraficos';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(public angularFirebase : AngularFireDatabase) { }
  public getGraficos(): Observable<any>{
    return this.angularFirebase.list("GraficoDes").valueChanges();
  }
  public createGrafico(data:any,isNew?:boolean){
    if (isNew) {
      const newPostKey = this.angularFirebase.database.ref().child('GraficoDes').push().key;
      data.key = newPostKey;
      this.angularFirebase.database.ref('GraficoDes/' + newPostKey).set(data);
  } else {
      this.angularFirebase.database.ref('GraficoDes/' + data.key).set(data);
  }
    }

    public removeGrafico(data: any) {
      this.angularFirebase.database.ref('GraficoDes/' + data.key).remove();
  }

  public resetData() {
      this.angularFirebase.database.ref('/').set(Graficos);
  }
}
