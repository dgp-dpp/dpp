import { Injectable } from '@angular/core';
import {PMC} from '../models/dataPmc';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PmcService {

  constructor(public  angularFirebase: AngularFireDatabase) { }

  public getPmc(){
    return this.angularFirebase.list("PMC/clave").valueChanges();
  }
  public createPmc(data:any,isNew?:boolean){
    if (isNew) {
      const newPostKey = this.angularFirebase.database.ref().child('PMC').push().key;
      data.key = newPostKey;
      this.angularFirebase.database.ref('PMC/' + newPostKey).set(data);
  } else {
      this.angularFirebase.database.ref('PMC/' + data.key).set(data);
  }
    }

    public removePmc(data: any) {
      this.angularFirebase.database.ref('PMC/' + data.key).remove();
  }

  public resetData() {
      this.angularFirebase.database.ref('/').set(PMC);
  }

}
