import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './core/footer/footer.component';
import { MainNavComponent } from './core/navigation/main-nav/main-nav.component';
import { SideNavComponent } from './core/navigation/side-nav/side-nav.component';
import { MainContentComponent } from './core/main-content/main-content.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UserModule } from './user/user.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ClientData } from './client/data/client-data';
import { appReducer } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SideNavComponent,
    FooterComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(ClientData),

    StoreModule.forRoot({ app: appReducer }, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
