// import {Component, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ApicallService } from 'src/app/Services/apicall.service';
// import {jsPDF} from 'jspdf';
// import autoTable, { CellInput } from 'jspdf-autotable'

// import { Request } from "src/app/model/request-model";
// import { Subscriber } from 'src/app/model/subscriber';
// import { Office } from 'src/app/model/office';
// import { devOnlyGuardedExpression } from '@angular/compiler';
// import { formatDate } from '@angular/common';

// @Component({
//     selector: 'query-form',
//     templateUrl: './view-query-list.component.html',
//    // styleUrls: ['./view-query-list.component.css']
//   })

// export class ViewQueryListComponent implements OnInit, OnChanges {
//     @Input() query ?: String;
//     @Input() requestType ?: String;
//     page = 1;
//     count = 0;
//     tableSize = 10;
//     tableSizes = [5, 10, 20];

//     selectedSubscriber= new Subscriber();
//     hshrRequestList!: Request[]; 
//     office = new Office;
//     constructor(private apiCall: ApicallService, private route: ActivatedRoute) { }
//     ngOnInit(): void {
//         this.query =this.route.snapshot.paramMap.get("id")||"";
//         this.requestType = this.route.snapshot.paramMap.get("reqId")||"";
//         this.fetchPosts();
//         this.office = JSON.parse(localStorage.getItem('hshrlocaloffice')||'[]');
//     }

//     ngOnChanges() {
//         this.fetchPosts();
//     }

//     calculateDays(dateStart: any, closedFile: any) {
//         let date = new Date(dateStart);
//         let currentDate = new Date();
//         let fileClosed = new Date(closedFile);
//         let days !: number;

//         if(closedFile == null) {
//             days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
//         }
//         else {
//             days = Math.floor((fileClosed.getTime() / 1000 / 60 / 60 / 24 - date.getTime() / 1000 / 60 / 60 / 24));
//         }
//         if (isNaN(days)) {
//             days = 0;
//         }
//         return days;
//     }

//     fetchPosts(): void {
//         switch (this.query) {
//             case "pending-Claims-Reference-Query": {
//                 this.apiCall.getPendingClaimsReferenceQuery().subscribe(retSubscriber=>{this.hshrRequestList=retSubscriber});
//                 break;
//             }
//             case "pending-Non-Access-Query": {
//                 this.apiCall.getPendingNonAccessQuery().subscribe(retSubscriber=>{this.hshrRequestList=retSubscriber});
//                 break;
//             }
//             case "returned-Claims-Reference-Query": {
//                 this.apiCall.getReturnedClaimsReferenceQuery().subscribe(retSubscriber=>{this.hshrRequestList=retSubscriber});
//                 break;
//             }
//             case "returned-Non-Access-Query" : {
//                 this.apiCall.getReturnedNonAccessQuery().subscribe(retSubscriber=>{this.hshrRequestList=retSubscriber});
//                 break;
//             }
//             case "request-Query" : {
//                 this.apiCall.getRequestTypeLastThreeMonths(this.requestType||"").subscribe(retSubscriber=>{this.hshrRequestList=retSubscriber});
//                 break;
//             }
//         }
//     }

//     onTableDataChange(event: any){
//         this.page = event;
//         this.fetchPosts();
//     }

//     onTableSizeChange(event: any): void {
//         this.tableSize = event.target.value;
//         this.page = 1;
//         this.fetchPosts();
//     }

//     tableAsPDF() {
//         var doc = new jsPDF();
//         var office = this.office;
//         autoTable(doc, { html: '#queryTable',
//             showHead: "firstPage",
//             didDrawPage: function (data) {
//                 // Header
//                 doc.setFontSize(14);
//                 doc.setTextColor(40);
//                 doc.setFont("helvetica", 'bold')
//                 doc.text(" Query - " + document.getElementById("pageHead")?.innerText + " " + office.officeName , data.settings.margin.left = 50, 10);
//                 doc.setFontSize(10);
//                 doc.text(formatDate(Date.now(), 'LLLL dd yyyy', 'en-CA'), data.settings.margin.left = 165, 10);
//                 doc.text("", data.settings.margin.left = 15, 10)
//                 doc.setFont("helvetica", 'normal')
//             },
//             styles : { halign : 'center'}
//         });
//         doc.output("dataurlnewwindow",{filename: "Table.pdf"});
//     }

//     queryAsPDF() {
//         var doc = new jsPDF();
//         var cols = ["File Number","Health Number","Surname","Request Type","Started","Closed","Days"];
//         var rows = new Array;
//         var office = this.office;
//         this.hshrRequestList.forEach(req => {
//             var temp = [
//                 req.fileNo, 
//                 req.healthNo, 
//                 req.subscriber.surname, 
//                 req.type.typeDescription, 
//                 req.fileStarted.toString(), 
//                 req.fileClosed.toString(), 
//                 this.calculateDays(req.fileStarted, req.fileClosed).toString()
//             ];
//             rows.push(temp);
//         });
//         autoTable(doc, {head: [cols], body: rows, 
//             showHead: "firstPage",
//             didDrawPage: function (data) {
//                 // Header
//                 doc.setFontSize(14);
//                 doc.setTextColor(40);
//                 doc.setFont("helvetica", 'bold')
//                 doc.text(" Query - " + document.getElementById("pageHead")?.innerText + " " + office.officeName , data.settings.margin.left = 50, 10);
//                 doc.setFontSize(10);
//                 doc.text(formatDate(Date.now(), 'LLLL dd yyyy', 'en-CA'), data.settings.margin.left = 165, 10);
//                 doc.text("", data.settings.margin.left = 15, 10)
//                 doc.setFont("helvetica", 'normal')
//             },
//             styles : { halign : 'center'}
//         });
//         doc.output("dataurlnewwindow",{filename: "Query.pdf"});
//     }
// }
