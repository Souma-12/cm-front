import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BodyComponent } from './component/body/body.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ResponsableComponent } from './component/responsable/responsable.component';
import { CandidatsComponent } from './component/candidats/candidats.component';
import { ActualiteComponent } from './component/actualite/actualite.component';
import { SessionComponent } from './component/session/session.component';
import { FormationComponent } from './component/formation/formation.component';



const appRoutes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full'},
    { path: 'welcome', component: WelcomeComponent },
{path: 'principal', component: PrincipalComponent, children: [
    { path: 'responsable', component: ResponsableComponent, outlet: 'child1' },
    { path: 'candidats', component: CandidatsComponent, outlet: 'child1' },
    { path: 'actualite', component: ActualiteComponent, outlet: 'child1' },
    { path: 'session', component: SessionComponent, outlet: 'child1' },
    { path: 'formation', component: FormationComponent, outlet: 'child1' },
    

]}
] ;

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
