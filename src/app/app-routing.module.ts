import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ModalComponent } from './crud/modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CauhoiComponent } from './cauhoi/cauhoi.component';
import { CautraloiComponent } from './cautraloi/cautraloi.component';
import { DiemComponent } from './diem/diem.component';
import { KetquaComponent } from './ketqua/ketqua.component';
import { BailamComponent } from './bailam/bailam.component';


const routes: Routes = [
  {
    path: 'curd',
    component: CrudComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  {
    path: 'nav',
    component: NavigationComponent
  },
  {
    path: 'cauHoi',
    component: CauhoiComponent
  },
  {
    path: 'cauTraLoi',
    component: CautraloiComponent
  },
  {
    path: 'diem',
    component: DiemComponent
  },{
    path: 'ketQua',
    component: KetquaComponent
  },{
    path: 'baiLam',
    component: BailamComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
