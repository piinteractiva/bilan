import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ForosComponent } from './foros/foros.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ModulosComponent } from './modulos/modulos.component';
import { MalokaComponent } from './maloka/maloka.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModuleBarComponent } from './layout-module-bar/layout-module-bar.component';
import { ArtefactoCardComponent } from './artefacto-card/artefacto-card.component';
import { SponsorIntroComponent } from './sponsor-intro/sponsor-intro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { DescriptionIntroComponent } from './description-intro/description-intro.component';
import { BienvenidoTeacherComponent } from './bienvenido-teacher/bienvenido-teacher.component';
import { ModuloTeacherComponent } from './modulo-teacher/modulo-teacher.component';
import { PanelEvaluacionComponent } from './panel-evaluacion/panel-evaluacion.component';
import { MalokaCivilComponent } from './maloka-civil/maloka-civil.component';
import { MalokaEspiritualComponent } from './maloka-espiritual/maloka-espiritual.component';
import { MalokaExploracionComponent } from './maloka-exploracion/maloka-exploracion.component';
import { RegisterComponent } from './register/register.component';
import { ModuleIntroComponent } from './module-intro/module-intro.component';
import { ModuleActividadesMatematicasComponent } from './module-actividades-matematicas/module-actividades-matematicas.component';
import { ModuleActividadesCompetenciasCiudadanasComponent } from './module-actividades-competencias-ciudadanas/module-actividades-competencias-ciudadanas.component';
import { ModuleActividadesCompetenciasSocioemocionalesComponent } from './module-actividades-competencias-socioemocionales/module-actividades-competencias-socioemocionales.component';
import { ModuleActividadesCienciasNaturalesComponent } from './module-actividades-ciencias-naturales/module-actividades-ciencias-naturales.component';
import { ModuleActividadesLenguajeComponent } from './module-actividades-lenguaje/module-actividades-lenguaje.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/sponsor',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: WelcomeComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
      {
        path: 'modulos',
        component: ModulosComponent,
      },
      {
        path: 'modulos/:materia',
        component: ModuleIntroComponent,
      },
      {
        path: 'modulos/matematicas/actividades/10/:page',
        component: ModuleActividadesMatematicasComponent,
      },
      {
        path: 'modulos/competencias-ciudadanas/actividades/10/:page',
        component: ModuleActividadesCompetenciasCiudadanasComponent,
      },
      {
        path: 'modulos/competencias-socioemocionales/actividades/10/:page',
        component: ModuleActividadesCompetenciasSocioemocionalesComponent,
      },
      {
        path: 'modulos/ciencias-naturales/actividades/10/:page',
        component: ModuleActividadesCienciasNaturalesComponent,
      },
      {
        path: 'modulos/lenguaje/actividades/10/:page',
        component: ModuleActividadesLenguajeComponent,
      },
      {
        path: 'maloka',
        component: MalokaComponent,
      },
      {
        path: 'maloka/civil',
        component: MalokaCivilComponent,
      },
      {
        path: 'maloka/espiritual',
        component: MalokaEspiritualComponent,
      },
      {
        path: 'maloka/exploracion',
        component: MalokaExploracionComponent,
      },
      {
        path: 'artefactos',
        component: ArtefactoCardComponent,
      },
      {
        path: 'teacher',
        component: BienvenidoTeacherComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutModuleBarComponent,
    children: [
      {
        path: 'foros',
        component: ForosComponent,
      },
      {
        path: 'teacher/modulo',
        component: ModuloTeacherComponent,
      },
      {
        path: 'teacher/panel-evaluacion',
        component: PanelEvaluacionComponent,
      },
    ],
  },
  {
    path: 'sponsor',
    component: SponsorIntroComponent,
  },
  {
    path: 'description',
    component: DescriptionIntroComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
