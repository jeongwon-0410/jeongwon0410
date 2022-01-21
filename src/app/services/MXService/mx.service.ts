import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MxApis } from 'src/app/interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class MxService {

  url ='/api/v1/service/?adaptor=MX'

  constructor(private http:HttpClient) { }

  getAll():Observable<MxApis[]> {
    return this.http.get<MxApis[]>(this.url).pipe(catchError(this.handleError))
  }


  private handleError(error:HttpErrorResponse){
    let message ='';
    if (error.error instanceof ErrorEvent){
      console.error(`Client-side error: ${error.error.message}`);
      message = error.error.message;
    }else{
      console.error(`Server-side error: ${error.status}`);
      message = error.message;
    }

    return throwError({
      title: 'Something wrong! please try again later.',message
    });
  }
}
