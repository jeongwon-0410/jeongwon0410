import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { DxApis } from 'src/app/interfaces/model';

@Injectable({
  providedIn: 'root'
})
export class DxService {

  url ='/api/v1/service/?adaptor=DX'
  constructor(private http:HttpClient) {}

 
  getAll():Observable<DxApis[]>{
    return this.http.get<DxApis[]>(this.url)
    .pipe(catchError(this.handleError));
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
