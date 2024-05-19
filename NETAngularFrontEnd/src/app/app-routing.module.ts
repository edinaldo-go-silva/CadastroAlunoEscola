import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent          } from "./views/home/home.component";
import { LoginComponent         } from "./views/login/login.component";
import { AlunoCrudComponent     } from "./views/aluno-crud/aluno-crud.component";
import { AlunoCreateComponent   } from "./components/aluno/aluno-create/aluno-create.component";
import { AlunoUpdateComponent   } from "./components/aluno/aluno-update/aluno-update.component";
import { AlunoDeleteComponent   } from "./components/aluno/aluno-delete/aluno-delete.component";
import { EscolaCrudComponent    } from "./views/escola-crud/escola-crud.component";
import { EscolaCreateComponent  } from "./components/escola/escola-create/escola-create.component";
import { EscolaUpdateComponent  } from "./components/escola/escola-update/escola-update.component";
import { EscolaDeleteComponent  } from "./components/escola/escola-delete/escola-delete.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },  
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "alunos",
    component: AlunoCrudComponent,
  },
  {
    path: "alunos/create",
    component: AlunoCreateComponent,
  },
  {
    path: "alunos/update/:iCodAluno",
    component: AlunoUpdateComponent,
  },
  {
    path: "alunos/delete/:iCodAluno",
    component: AlunoDeleteComponent,
  },  
  {
    path: "escolas",
    component: EscolaCrudComponent,
  },
  {
    path: "escolas/create",
    component: EscolaCreateComponent,
  },
  {
    path: "escolas/update/:iCodEscola",
    component: EscolaUpdateComponent,
  },
  {
    path: "escolas/delete/:iCodEscola",
    component: EscolaDeleteComponent,
  },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
