// import { NgModel } from '@angular/forms';
import { Template } from '../../model/template';
import { Service } from 'src/app/model/service';
import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
// import { ConfigloadService } from 'src/app/services/configload.service';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {

  template = new Template();
  // template.serviceCodeEntity =  new Service();
  services !: Service[];
  

  constructor(
    private apicall : ApicallService,
    // private configLoad : ConfigloadService
  ) { }

  ngOnInit(): void {
    this.apicall.getAllServices().subscribe(ret => {this.services = ret});
    // this.servicesd = JSON.parse(localStorage.getItem('service'));
  }

  addTemplate(){
    console.warn(this.template.serviceCodeEntity.name);
    
    this.apicall.addTemplate(this.template).subscribe(data => {console.warn(data);})
  }

  currentService(service : number){
    console.log(service);
    
  }

}
