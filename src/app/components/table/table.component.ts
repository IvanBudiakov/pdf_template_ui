import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/model/template';
import { TemplatesService } from 'src/app/services/templates.service';
import { Router } from "@angular/router";
import { take } from "rxjs/operators";
import { ApicallService } from "../../services/apicall.service";
// import {AdminService} from "../../../Services/admin.service";

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
  tableSize = 10;
  tableSizes = [5, 10, 20];
  x : any

  constructor(private templateService :  TemplatesService,
              private apiCall: ApicallService, 
              // private adminService: AdminService, 
              private router: Router
             ) {}
    

  async ngOnInit() {
    await this.fetchPosts()
    console.log(this.templates) 
  }
  
  fetchPosts(): void {
    this.apiCall.getAllTemplates().pipe(take(1)).subscribe(retTemplates=>{this.templates=retTemplates});
  }
  
  onTableDataChange(event: any){
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.fetchPosts();
  }

}
