import { Component, OnInit } from "@angular/core";
import { AlunoService } from "../aluno.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Aluno } from "../aluno.model";
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { EscolaService } from "../../escola/escola.service";
import { Escola  } from "../../escola/escola.model";

@Component({
  selector: "app-aluno-update",
  templateUrl: "./aluno-update.component.html",
  styleUrls: ["./aluno-update.component.css"],
})
export class AlunoUpdateComponent implements OnInit {
  objAluno: Aluno;
  sampleFormUpdate: FormGroup;
  EscolasArray: Escola[];

  constructor(
    private alunoService: AlunoService,
    private escolaService: EscolaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.escolaService.read().subscribe((result: Escola[]) => {
      this.EscolasArray = result;      
    });

    const iCodAluno = +this.route.snapshot.paramMap.get("iCodAluno");
    this.alunoService.readById(iCodAluno).subscribe((aluno) => {
      this.objAluno = aluno;
      console.log('objAluno.iCodEscola ==> ' + this.objAluno[0]);

    });

    this.sampleFormUpdate = new FormGroup({
      iCodEscolaForm : new FormControl(null, Validators.required),
      dNascimentoForm: new FormControl(null),
      sNomeForm      : new FormControl(null, Validators.required),
      sEnderecoForm  : new FormControl(null),
      sCPFForm       : new FormControl(null),
      sCelularForm   : new FormControl(null),
    });    
  }

  get fValid() {
    return this.sampleFormUpdate.controls;
  }    
  get cpf() {
    return this.sampleFormUpdate.get('sCPFForm')!;
   }
  
   get telefone() {
    return this.sampleFormUpdate.get('sCelularForm')!;
   }
   get data() {
    return this.sampleFormUpdate.get('dNascimentoForm')!;
   }
  
  updateAluno(): void {
    console.log('objAluno.iCodEscola ==> ' + this.objAluno.iCodEscola);

    this.alunoService.update(this.objAluno).subscribe(() => {
      this.alunoService.showMessage("Aluno atualizado com sucesso!");
      this.router.navigate(["/alunos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/alunos"]);
  }
}
