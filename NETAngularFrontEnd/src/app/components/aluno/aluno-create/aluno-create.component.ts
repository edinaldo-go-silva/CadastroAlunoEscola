import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AlunoService } from "../aluno.service";
import { EscolaService } from "../../escola/escola.service";
import { Router } from "@angular/router";
import { Aluno  } from "../aluno.model";
import { Escola  } from "../../escola/escola.model";

@Component({
  selector: "app-aluno-create",
  templateUrl: "./aluno-create.component.html",
  styleUrls: ["./aluno-create.component.css"]
})



export class AlunoCreateComponent implements OnInit {
  
  sampleForm: FormGroup;

  objAluno: Aluno = {
    iCodAluno: 0,
    iCodEscola: 0,
    dNascimento: "",
    sNome: "",
    sEndereco: "",
    sCPF: "",
    sCelular: "",
  };
 
  EscolasArray: Escola[];

  constructor(private alunoService: AlunoService, 
              private escolaService: EscolaService, private router: Router) {}

  ngOnInit(): void {

    this.escolaService.read().subscribe((result: Escola[]) => {
      this.EscolasArray = result;      
    });

    this.sampleForm = new FormGroup({
      iCodEscolaForm : new FormControl(null, Validators.required),
      dNascimentoForm: new FormControl(null),
      sNomeForm      : new FormControl(null, Validators.required),
      sEnderecoForm  : new FormControl(null),
      sCPFForm       : new FormControl(null),
      sCelularForm   : new FormControl(null),
    });       

  }

  get fValid() {
    return this.sampleForm.controls;
  }    
  get cpf() {
    return this.sampleForm.get('sCPFForm')!;
   }
  
   get telefone() {
    return this.sampleForm.get('sCelularForm')!;
   }
   get data() {
    return this.sampleForm.get('dNascimentoForm')!;
   }



  createAluno(): void {
    console.log('objAluno.iCodEscola ==> ' + this.objAluno.iCodEscola);
    this.alunoService.create(this.objAluno).subscribe(() => {
      this.alunoService.showMessage("Aluno criado!");
      this.router.navigate(["/alunos"]);
    });
  }


  cancel(): void {
    this.router.navigate(["/alunos"]);
  }
}
