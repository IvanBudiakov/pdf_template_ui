import { Injectable } from '@angular/core';
import { templates } from '../mock-templates';
import { Template } from '../template';


@Injectable({
  providedIn: 'root'
})
export class TemplatesService {
  getTemplates(): Promise<Template[]>{
    return Promise.resolve(templates)
  }
}
