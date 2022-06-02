// import {Component, Input, OnInit} from "@angular/core";
// import { RequestService } from "src/app/Services/request.service";
// import { Request } from "src/app/model/request-model";
// import { ConfigloadService } from "src/app/Services/configload.service";
// import { Office } from "src/app/model/office";
// import { Type } from "src/app/model/type";
// import { Reason } from "src/app/model/reason";
// import { Status } from "src/app/model/status";
// import { Disclosure } from "src/app/model/disclosure";
// import { City } from "src/app/model/city";
// import { Subscriber } from "src/app/model/subscriber";
// import { ApicallService } from "src/app/Services/apicall.service";
// import { ActivatedRoute, Router } from "@angular/router";
// import {NgForm, NgModel} from "@angular/forms";

// @Component({
//     selector: 'request-form',
//     templateUrl: './request-form.component.html',
// })
// export class RequestFormComponent implements OnInit{

//     /*
//         validation variables
//     */
//     openedError !: String;
//     openedDisplay !: Boolean;
//     startedError !: String;
//     startedDisplay !: Boolean;
//     closedError !: String;
//     closedDisplay !: Boolean;
//     costError !: String;
//     costDisplay !: Boolean;
//     officeError !: String;
//     officeDisplay !: Boolean;
//     chequeDateError !: String
//     chequeDateDisplay !: Boolean
//     chequeSentError !: String;
//     chequeSentDisplay !: Boolean;
//     historyFromError !: String
//     historyFromDisplay !: Boolean
//     historyToError !: String
//     historyToDisplay !: Boolean
//     validate !: Boolean;

//     /*
//         button initializers
//     */
//     subsId!: String;
//     reqId!: String;
//     @Input() mode!: string;
//     healthNumber = false;
//     surname = false;
//     firstName = false;
//     revoke = false;
//     fileNo = false;
//     daysOpen = false;
//     clerk = false;
//     type = false;
//     opened = false;
//     status = false;
//     started = false;
//     reason = false;
//     closed = false;
//     office = false;
//     noYears = false;
//     disclosure = false;
//     historyFrom = false;
//     cost = false;
//     moneyType = false;
//     firm = false;
//     historyTo = false;
//     chequeNo = false;
//     city = false;
//     dayExtend = false;
//     chequeSent = false;
//     comment = false;
//     chequeDate = false;

//     submitted: boolean=false;
//     model = new Request();
//     selectedSubscriber: Subscriber = new Subscriber();
//     offices = this.configload.allOffices;
//     types = this.configload.allTypes;
//     reasons = this.configload.allReasons;
//     statuses = this.configload.allStatuses;
//     disclosures = this.configload.allDisclosures;
//     citys = this.configload.allCitys;

//     constructor(private apiCall: ApicallService, private route: ActivatedRoute, private router: Router,private RequestService:RequestService,public configload:ConfigloadService) {}

//     ngOnInit(): void {
//         this.subsId = this.route.snapshot.paramMap.get("subid")||"";
//         this.reqId = this.route.snapshot.paramMap.get("reqid")||"";
//         if (this.subsId != "undefined" && this.subsId && this.subsId.length > 0)
//             this.apiCall.getSubscriberById(this.subsId).subscribe(retSubscriber => {
//                 this.selectedSubscriber = retSubscriber;
//             });
//         if(this.reqId.length > 0)
//             this.apiCall.getRequestById(this.reqId).subscribe(retRequest=>{
//                 this.model=retRequest;
//                 // console.log(Object.keys(retRequest.subscriber));
//                 if (Object.keys(this.selectedSubscriber).length === 0) {
//                     if (Object.keys(retRequest.subscriber).length > 0) {
//                         this.selectedSubscriber = retRequest.subscriber;
//                     }
//                 }
//             });
//         if (this.mode === 'add'){
//             this.setAddField();
//             this.setDefaultOffice();
//         } else if (this.mode === 'view') {
//             this.setViewField();
//         } else if (this.mode === 'edit') {
//             this.setEditField();
//         } else if (this.mode === 'dummy') {
//             this.setDummyField();
//             this.setDefaultOffice();
//         } else if (this.mode === 'addSubscriber') {
//             this.setAddSubscriberField();
//             this.selectedSubscriber.healthNo=this.route.snapshot.paramMap.get("hn")||"";
//             this.setDefaultOffice();
//         }
//     }

