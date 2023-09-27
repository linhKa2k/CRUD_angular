import { Component } from '@angular/core';
import { Result } from '../types/ketqua.entity'
import { KetquaService } from '../service/serviceKetQua/ketqua.service';


@Component({
  selector: 'app-ketqua',
  templateUrl: './ketqua.component.html',
  styleUrls: ['./ketqua.component.scss']
})
export class KetquaComponent {
  constructor(private ketquaService: KetquaService) { }

  Result: Result = {
    id: '',
    tenBoCauHoi: '',
  }

  listDataKetqua: any;

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.ketquaService.getData().subscribe((data: any) => {
      this.listDataKetqua = data;
      console.log(data,"getttttt");
      
    })
  }
}
