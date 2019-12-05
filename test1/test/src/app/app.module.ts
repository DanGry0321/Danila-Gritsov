import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path:'about', component: AboutComponent},
  {path:'info', component: InfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
