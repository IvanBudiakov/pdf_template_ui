import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/model/template';
import { TemplatesService } from 'src/app/services/templates.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { take } from "rxjs/operators";
import { ApicallService } from "../../services/apicall.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  templates !: Template[];
  previous: any = [];
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10, 20];
  
  constructor(
              // private templateService :  TemplatesService,
              private apiCall: ApicallService, 
              // private router: Router
             ) {}
    

  ngOnInit() {
    this.fetchData()
  }
  
  fetchData(): void {
    this.apiCall.getAllTemplates().pipe(take(1)).subscribe(ret=>{this.templates = ret.sort()});
  }
  
  onTableDataChange(event: any){
    this.page = event;
    this.fetchData();
  }

  onTableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.fetchData();
  }
  

}
