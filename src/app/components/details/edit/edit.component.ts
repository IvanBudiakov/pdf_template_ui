import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Template } from 'src/app/model/template';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  template !: Template;
  constructor(
    private apicall : ApicallService
  ) { }

  ngOnInit(): void {
    
  }


  updateTemplate(template : Template){
    this.apicall.updateTemplate(template).subscribe(data =>{
      this.template = data;      
  })
  console.warn(this.apicall.getTemplateById(this.template.id.toString().substring(1)).subscribe(data=>{console.error(data)}));
  
  }

}