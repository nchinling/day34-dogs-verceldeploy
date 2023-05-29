import { Component, inject } from '@angular/core';
import { DogService } from './dog.service';
import { Observable } from 'rxjs';
import { ApiResponse } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dogSvc = inject(DogService)

  //constructor(private dogSvc: DogService) { }

  resp$!: Observable<ApiResponse>
  // resp2$!: Observable<String>
  prom$!: Promise<string>
  // prom2$!: Promise<ApiResponse>

  getDogsAsObservable() {
    this.resp$ = this.dogSvc.getDogAsObservable()
    // this.resp2$ = this.dogSvc.getDogAsObservableImage()
    
  }

  getDogsAsPromise() {
    //string
    this.prom$ = this.dogSvc.getDogAsPromiseImage()

    //ApiResponse
    // this.prom2$ = this.dogSvc.getDogAsPromise()
  }

}