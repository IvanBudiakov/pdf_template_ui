import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Template } from '../model/template';
import { Observable } from 'rxjs';
import {AppComponent} from '../app.component';
import {environment} from "../../environments/environment";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) { }
  app !: AppComponent;
  baseURL : string = environment.restBase;

  getAllTemplates(): Observable<Template[]> {
    return this.httpClient.get<Template[]>(this.baseURL+'/templates/findAll');
  }

  
}
