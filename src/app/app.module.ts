import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { ExamsComponent } from './exams';
import { CommonModule } from '@angular/common';
import { NgbdSortableHeader } from './exams/sortable.directive';
import { NgbdTableComplete } from './exams/table-complete';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
        CommonModule,
        NgbModule
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ExamsComponent,
        RegisterComponent,
        AlertComponent,
        NgbdTableComplete, 
        NgbdSortableHeader
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent, NgbdTableComplete]
})
export class AppModule { };  

