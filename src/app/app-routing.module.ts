import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SchoolComponent } from './school/school.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}},
  { path: 'school', component: SchoolComponent, data: {animation: 'SchoolPage'}},
  { path: 'experiance', component: ExperienceComponent, data: {animation: 'ExperiancePage'}},
  { path: 'skills', component: SkillsComponent, data: {animation: 'SkillsPage'}},
  { path: 'projects', component: ProjectsComponent, data: {animation: 'ProjectsPage'}},
  { path: 'interests', component: InterestsComponent, data: {animation: 'InterestsPage'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
