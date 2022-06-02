import { formatDate } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-footer-form',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    currentDateTime = formatDate(new Date(), 'yyyy-MM-dd HH.mm.ssSSS', 'en-CA')
}