//     setDefaultOffice() {
//         let temp = JSON.parse(localStorage.getItem('hshrlocaloffice')||'[]');
//         if (temp) {
//             this.model.office = temp;
//         }
//     }

//     setAddField() {
//         this.healthNumber = true;
//         this.surname= true;
//         this.firstName = true;
//         this.revoke = true;
//         this.fileNo = true;
//         this.daysOpen = true;
//         this.noYears = true;
//     }

//     setViewField() {
//         this.healthNumber = true;
//         this.surname = true;
//         this.firstName = true;
//         this.revoke = true;
//         this.fileNo = true;
//         this.daysOpen = true;
//         this.clerk = true;
//         this.type = true;
//         this.opened = true;
//         this.status = true;
//         this.started = true;
//         this.reason = true;
//         this.closed = true;
//         this.office = true;
//         this.noYears = true;
//         this.disclosure = true;
//         this.historyFrom = true;
//         this.cost = true;
//         this.moneyType = true;
//         this.firm = true;
//         this.historyTo = true;
//         this.chequeNo = true;
//         this.city = true;
//         this.dayExtend = true;
//         this.chequeSent = true;
//         this.comment = true;
//         this.chequeDate = true;
//     }

//     setEditField() {
//         this.healthNumber = true;
//         this.fileNo = true;
//         this.daysOpen = true;
//         this.noYears = true;
//     }

//     setDummyField() {
//         this.healthNumber = true;
//         this.fileNo = true;
//         this.daysOpen = true;
//         this.noYears = true;
//     }

//     setAddSubscriberField() {
//         this.healthNumber = true;
//         this.fileNo = true;
//         this.daysOpen = true;
//         this.noYears = true;
//     }

//     save(f:NgForm) {
//         this.submitted = true;
//         this.validate = this.validateOpened();  
//         this.validate = this.validateStarted() || this.validate; 
//         this.validate = this.validateClosed() || this.validate;
//         this.validate = this.validateCost() || this.validate;
//         this.validate = this.validateOffice() || this.validate;
//         this.validate = this.validateChequeDate() || this.validate;
//         this.validate = this.validateChequeSent() || this.validate;
//         this.validate = this.validateHistoryFrom() || this.validate;
//         this.validate = this.validateHistoryTo() || this.validate;
//         console.log("Cond1 : " + !f.valid)
//         console.log("Cond1.2 : " + f.invalid)
//         console.log("Cond2 : " + this.validate)
//         if (!f.valid || this.validate) return;
    
//         console.log("Save 6")
//         if (this.mode === 'add'||this.mode === 'addSubscriber'||this.mode === 'dummy') {
//             this.addRequest()
//             return;
//         }
//         console.log("Save 7")
//         this.saveRequest();
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

//     calculateYears(historyFrom: Date, historyTo: Date) {
//         let from = new Date(historyFrom);
//         let to = new Date(historyTo);

//         let years = Math.floor((to.getFullYear() - from.getFullYear()));
//         if (isNaN(years)) {
//             years = 0;
//         }
//         return years
//     }

//     addRequest() {
//         this.model.setSubscriber(this.selectedSubscriber);
//         this.RequestService.addRequest(this.model).subscribe(requestModel=>{
//             this.router.navigate(['/subscriber-request-details',{subid: requestModel.subscriber.subscribersID,reqid:requestModel.requestID}])
//         }, error => {
//             alert("Add error");
//             console.log('error: ', error);
//         });
//     }

//     saveRequest() {
//         console.log("Save 8")
//         this.RequestService.saveRequest(this.model).subscribe(requestModel=>{
//             this.router.navigate(['/subscriber-request-details',{subid: this.selectedSubscriber.subscribersID,reqid:this.model.requestID}])
//         }, error => {
//             alert("Save error!");
//             console.log('error: ', error);
//         });
//     }

//     deleteRequest() {
//         this.RequestService.deleteRequest(this.model).subscribe(result=>{
//             this.router.navigate(['/add-find-form'])
//         }, error => {
//             alert("Delete error!");
//             console.log('error: ', error);
//         });
//     }

