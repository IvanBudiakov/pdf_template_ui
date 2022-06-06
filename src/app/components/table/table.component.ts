import {Component, OnInit, ViewChild, AfterViewInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { TemplatesService } from 'src/app/sevices/templates.service';
import { Template } from 'src/app/template';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination!: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true })
  mdbTable!: MdbTableDirective;
  templates ?: Template[];
  previous: any = [];

  constructor( private templateService :  TemplatesService,
               private cdRef: ChangeDetectorRef
              ) {}
    
  getTemplates() : void{
    console.log(this.templates + ' at getTemplates before promise');
    this.templateService.getTemplates().then(templates => this.templates = templates)
    console.log(this.templates + ' at getTemplates after promise');
  }

  ngOnInit(): void {
    this.getTemplates();
    
    console.log(this.templates + ' at ngInit');
    this.mdbTable.setDataSource(this.templates);
    this.templates = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    console.log(this.templates + ' at afterviewinit');
    
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  ngOnChanges(){
      console.log(this.templates)
  }

}


// import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
// import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';

// @Component({
//   selector: 'table-pagination',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent implements OnInit, AfterViewInit {
//   @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination!: MdbTablePaginationComponent;
//   @ViewChild(MdbTableDirective, { static: true }) mdbTable!: MdbTableDirective
//   elements: any = [];
//   previous: any = [];
//   headElements = ['ID', 'First', 'Last', 'Handle'];

//   constructor(private cdRef: ChangeDetectorRef) { }

//   ngOnInit() {
//     for (let i = 1; i <= 15; i++) {
//       this.elements.push({id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i});
//     }

//     this.mdbTable.setDataSource(this.elements);
//     this.elements = this.mdbTable.getDataSource();
//     this.previous = this.mdbTable.getDataSource();
//   }

//   ngAfterViewInit() {
//     this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

//     this.mdbTablePagination.calculateFirstItemIndex();
//     this.mdbTablePagination.calculateLastItemIndex();
//     this.cdRef.detectChanges();
//   }
// }
