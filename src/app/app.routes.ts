import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Skill } from './component/skill/skill';
import { Experience } from './component/experience/experience';
import { Achievements } from './component/achievements/achievements';
import { Projects } from './component/projects/projects';
import { Home } from './component/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'skills', component: Skill },
  { path: 'experience', component: Experience },
  { path: 'achievements', component: Achievements },
  { path: 'projects', component: Projects },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
