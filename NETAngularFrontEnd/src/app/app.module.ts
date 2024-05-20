import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { HomeComponent } from "./views/home/home.component";
import { LoginComponent } from "./views/login/login.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { AlunoCrudComponent     } from "./views/aluno-crud/aluno-crud.component";
import { AlunoCreateComponent   } from "./components/aluno/aluno-create/aluno-create.component";
import { AlunoReadComponent     } from "./components/aluno/aluno-read/aluno-read.component";
import { AlunoUpdateComponent   } from './components/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent   } from './components/aluno/aluno-delete/aluno-delete.component';
import { EscolaCrudComponent    } from "./views/escola-crud/escola-crud.component";
import { EscolaCreateComponent  } from "./components/escola/escola-create/escola-create.component";
import { EscolaReadComponent    } from "./components/escola/escola-read/escola-read.component";
import { EscolaUpdateComponent  } from './components/escola/escola-update/escola-update.component';
import { EscolaDeleteComponent  } from './components/escola/escola-delete/escola-delete.component';
import { ReactiveFormsModule    } from '@angular/forms';
import { initialConfig, NgxMaskModule } from 'ngx-mask';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    AlunoCrudComponent,
    AlunoCreateComponent,
    AlunoReadComponent,
    AlunoUpdateComponent,
    AlunoDeleteComponent,
    EscolaCrudComponent,
    EscolaCreateComponent,
    EscolaReadComponent,
    EscolaUpdateComponent,
    EscolaDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      ...initialConfig,
      patterns: {
        ...initialConfig.patterns,
        // NOTE: optional letter
        O: { pattern: new RegExp(/[a-zA-Z ]/), optional: true },
        // NOTE: everything but ' and "
        Q: { pattern: new RegExp(/[^'"]/) },
        // NOTE: everything but ' and " and space
        T: { pattern: new RegExp(/[^'" ]/) },
        N: { pattern: new RegExp(/[1-9]/) }
      }
    }),    
  ],  
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
