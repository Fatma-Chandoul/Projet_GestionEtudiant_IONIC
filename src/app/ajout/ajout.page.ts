import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {
prenom:string;
nom:string;
groupe:string;
  constructor(private fire:AngularFirestore,private route:Router,private alert:AlertController) { }

  ngOnInit() {
  }
  ajouter(){
    this.fire.collection("etudiants").add({prenom:this.prenom,nom:this.nom,groupe:this.groupe})
    .then(data =>{this.MonAlert('Etudiant ajouté avec succès');
      this.route.navigateByUrl("home")})
    .catch(err=>{})
  }
  async MonAlert(message:string) {
    const alert = await this.alert.create({
    header: 'Alert Ajout',
    subHeader: 'ESSAT',
    message: message,
    buttons: ['OK']
    });
    await alert.present();
    }

}
