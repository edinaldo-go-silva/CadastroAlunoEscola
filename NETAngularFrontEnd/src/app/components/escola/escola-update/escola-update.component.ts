import { Component, OnInit } from "@angular/core";
import { EscolaService } from "../escola.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Escola } from "../escola.model";

@Component({
  selector: "app-escola-update",
  templateUrl: "./escola-update.component.html",
  styleUrls: ["./escola-update.component.css"],
})
export class EscolaUpdateComponent implements OnInit {
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

  updateEscola(): void {
    this.escolaService.update(this.objEscola).subscribe(() => {
      this.escolaService.showMessage("Escola atualizada com sucesso!");
      this.router.navigate(["/escolas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/escolas"]);
  }
}
