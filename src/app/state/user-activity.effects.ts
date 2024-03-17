import { Injectable } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { createEffect } from '@ngrx/effects';

//import { UserActivityService } from '../services/user-activity.service';

@Injectable()
export class UserActivityEffects {
  trackUserActivity$ = createEffect(() =>
    fromEvent(document, 'click').pipe(
      concatMap((event) => {
        console.log('document click user strack');
        //this.userActivityService.trackUserActivity(event)
        return of({ type: 'ANOTHER_ACTION_TYPE' }); 
    }),
    ), { dispatch: false }
  );

  constructor(
    //private userActivityService: UserActivityService,
  ) {}
}