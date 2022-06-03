import { Component, Inject, OnInit } from '@angular/core';
import { TemplatesService } from 'src/app/sevices/templates.service';
import { Template } from 'src/app/template';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  templates !: Template[];

  constructor( private templateService :  TemplatesService) { }
    
  getTemplates() : void{
    this.templateService.getTemplates().then(templates => this.templates = templates);
  }

  ngOnInit(): void {
    this.getTemplates();
  }

}
