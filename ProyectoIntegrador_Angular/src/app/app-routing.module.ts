import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';

const routes: Routes = [

  { path: '', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent},
  { path: 'editedu/:id', component: EditEducacionComponent},
  { path: 'nuevoproye', component: NewProyectosComponent},
  { path: 'editskills/:id', component: EditSkillsComponent},
  { path: 'nuevoskills', component: NewSkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//