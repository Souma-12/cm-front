import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './component/body/body.component';
import { HeaderComponent } from './component/header/header.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { AsideComponent } from './component/aside/aside.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidatsComponent } from './component/candidats/candidats.component';
import { FormationComponent } from './component/formation/formation.component';
import { ResponsableComponent } from './component/responsable/responsable.component';
import { SessionComponent } from './component/session/session.component';
import { UserComponent } from './component/user/user.component';
import { ActualiteComponent } from './component/actualite/actualite.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    AsideComponent,
    ActualiteComponent,
    CandidatsComponent,
    FormationComponent,
    ResponsableComponent,
    SessionComponent,
    UserComponent,
    WelcomeComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
  routing,
  HttpClientModule,
  ModalModule.forRoot(),
  FormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
