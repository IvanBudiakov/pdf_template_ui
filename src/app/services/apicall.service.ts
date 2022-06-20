import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Template } from '../model/template';
import { Service } from '../model/service';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { environment } from "../../environments/environment";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) { }
  app !: AppComponent;
  baseURL: string = environment.restBase;

  getAllTemplates(): Observable<Template[]> {
    return this.httpClient.get<Template[]>(this.baseURL + '/templates/findAll');
  }

  getAllServices(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(this.baseURL + '/findAll');
  }


  getTemplateById(id: string): Observable<Template> {
    return this.httpClient.get<Template>(this.baseURL + '/templates/findById?id=' + id)
  }

  addTemplate(template: Template): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    template.update_time = template.create_time = new Date();

    const body = JSON.stringify(template);
    return this.httpClient.post(this.baseURL + '/templates/addTemplate', body, { 'headers': headers })
  }

  updateTemplate(template: Template): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    template.update_time = new Date();

    const body = JSON.stringify(template);
    console.warn(this.baseURL + '/templates/updateTemplate', body, { 'headers': headers });

    return this.httpClient.put(this.baseURL + '/templates/updateTemplate', body, { 'headers': headers })
  }

  deleteTemplate(id: string): Observable<Template> {
    return this.httpClient.delete<Template>(this.baseURL + '/templates/deleteTemplate?id=' + id)
  }

}
