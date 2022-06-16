import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isOpen !: boolean

  constructor(
    private activatedroute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedroute.data.subscribe(data=>{
      this.isOpen = data['isOpen']
    })
  }

}
