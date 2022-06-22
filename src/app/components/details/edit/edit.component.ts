import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/model/template';
import { ApicallService } from 'src/app/services/apicall.service';
import { ConfigloadService } from 'src/app/services/configload.service';
import { Router, ActivatedRoute } from '@angular/router';
import { content } from '../../add-template/file-upload/file-upload.component';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  template = new Template();
  showMsg !: boolean;

  constructor(
    private apicall: ApicallService,
    private configload: ConfigloadService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apicall.getTemplateById(this.route.snapshot.paramMap.get('id')?.substring(1)!).subscribe(
      temp => {
        this.template = temp
      });
  }


  updateTemplate() {
    if (content !== null)
      this.template.html = content;

    this.template.effective_date = new Date(this.template.effective_date?.toString().slice(0, 10).replace(/-/g, '/'));
    this.template.end_date = new Date(this.template.end_date?.toString().slice(0, 10).replace(/-/g, '/'));

    this.apicall.updateTemplate(this.template).subscribe(data => {
      console.log(data);
      this.apicall.getTemplateById(this.template.id.toString()).subscribe(data => {
        console.warn(data);
      });
      setTimeout(() => { this.router.navigateByUrl('/templates/details/:' + this.template.id.toString()) }, 1000);
      this.showMsg = true;
    });
  }

  deleteTemplate() {
    if (confirm('Are you sure you want to delete the template?')) {
      this.apicall.deleteTemplate(this.template.id.toString()).subscribe(status => {
        setTimeout(() => { this.router.navigateByUrl('/home') }, 1000);
        this.showMsg = true;;
      });
    }
  }
}