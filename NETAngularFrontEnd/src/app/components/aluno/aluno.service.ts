import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Aluno } from "./aluno.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AlunoService {
  baseUrl = "https://localhost:7240/Aluno";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}



  read(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(objAluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseUrl, objAluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(iCodAluno: number): Observable<Aluno> {
    const url = `${this.baseUrl}/${iCodAluno}`;
    return this.http.get<Aluno>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(objAluno: Aluno): Observable<Aluno> {
    const url = `${this.baseUrl}`;
    return this.http.put<Aluno>(url, objAluno).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(iCodAluno: number): Observable<Aluno> {
    const url = `${this.baseUrl}/${iCodAluno}`;
    return this.http.delete<Aluno>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log('*erro: ' + e.message);
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
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


}
