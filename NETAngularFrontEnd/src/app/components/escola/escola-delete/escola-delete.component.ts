import { Component, OnInit } from "@angular/core";
import { EscolaService } from "../escola.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Escola } from "../escola.model";

@Component({
  selector: "app-escola-delete",
  templateUrl: "./escola-delete.component.html",
  styleUrls: ["./escola-delete.component.css"],
})
export class EscolaDeleteComponent implements OnInit {
  objEscola: Escola;

  constructor(
    private escolaService: EscolaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const iCodEscola = +this.route.snapshot.paramMap.get("iCodEscola");
    this.escolaService.readById(iCodEscola).subscribe((escola) => {
      this.objEscola = escola;
    });
  }

  deleteEscola(): void {
    this.escolaService.delete(this.objEscola.iCodEscola).subscribe(() => {
      this.escolaService.showMessage("Escola excluída com sucesso!");
      this.router.navigate(["/escolas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/escolas"]);
  }
}
