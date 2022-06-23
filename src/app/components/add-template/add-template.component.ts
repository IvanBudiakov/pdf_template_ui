// import { NgModel } from '@angular/forms';
import { Template } from '../../model/template';
import { Service } from 'src/app/model/service';
import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';
import { content } from './file-upload/file-upload.component';
import { fileExt } from './file-upload/file-upload.component';
import { Router } from '@angular/router';
// import { ConfigloadService } from 'src/app/services/configload.service';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css']
})
export class AddTemplateComponent implements OnInit {
  template = new Template();
  isValid: boolean = true;
  services !: Service[];
  res: any;
  showMsg !: boolean;
  wait: any;
  date = new Date();
  today !: string;
  in10Years !: string;



  constructor(
    private apicall: ApicallService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.today = this.date.getFullYear().toString() + '-' +
      (this.date.getMonth() + 1) + '-' +
      this.date.getDate();
    this.in10Years = (this.date.getFullYear() + 10).toString() + '-' +
      (this.date.getMonth() + 1) + '-' +
      this.date.getDate();
    this.apicall.getAllServices().subscribe(ret => { this.services = ret });
    console.warn(this.today + ' | | ' + this.in10Years);

  }

  addTemplate(): void {
    if (this.validateFields() && content !== null) {
      this.template.html = content;
      this.apicall.addTemplate(this.template).subscribe(data => {
        console.warn(data);
        this.isValid = true;
        //displaying success after template is updated
        setTimeout(() => { this.router.navigateByUrl('/home') }, 1000);
        this.showMsg = true;
      })
    } else
      this.isValid = false;
  }

  serviceCheck(): boolean {
    return (this.template.serviceCodeEntity.service_code !== undefined);
  }

  validateFields(): boolean {
    return (this.serviceCheck() && this.getExt() && this.validateDates() === null);
  }

  getExt() {
    return fileExt && content !== null;
  }

  validateDates(): string | null {

    //adjusting the time zone
    let fromDate = new Date(this.template.effective_date?.toString().slice(0, 10).replace(/-/g, '/'));
    let toDate = new Date(this.template.end_date?.toString().slice(0, 10).replace(/-/g, '/'));

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (fromDate && toDate && (fromDate > toDate))
      return 'The effective date must come before the expiry date';
    else if (fromDate && (fromDate < today))
      return 'The template cannot become effective before today';
    else if (toDate && (toDate < today))
      return 'The template cannot expire before today';
    else if ((fromDate && (fromDate.getFullYear() > (today.getFullYear() + 99))) || 
              (toDate && (toDate.getFullYear() > (today.getFullYear() + 99))))
      return 'Templates are only stored for 99 years';
    return null;
  }

}