//     cancel() {
//         switch (this.mode) {
//             case "add": {
//                 this.router.navigate(['/add-find-form'])
//                 break;
//             }
//             case "dummy": {
//                 this.router.navigate(['/add-find-form'])
//                 break;
//             }
//             case "addSubscriber": {
//                 this.router.navigate(['/add-find-form'])
//                 break;
//             }
//             case "view": {
//                 this.router.navigate(['/add-find-form'])
//                 break;
//             }
//             case "edit": {
//                 this.router.navigate(['/subscriber-request-details',{subid: this.selectedSubscriber.subscribersID,reqid:this.model.requestID}])
//                 break;
//             }
//         }
//     }

//     compareByTypeId(idFirst: Type, idSecond: Type) {
//         return idFirst && idSecond && idFirst.typeID == idSecond.typeID;
//     }

//     compareByStatusId(idFirst: Status, idSecond: Status) {
//         return idFirst && idSecond && idFirst.statusID == idSecond.statusID;
//     }

//     compareByReasonId(idFirst: Reason, idSecond: Reason) {
//         return idFirst && idSecond && idFirst.reasonID == idSecond.reasonID;
//     }

//     compareByOfficeId(idFirst: Office, idSecond: Office) {
//         return idFirst && idSecond && idFirst.officeID == idSecond.officeID;
//     }

//     compareByDisclosureId(idFirst: Disclosure, idSecond: Disclosure) {
//         return idFirst && idSecond && idFirst.discloseTypeID == idSecond.discloseTypeID;
//     }

//     compareByCityId(idFirst: City, idSecond: City) {
//         return idFirst && idSecond && idFirst.cityID == idSecond.cityID;
//     }

//     /*
//         custom validation
//     */
//     validateOpened() {
//         if(this.model.fileOpened == undefined || this.model.fileOpened <= new Date(0)) {
//             this.openedError = "Invalid Open Date";
//             this.openedDisplay = true;
//         } else {
//             this.openedDisplay = false;
//             if (new Date(this.model.fileOpened) >= new Date(Date.now())) {
//                 this.openedError = "Open Date Exceeds Current Date";
//                 this.openedDisplay = true;
//             }
//         }
//         return this.openedDisplay;
//     }

//     validateStarted() {
//         if(this.model.fileStarted == undefined || this.model.fileStarted <= new Date(0)) {
//             this.startedError = "Invalid Start Date";
//             this.startedDisplay = true;
//         } else {
//             this.startedDisplay = false;
//             if (new Date(this.model.fileStarted) >= new Date(Date.now()) || 
//                 this.model.fileStarted < this.model.fileOpened) 
//             {
//                 this.startedError = "Start Date Exceeds Current Date or Before Open Date";
//                 this.startedDisplay = true;
//             }
//         }
//         return this.startedDisplay;
//     }

//     validateClosed() {
//         if((this.model.fileClosed == undefined || this.model.fileClosed <= new Date(0)) && this.model.status.statusDescription != "Pending") {
//             this.closedError = "Invalid Close Date";
//             this.closedDisplay = true;
//         } else {
//             this.closedDisplay = false;
//             if (new Date(this.model.fileClosed) >= new Date(Date.now()) || 
//                 this.model.fileClosed < this.model.fileStarted) 
//             {
//                 this.closedError = "Close Date Exceeds Current Date or Before Start Date";
//                 this.closedDisplay = true;
//             }
//             if(this.model.fileClosed != undefined && new Date(this.model.fileClosed) > new Date(0) && this.model.status.statusDescription == "Pending") {
//                 this.closedError = "Pending Request Can Not Be Closed";
//                 this.closedDisplay = true;
//             }
//         }
//         return this.closedDisplay;
//     }

//     validateCost() {
//         if ((this.model.cost == undefined || isNaN(this.model.cost) || this.model.cost.toString() == "") && (this.model.chequeNo == undefined || this.model.chequeNo == "")) {
//             this.costError = "Invalid Cost";
//             this.costDisplay = true;
//         } else {
//             this.costDisplay = false;
//             if (this.model.cost > 1000 || this.model.cost < 0) {
//                 this.costError = "Cost Exceeds $1,000 Or Less Than $0";
//                 this.costDisplay = true;
//             }
//             if ((this.model.chequeNo != undefined && this.model.chequeNo != "") && (this.model.cost == undefined || isNaN(this.model.cost) || this.model.cost.toString() == "")) {
//                 this.costError = "Cost Can Not Be Zero With A Cheque Number";
//                 this.costDisplay = true;
//             }
//         }
//         return this.costDisplay;
//      }

