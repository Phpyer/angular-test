import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ListUserComponent } from './list-user/list-user.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    ListUserComponent
  ],
  exports:[
    UsuariosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
