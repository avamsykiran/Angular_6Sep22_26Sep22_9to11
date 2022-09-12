import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName:string;

  logos:string[];
  logoIndex:number;
  logoWidth:number;

  isCenterOn:boolean;
  isBorderOn:boolean;

  constructor() {
    this.userName = "Vamsy Kiran";

    this.logoIndex=0;
    this.logos=[
      "assets/imgs/w1.jpg",
      "assets/imgs/w2.jpg",
      "assets/imgs/w3.jpg",
      "assets/imgs/w4.jpg"
    ];
    this.logoWidth=200;
    this.isCenterOn=true;
    this.isBorderOn=true;
  }

  ngOnInit(): void {
  }

  toggle(){
    this.logoIndex++;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }

}
