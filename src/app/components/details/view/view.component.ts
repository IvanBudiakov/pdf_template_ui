import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Template } from 'src/app/model/template';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id !: string;
  template !: Template;
  constructor(
    private route: ActivatedRoute,
    private apicall: ApicallService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')?.substring(1)!;
    this.apicall.getTemplateById(this.id).subscribe(temp => { this.template = temp });
  }

}

