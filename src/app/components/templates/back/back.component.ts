import { Component } from "@angular/core";
import { Location } from "@angular/common";

@Component({
    selector: 'app-go-back',
    templateUrl: './back.component.html'
})
export class BackComponent {

    constructor(
        private location:Location
    ){}
    goBack(): void {
        this.location.back();
      }
}