import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DisplayingdataComponent } from './displayingdata/displayingdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplatesyntaxComponent } from './templatesyntax/templatesyntax.component';
import { InterpolationandtemplateexpressionsComponent } from './interpolationandtemplateexpressions/interpolationandtemplateexpressions.component';
import { UserinputComponent } from './userinput/userinput.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';

const routes:Routes= [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'displayingdata', component:DisplayingdataComponent},
  {path:'templatesyntax', component:TemplatesyntaxComponent},
  {path:'interpolationandtemplateexpressions', component:InterpolationandtemplateexpressionsComponent},
  {path:'userinput', component:UserinputComponent},
  {path:'lifecyclehooks', component:LifecyclehooksComponent},
  {path:'componentinteraction', component:ComponentinteractionComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
