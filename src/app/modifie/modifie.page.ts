import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modifie',
  templateUrl: './modifie.page.html',
  styleUrls: ['./modifie.page.scss'],
})
export class ModifiePage implements OnInit {
etd:any;
  constructor(private act:ActivatedRoute,private route:Router,private fire:AngularFirestore,private toast:ToastController) {
    this.etd=JSON.parse(this.act.snapshot.params["e"]) ;
   }

  ngOnInit() {
  }
  maj(){
    this.fire.doc("etudiants/"+this.etd.id).update(this.etd);
    this.MaToast();
    this.route.navigateByUrl("/home");
  }
  async MaToast() {
    const toast = await this.toast.create({
    message: 'Etudiant modifié avec succés',
    duration: 2000
    });
    toast.present();
    }
}
