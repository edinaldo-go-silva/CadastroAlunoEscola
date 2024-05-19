import { Component, OnInit } from "@angular/core";
import { Escola } from "../escola.model";
import { EscolaService } from "../escola.service";

@Component({
  selector: "app-escola-read",
  templateUrl: "./escola-read.component.html",
  styleUrls: ["./escola-read.component.css"],
})
export class EscolaReadComponent implements OnInit {
  objEscolas: Escola[];
  displayedColumns = ["iCodEscola", "sDescricao", "action"];

  constructor(private escolaService: EscolaService) {}

  ngOnInit(): void {
    this.escolaService.read().subscribe((escolas) => {
      this.objEscolas = escolas;
    });
  }
}
