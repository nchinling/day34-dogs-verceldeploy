import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ApiResponse } from "./models";
import { Observable, lastValueFrom, map } from "rxjs";

@Injectable()
export class DogService {

  //method 1
  // http = inject(HttpClient)

  //method 2
  constructor(private http: HttpClient) { }

  getDogAsObservable(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('https://dog.ceo/api/breeds/image/random')
  }

  //can only return one parameter, ie message
  getDogAsObservableImage(): Observable<string> {
    return this.http.get<ApiResponse>('https://dog.ceo/api/breeds/image/random')
        .pipe(
          map(resp => resp.message)
        )
  }

  getDogAsPromise(): Promise<ApiResponse> {
    return lastValueFrom(
      this.http.get<ApiResponse>('https://dog.ceo/api/breeds/image/random')
    )
  }

  getDogAsPromiseImage(): Promise<string> {
    return lastValueFrom(
      this.http.get<ApiResponse>('https://dog.ceo/api/breeds/image/random')
    )
    .then(resp => resp.message)
  }

}