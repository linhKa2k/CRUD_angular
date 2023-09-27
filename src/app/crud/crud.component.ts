import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { User } from '../types/user.entity'
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent { 
  constructor(private crudService: CrudService) { }

  listData: any; 

  limit = 4;

  User: User = {
    id: '',
    tenBoCauHoi: '',
  }

  isVisible = false;

  ngOnInit(): void {
     this.get() 
    }

  get() {
    this.crudService.getData().subscribe((data: any) => {
      this.listData = data;
    })
  }


  select(item: User) {
    this.User.id = item.id,
    this.User.tenBoCauHoi = item.tenBoCauHoi
  }

  handleShowModal(): void {
    this.isVisible = true;
  }

  handleAdd(): void {
    this.crudService.addItem(this.User).subscribe(() => {
      console.log(this.User,"adddddddd");
      this.get()
    })
  }
  handleDelete(id: String): void {
    this.crudService.deleteItem(id).subscribe(() => {
      this.get()
    })
  }
  handleUpdate(): void {
    this.crudService.updateItem(this.User, this.User.id).subscribe(() => {
      this.get()
    })
  }

}
