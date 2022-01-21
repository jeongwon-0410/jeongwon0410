import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autocare',
  templateUrl: './autocare.component.html',
  styleUrls: ['./autocare.component.scss']
})
export class AutocareComponent implements OnInit {

  constructor(private router:Router) { }

  addTitle :string ="";

  ngOnInit(): void {

  }


  gotoDX(){
    this.router.navigate(['dx'])
    this. addTitle = "DX"
  }
  gotoMX(){
    this.router.navigate(['mx'])
    this. addTitle = "MX"
  }

}
