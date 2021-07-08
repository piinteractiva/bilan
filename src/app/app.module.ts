import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MalokaComponent } from './maloka/maloka.component';
import { ForosComponent } from './foros/foros.component';
import { ModulosComponent } from './modulos/modulos.component';
import { ModuleBarComponent } from './module-bar/module-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutModuleBarComponent } from './layout-module-bar/layout-module-bar.component';
import { ArtefactoCardComponent } from './artefacto-card/artefacto-card.component';
import { SponsorIntroComponent } from './sponsor-intro/sponsor-intro.component';
import { DescriptionIntroComponent } from './description-intro/description-intro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { BienvenidoTeacherComponent } from './bienvenido-teacher/bienvenido-teacher.component';
import { ModuloTeacherComponent } from './modulo-teacher/modulo-teacher.component';
import { PanelEvaluacionComponent } from './panel-evaluacion/panel-evaluacion.component';
import { MalokaCivilComponent } from './maloka-civil/maloka-civil.component';
import { MalokaEspiritualComponent } from './maloka-espiritual/maloka-espiritual.component';
import { MalokaExploracionComponent } from './maloka-exploracion/maloka-exploracion.component';
import { RegisterComponent } from './register/register.component';
import { ModuleIntroComponent } from './module-intro/module-intro.component';
import { ModuleActividadesMatematicasComponent } from './module-actividades-matematicas/module-actividades-matematicas.component';
import { ModuleActividadesLenguajeComponent } from './module-actividades-lenguaje/module-actividades-lenguaje.component';
import { ModuleActividadesCienciasNaturalesComponent } from './module-actividades-ciencias-naturales/module-actividades-ciencias-naturales.component';
import { ModuleActividadesCompetenciasSocioemocionalesComponent } from './module-actividades-competencias-socioemocionales/module-actividades-competencias-socioemocionales.component';
import { ModuleActividadesCompetenciasCiudadanasComponent } from './module-actividades-competencias-ciudadanas/module-actividades-competencias-ciudadanas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    PerfilComponent,
    MalokaComponent,
    ForosComponent,
    ModulosComponent,
    ModuleBarComponent,
    LayoutComponent,
    PageNotFoundComponent,
    LayoutModuleBarComponent,
    ArtefactoCardComponent,
    SponsorIntroComponent,
    DescriptionIntroComponent,
    InicioComponent,
    LoginComponent,
    BienvenidoTeacherComponent,
    ModuloTeacherComponent,
    PanelEvaluacionComponent,
    MalokaCivilComponent,
    MalokaEspiritualComponent,
    MalokaExploracionComponent,
    RegisterComponent,
    ModuleIntroComponent,
    ModuleActividadesMatematicasComponent,
    ModuleActividadesLenguajeComponent,
    ModuleActividadesCienciasNaturalesComponent,
    ModuleActividadesCompetenciasSocioemocionalesComponent,
    ModuleActividadesCompetenciasCiudadanasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
