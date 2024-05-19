import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Escola } from "./escola.model";
import { Observable, EMPTY } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class EscolaService {
  baseUrl = "https://localhost:7240/Escola";


  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}



  read(): Observable<Escola[]> {
    return this.http.get<Escola[]>(this.baseUrl).pipe(
      map((obj) => obj),  
      catchError((e) => this.errorHandler(e))
    );
  }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
    console.log('*erro: ' + msg);
  }

  create(objEscola: Escola): Observable<Escola> {
    return this.http.post<Escola>(this.baseUrl, objEscola).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(iCodEscola: number): Observable<Escola> {
    const url = `${this.baseUrl}/${iCodEscola}`;
    return this.http.get<Escola>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(objEscola: Escola): Observable<Escola> {
    const url = `${this.baseUrl}`;
    return this.http.put<Escola>(url, objEscola).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(iCodEscola: number): Observable<Escola> {
    const url = `${this.baseUrl}/${iCodEscola}`;
    return this.http.delete<Escola>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log('*erro: ' + e.message);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
