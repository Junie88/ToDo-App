import { Component, OnInit } from '@angular/core';
import {NavController,ToastController} from '@ionic/angular';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  userID: string;
  task:any [] = [];

  constructor(private navCtrl: NavController,private toastCtrl: ToastController) { 
    this.userID =firebase.auth().currentUser.uid;
    this.getTask();
  }

  ngOnInit() {
  }

  getTask(){
    firebase.firestore().collection("task")
    .where("owner","==",this.userID)
    .where("status","==","incomplete")
    .onSnapshot((querySnapshot)=>
    {
      this.task = querySnapshot.docs;
    });
  }

  getDate(timestamp: firebase.firestore.Timestamp){
    let date= timestamp.toDate();
    return date.toLocaleDateString();
  }

  gotoAddTodo(){
    this.navCtrl.navigateForward(['/add-task']);
  }

  markCompleted(document:firebase.firestore.QueryDocumentSnapshot){
    firebase.firestore().collection("task").doc(document.id).set({
      "status":"completed"
    }, {
      merge: true
    }).then(()=>
    this.toastCtrl.create({
      message:"This Task is completed!",
      duration: 3000
    }).then((toast)=>
    {
      toast.present();
    })
    )
  }

  logout(){
    firebase.auth().signOut().then(()=>
    {
      this.navCtrl.navigateRoot("/login");

    }).catch((err)=>{
    console.log(err)
    })
  }
}
