import { Component, OnInit } from "@angular/core";
import { EscolaService } from "../escola.service";
import { Router } from "@angular/router";
import { Escola  } from "../escola.model";

@Component({
  selector: "app-escola-create",
  templateUrl: "./escola-create.component.html",
  styleUrls: ["./escola-create.component.css"],
})
export class EscolaCreateComponent implements OnInit {
  objEscola: Escola = {
    iCodEscola: 0,
    sDescricao: "",
  };


  constructor(private escolaService: EscolaService, private router: Router) {}

  ngOnInit(): void {}

  createEscola(): void {
    this.escolaService.create(this.objEscola).subscribe(() => {
      this.escolaService.showMessage("Escola criada !");
      this.router.navigate(["/escolas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/alunos"]);
  }
}
