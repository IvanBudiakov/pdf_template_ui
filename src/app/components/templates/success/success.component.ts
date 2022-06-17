import { Component, OnInit } from '@angular/core';

export var isOpen = false;


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    isOpen = true;
  }


  close(){
    isOpen = false;    
  }


}