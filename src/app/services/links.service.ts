import { Injectable } from '@angular/core';
import {Links} from '../models/links.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(public  angularFirebase: AngularFireDatabase){

  }
  public getLinks(){
    return this.angularFirebase.list("Links").valueChanges();
  }



 public createLinks(data:any,isNew?:boolean){
  if (isNew) {
    const newPostKey = this.angularFirebase.database.ref().child('Links').push().key;
    data.key = newPostKey;
    this.angularFirebase.database.ref('Links/' + newPostKey).set(data);
} else {
    this.angularFirebase.database.ref('Links/' + data.key).set(data);
}
  }

  public removeLinks(data: any) {
    this.angularFirebase.database.ref('Links/' + data.key).remove();
}

public resetData() {
    this.angularFirebase.database.ref('/').set(Links);
}

}