//     validateOffice() {
//         if (this.model.office.officeName == undefined || this.model.office.officeName == "") {
//             this.officeError = "Office Required";
//             this.officeDisplay = true;
//         } else {
//             this.officeDisplay = false;
//         }
//         return this.officeDisplay;
//     }

//     validateChequeDate() {
//         if ((this.model.chequeNo != undefined && this.model.chequeNo != "") && (this.model.chequeDate == undefined ||  this.model.chequeDate <= new Date(0))) {
//             this.chequeDateError = "Cheque Date Required With A Cheque Number";
//             this.chequeDateDisplay = true;
//         } else {
//             this.chequeDateDisplay = false;
//         }

//         return this.chequeDateDisplay;
//     }

//     validateChequeSent() {
//         if ((this.model.chequeSent == undefined ||  this.model.chequeSent <= new Date(0)) && (this.model.chequeNo != undefined && this.model.chequeNo != "")) {
//             this.chequeSentError = "Cheque Sent Required With A Cheque Number";
//             this.chequeSentDisplay = true;
//         } else {
//             this.chequeSentDisplay = false;
//             if (new Date(this.model.chequeSent) >= new Date(Date.now()) || 
//             this.model.chequeSent < this.model.fileOpened) 
//             {
//                 this.chequeSentError = "Cheque Sent Date Exceeds Current Date or Before Received Date";
//                 this.chequeSentDisplay = true;
//             }
//         }

//         return this.chequeSentDisplay;
//     }

//     validateHistoryFrom() {
//         if(this.model.historyFrom <= new Date(0)) {
//             this.historyFromError = "Invalid Transferred Date";
//             this.historyFromDisplay = true;
//         } else {
//             this.historyFromDisplay = false;
//             if((this.model.historyFrom == undefined || this.model.historyFrom <= new Date(0)) && (this.model.fileOpened != undefined || this.model.fileOpened > new Date(0))) {
//                 this.historyFromError = "Need File Transferred Date or File Received Date Must be Blank";
//                 this.historyFromDisplay = true;
//             }
//             if ((this.model.historyFrom != undefined || this.model.historyFrom > new Date(0)) && (this.model.fileOpened == undefined || this.model.fileOpened <= new Date(0))) {
//                 this.historyFromError = "Need File Received Date or File Transferred Date Must be Blank";
//                 this.historyFromDisplay = true;
//             }
//             if (new Date(this.model.historyFrom) >= new Date(Date.now()) || 
//                 this.model.historyFrom < this.model.fileOpened) 
//             {
//                 this.historyFromError = "Transferred Date Exceeds Current Date or Before Open Date";
//                 this.historyFromDisplay = true;
//             }
//         }
//         return this.historyFromDisplay;
//     }

//     validateHistoryTo() {
//         if(this.model.historyTo <= new Date(0) && (this.model.historyFrom == undefined || this.model.historyFrom <= new Date(0))) {
//             this.historyToError = "Invalid Received Date";
//             this.historyToDisplay = true;
//         } else {
//             this.historyToDisplay = false;
//             if((this.model.historyTo == undefined || this.model.historyTo <= new Date(0)) && (this.model.historyFrom != undefined || this.model.historyFrom > new Date(0))) {
//                 this.historyToError = "Need File Received Date or File Transferred Date Must be Blank";
//                 this.historyToDisplay = true;
//             }
//             if ((this.model.historyTo != undefined || this.model.historyTo > new Date(0)) && (this.model.historyFrom == undefined || this.model.historyFrom <= new Date(0))) {
//                 this.historyToError = "Need Transferred Date or Received Date Must be Blank";
//                 this.historyToDisplay = true;
//             }
//             if (new Date(this.model.historyTo) >= new Date(Date.now()) || 
//                 this.model.historyTo < this.model.historyFrom) 
//             {
//                 this.historyToError = "Received Date Exceeds Current Date or Before Transferred Date";
//                 this.historyToDisplay = true;
//             }
//         }
//         return this.historyToDisplay;
//     }

// }
