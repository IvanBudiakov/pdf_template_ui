import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../templates/footer/footer.component';
import { HeaderComponent } from '../templates/header/header.component';
import { NavBarComponent } from '../templates/nav-bar/nav-bar.component';
// import { RequestFormComponent } from '../templates/request-form/request-form.component';
// import { ViewQueryListComponent } from '../templates/query-form/view-query-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
