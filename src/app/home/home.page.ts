import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  etds: any = []
  constructor(private fire: AngularFirestore,private route:Router) {
    this.getEtds();
  
   }

  getEtds() {
    this.fire.collection("etudiants").snapshotChanges().subscribe(
      (data) => {
        this.etds = data.map(
          e => {
            return {
              id: e.payload.doc.id,
              nom: e.payload.doc.data()["nom"],
              prenom: e.payload.doc.data()["prenom"],
              groupe: e.payload.doc.data()["groupe"]
            }
          }
        )
        console.log(this.etds)
      }
    )
  }

  lien1(){
    this.route.navigateByUrl("ajout")
  }

  supp(e){
    this.fire.doc("etudiants/"+e.id).delete();
    this.getEtds();
  }
  update(e){
    this.route.navigateByUrl("modifie/"+JSON.stringify(e))
 
  }
}
