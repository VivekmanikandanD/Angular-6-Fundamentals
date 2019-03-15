import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DisplayingdataComponent } from './displayingdata/displayingdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplatesyntaxComponent } from './templatesyntax/templatesyntax.component';
import { InterpolationandtemplateexpressionsComponent } from './interpolationandtemplateexpressions/interpolationandtemplateexpressions.component';
import { UserinputComponent } from './userinput/userinput.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ComponentinteractionComponent } from './componentinteraction/componentinteraction.component';
import { ComponentinteractionchildComponent } from './componentinteractionchild/componentinteractionchild.component';
import { InterceptwithsetterchildComponent } from './interceptwithsetterchild/interceptwithsetterchild.component';
import { InterceptwithngonchangeschildComponent } from './interceptwithngonchangeschild/interceptwithngonchangeschild.component';
import { ParentlistensforchildeventComponent } from './parentlistensforchildevent/parentlistensforchildevent.component';
import { ParentinteractswithchildvialocalvariableComponent } from './parentinteractswithchildvialocalvariable/parentinteractswithchildvialocalvariable.component';
import { ParentforviewchildComponent } from './parentforviewchild/parentforviewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayingdataComponent,
    DashboardComponent,
    TemplatesyntaxComponent,
    InterpolationandtemplateexpressionsComponent,
    UserinputComponent,
    LifecyclehooksComponent,
    ComponentinteractionComponent,
    ComponentinteractionchildComponent,
    InterceptwithsetterchildComponent,
    InterceptwithngonchangeschildComponent,
    ParentlistensforchildeventComponent,
    ParentinteractswithchildvialocalvariableComponent,
    ParentforviewchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
