import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ModalComponent } from './crud/modal/modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormComponent } from './crud/reactive-form/reactive-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';

import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NavigationComponent } from './navigation/navigation.component';
import { CauhoiComponent } from './cauhoi/cauhoi.component';
import { DiemComponent } from './diem/diem.component';
import { CautraloiComponent } from './cautraloi/cautraloi.component';
import { KetquaComponent } from './ketqua/ketqua.component';
import { BailamComponent } from './bailam/bailam.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';




@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ModalComponent,
    ReactiveFormComponent,
    NavigationComponent,
    CauhoiComponent,
    DiemComponent,
    CautraloiComponent,
    KetquaComponent,
    BailamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzModalModule,
    BrowserAnimationsModule,
    NzPaginationModule ,
    NzFormModule,
    ReactiveFormsModule,
    NzAutocompleteModule,
    NzCheckboxModule,
    NzIconModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
