import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {ToastController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string;
  password: string;
  constructor( private toastCtrl:ToastController, private NavCtrl: NavController) { 
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
      //  this.NavCtrl.navigateForward(['/main']);
      }
        else{
        //no user log in
      }
    })
  }

  ngOnInit() {
  }
  signup(){

    firebase.auth().createUserWithEmailAndPassword (this.email, this.password).then(
      (userData)=>{
        console.log(userData)
        //navigate user to the app page
        this.NavCtrl.navigateForward(['/login']);

    }).catch((err)=> {
     this.toastCtrl.create({
       message:err.message,
       duration: 3000
     }).then((toast)=>
     {
       toast.present();
     })
    });

  }

  gotoLogin (){
    this.NavCtrl.navigateForward(['/login']);
  }
}
