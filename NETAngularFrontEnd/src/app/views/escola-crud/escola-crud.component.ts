import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/components/template/header/header.service";

@Component({
  selector: "app-escola-crud",
  templateUrl: "./escola-crud.component.html",
  styleUrls: ["./escola-crud.component.css"],
})
export class EscolaCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Escolas",
      icon: "storefront",
      routeUrl: "/escolas",
    };
  }

  ngOnInit(): void {}

  navigateToEscolaCreate(): void {
    this.router.navigate(["/escolas/create"]);
  }
}
