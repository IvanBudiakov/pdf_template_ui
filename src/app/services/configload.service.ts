import { Injectable, OnInit } from '@angular/core';
import { ApicallService } from './apicall.service';
import { Template } from '../model/template';
import { Service } from '../model/service';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigloadService implements OnInit{

  allTemplates !: Template[];
  allServices !: Service[];
  
  constructor(private apicall : ApicallService) { }

  ngOnInit(){
  }

  pull() : void{
    this.getAllTemplates();
    this.getAllServices();
  }

  getAllTemplates() {
    this.apicall.getAllTemplates().pipe(take(1)).subscribe(allTemplates => { this.allTemplates = allTemplates } );
  }

  getAllServices() : void{
    this.apicall.getAllServices().pipe(take(1)).subscribe(allServices => { this.allServices = allServices } );
  }

}
