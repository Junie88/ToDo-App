import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {ToastController,NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password: string;
 

  constructor(private toastCtrl: ToastController, private NavCtrl: NavController) { 
    
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user)=>{console.log(user);})
  }
  login(){
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then
    ((userObject)=>
    {console.log(userObject);
      //navigate user to application page
      this.NavCtrl.navigateForward(['/main']);

    }).catch((err)=> {
      this.toastCtrl.create ({
        message: err.message,
        duration: 3000
      }).then((toast)=>{
        toast.present();
      })
    });
  }

  gotoSignUp(){
    this.NavCtrl.navigateForward(['/signup']);

  }
}
