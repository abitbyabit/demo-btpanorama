import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('user', userReducer)
  ]
})
export class UserModule { }
