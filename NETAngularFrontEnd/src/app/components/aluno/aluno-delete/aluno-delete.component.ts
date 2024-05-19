import { Component, OnInit } from "@angular/core";
import { AlunoService } from "../aluno.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Aluno } from "../aluno.model";

@Component({
  selector: "app-aluno-delete",
  templateUrl: "./aluno-delete.component.html",
  styleUrls: ["./aluno-delete.component.css"],
})
export class AlunoDeleteComponent implements OnInit {
  objAluno: Aluno;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const iCodAluno = +this.route.snapshot.paramMap.get("iCodAluno");
    this.alunoService.readById(iCodAluno).subscribe((aluno) => {
      this.objAluno = aluno;
    });
  }

  deleteAluno(): void {
    this.alunoService.delete(this.objAluno.iCodAluno).subscribe(() => {
      this.alunoService.showMessage("Aluno excluído com sucesso!");
      this.router.navigate(["/alunos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/alunos"]);
  }
}
