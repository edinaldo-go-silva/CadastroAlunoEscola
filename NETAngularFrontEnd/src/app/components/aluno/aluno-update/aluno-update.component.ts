import { Component, OnInit } from "@angular/core";
import { AlunoService } from "../aluno.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Aluno } from "../aluno.model";

@Component({
  selector: "app-aluno-update",
  templateUrl: "./aluno-update.component.html",
  styleUrls: ["./aluno-update.component.css"],
})
export class AlunoUpdateComponent implements OnInit {
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

  updateAluno(): void {
    this.alunoService.update(this.objAluno).subscribe(() => {
      this.alunoService.showMessage("Aluno atualizado com sucesso!");
      this.router.navigate(["/alunos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/alunos"]);
  }
}
