import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { User } from '../../types/user.entity'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(private crudService: CrudService) { }

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<any>();
  @Output() getAssets = new EventEmitter<any>();

  listData: any;

  User: User = {
    id: '',
    tenBoCauHoi: '',
    // trangThai: false
  }

  ngOnInit(): void { this.crudService.getData().subscribe((data: User) => { this.listData = data }) }

  handleOk(): void {
    this.crudService.addItem(this.User).subscribe(() => {
      this.getAssets.emit()    
    })
    this.isVisible = false; 
    this.isVisibleChange.emit(this.isVisible);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
