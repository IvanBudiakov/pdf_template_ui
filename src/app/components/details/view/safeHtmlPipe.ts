import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: "safeHtml" })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}


  //overwritting default way browser views html security to be able to insert it into a page

  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}