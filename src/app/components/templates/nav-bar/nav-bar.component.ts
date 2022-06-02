import { Component } from "@angular/core";
// import {Observable} from "rxjs/internal/Observable";
// import {Account} from "../../../model/profile";
// import {BehaviorSubject, Subject} from "rxjs";
// import {AuthService} from "../../../Services/auth.service";
// import {MsalBroadcastService, MsalService} from "@azure/msal-angular";
// import {filter, takeUntil} from "rxjs/operators";
// import {InteractionStatus} from "@azure/msal-browser";

@Component({
    selector: 'app-nav-bar-form',
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

    // private isAdminSubject$ = new BehaviorSubject<boolean>(false);
    // public isAdmin$: Observable<boolean>;

    // private readonly _destroying$ = new Subject<void>();

    // constructor(
    //   private authService: MsalService, private hshrAuthService: AuthService,private broadcastService: MsalBroadcastService
    // ) {
    //     this.isAdmin$ = this.isAdminSubject$.asObservable();
    //     this.broadcastService.inProgress$
    //       .pipe(
    //         filter((status: InteractionStatus) => status === InteractionStatus.None),
    //         takeUntil(this._destroying$)
    //       )
    //       .subscribe(() => {
    //           let isAdmin = this.hshrAuthService.isAdm();
    //           this.isAdminSubject$.next(isAdmin);
    //       })
    // }

    // ngOnDestroy(): void {
    //     this._destroying$.next(undefined);
    //     this._destroying$.complete();
    // }

}
