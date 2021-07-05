import { Component, OnInit } from '@angular/core';
import {ToastController,NavController} from'@ionic/angular';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  task_title:string;
  task_description: string;
  task_last_date: Date;
  task_owner: string;

  constructor(private NavCtrl:NavController, private ToastCtrl: ToastController) {
    this.task_owner = firebase.auth().currentUser.uid;
   }

  ngOnInit() {
  }

  addtask(){
    firebase.firestore().collection("task").add({
      title: this.task_title,
      description: this.task_description,
      last_date: new Date(this.task_last_date),
      owner:this.task_owner,
      status: "incomplete",
      created: firebase.firestore.FieldValue.serverTimestamp
      ()
    }).then ((docRef)=>{
      this.ToastCtrl.create({
        message: "Task has been successfully added!",
        duration: 3000
    }).then((toast)=>
    {
      toast.present();
      this.NavCtrl.back();
    })
    }).catch ((err)=>{
      this.ToastCtrl.create({
        message: err.message,
        duration: 3000
    }).then((toast)=>
    {
      toast.present();
    })
  })
  }

  gotoMain(){
    this.NavCtrl.navigateForward(['/main']);
  }
}
