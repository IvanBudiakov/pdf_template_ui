// import {Observable} from "rxjs/internal/Observable";
// import {AuthService} from "../../../Services/auth.service";
import {Component, OnChanges, OnDestroy, OnInit} from "@angular/core";
// import {ProfileType} from "../../../model/profile";
// import {filter, takeUntil} from "rxjs/operators";
// import {InteractionStatus} from "@azure/msal-browser";
// import {MsalBroadcastService, MsalService} from "@azure/msal-angular";
// import {BehaviorSubject, Subject} from "rxjs";
// import { Router } from "@angular/router";

@Component({
    selector: 'app-header-form',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {

  // private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  // public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();
  // profile$: Observable<ProfileType>;

  // private readonly _destroying$ = new Subject<void>();

  // constructor(
  //   private authService: MsalService, private hshrAuthService: AuthService, private broadcastService: MsalBroadcastService, public router:Router
  // ) {
  //   this.profile$ = hshrAuthService.profile$
  //   this.broadcastService.inProgress$
  //       .pipe(
  //           filter((status: InteractionStatus) => status === InteractionStatus.None),
  //           takeUntil(this._destroying$)
  //       )
  //       .subscribe(() => {
  //         this.setLoginDisplay();
  //       })
  // }

  ngOnDestroy(): void {
    // this._destroying$.next(undefined);
    // this._destroying$.complete();
  }

  // logout() {
  //   this.authService.logout();
  // }

  // setLoginDisplay() {
  //   let loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  //   this.isAuthenticatedSubject$.next(loginDisplay);
  //   if (loginDisplay) {
  //     this.hshrAuthService.getProfile();
  //   }
  // }


}
