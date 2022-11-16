import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
{
path:'hakkimizda',
component:HakkimizdaComponent

},
{
  path:'iletisim',
  component:IletisimComponent
  
  },
  {
    path:'todo',
    component:TodoComponent
    
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
