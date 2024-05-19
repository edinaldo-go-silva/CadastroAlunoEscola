import { Component, OnInit } from "@angular/core";
import { Aluno } from "../aluno.model";
import { AlunoService } from "../aluno.service";

@Component({
  selector: "app-aluno-read",
  templateUrl: "./aluno-read.component.html",
  styleUrls: ["./aluno-read.component.css"],
})
export class AlunoReadComponent implements OnInit {
  objAlunos: Aluno[];
  
  displayedColumns = ["iCodAluno", "sNome", "sCPF", "sCelular", "action"];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService.read().subscribe((alunos) => {
      this.objAlunos = alunos;
    });
  }


}
