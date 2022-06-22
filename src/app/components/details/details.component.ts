import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pdf } from 'src/app/model/pdf';
import { Template } from 'src/app/model/template';
import { ApicallService } from 'src/app/services/apicall.service';

declare var require: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id !: string;
  template !: Template;
  firstName !: string;
  lastName !: string;
  newPdf = new Pdf;
  isShowForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apicall: ApicallService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')?.substring(1)!;
    this.apicall.getTemplateById(this.id).subscribe(temp => { this.template = temp });

  }

  requestPdf() {
    this.apicall.getPdf(this.firstName, this.lastName, this.template.serviceCodeEntity.service_code)
      .subscribe((data) => {
        this.newPdf = data;
        console.log(this.newPdf.pdf)
          var blob = new Blob([new Uint8Array(data.pdf)] , { type: 'application/pdf' });
          var blobUrl = URL.createObjectURL(blob);
          window.open(blobUrl);
      })
  }

  showForm() {
    if (!this.isShowForm)
      this.isShowForm = true;
    else this.isShowForm = false;
  }
}
