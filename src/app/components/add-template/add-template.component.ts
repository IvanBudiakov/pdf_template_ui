// import { NgModel } from '@angular/forms';
import { Template } from '../../model/template';
import { Service } from 'src/app/model/service';
import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { content } from '../file-upload/file-upload.component';
import { fileExt } from '../file-upload/file-upload.component';
import { Router } from '@angular/router';

// import { ConfigloadService } from 'src/app/services/configload.service';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit{
  template = new Template();
  isValid : boolean = true;
  services !: Service[];
  res : any;
  

  constructor(
    private apicall : ApicallService,
    private router : Router
    // private configLoad : ConfigloadService
  ) { }

  ngOnInit(): void {
    this.apicall.getAllServices().subscribe(ret => {this.services = ret});
  }

  addTemplate() : void{
    if(this.validateFields()){
      this.template.html = content    
      this.apicall.addTemplate(this.template).subscribe(data => {console.warn(data);})
      this.isValid = true;
      this.router.navigateByUrl('/home');
    } else 
      this.isValid = false;  
  }
 
  serviceCheck() : boolean{ 
    return (this.template.serviceCodeEntity.service_code !== undefined)
  }

  validateFields() : boolean{
    return (this.serviceCheck() && fileExt)
  }

  getExt(){
    return fileExt;
  }

}
