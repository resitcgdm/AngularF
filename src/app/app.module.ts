import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResitcompComponent } from './resitcomp/resitcomp.component';
import { TodoComponent } from './todo/todo.component';
import { NavcompComponent } from './navcomp/navcomp.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { IletisimComponent } from './iletisim/iletisim.component';

@NgModule({
  declarations: [
    AppComponent,
    ResitcompComponent,
    TodoComponent,
    NavcompComponent,
    HakkimizdaComponent,
    IletisimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
