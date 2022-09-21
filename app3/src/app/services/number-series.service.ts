import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number>{
    
    const bgJob = (observer:Observer<number>) => {

      if(ub<lb){
        observer.error("Invalid boundaries to start the series");
        return;
      }

      let n = lb;

      let handle = setInterval(()=>{
        observer.next(n);
        n++;
        if(n>ub){
          clearInterval(handle);
          observer.complete();
        }
      },500);
    };

    return new Observable(bgJob);
  }
}
