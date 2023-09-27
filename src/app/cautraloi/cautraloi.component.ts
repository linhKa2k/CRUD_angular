import { Component } from '@angular/core';
import { CautraloiService } from '../service/serviceCauTraLoi/cautraloi.service';
import { Answer } from '../types/cautraloi.entity'
@Component({
  selector: 'app-cautraloi',
  templateUrl: './cautraloi.component.html',
  styleUrls: ['./cautraloi.component.scss']
})
export class CautraloiComponent {
  constructor(private cautraloiService: CautraloiService) { }

  Answer: Answer = {
    id: '',
    tenCauTraLoi: '',
  } 
 
  listDataCauTraLoi: any;

  limit = 4;
  ngOnInit(): void {
    this.get()
  }

  get() {
    this.cautraloiService.getData().subscribe((data: any) => {
      this.listDataCauTraLoi = data;
    })
  }

  select(item: Answer) {
    this.Answer.id = item.id,
    this.Answer.tenCauTraLoi = item.tenCauTraLoi
  }
  handleAdd(): void {
    this.cautraloiService.addItem(this.Answer).subscribe(() => {
      this.get()
    })
  }
  handleDelete(id: String): void {
    this.cautraloiService.deleteItem(id).subscribe(() => {
      this.get()
    })
  }
  handleUpdate(): void {
    this.cautraloiService.updateItem(this.Answer, this.Answer.id).subscribe(() => {
      this.get()
    })
  }
}
