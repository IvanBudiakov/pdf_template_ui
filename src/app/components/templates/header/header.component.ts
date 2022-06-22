import {Component, OnDestroy} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header-form',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {
  ngOnDestroy(): void {
  }

  constructor(private router : Router){}

  goHome(){
      this.router.navigateByUrl('/home');
  }

}
