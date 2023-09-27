import { Component } from '@angular/core';
import { CauhoiService } from '../service/serviceCauHoi/cauhoi.service';
import { Question } from '../types/cauhoi.entity'

@Component({ 
  selector: 'app-cauhoi',  
  templateUrl: './cauhoi.component.html',
  styleUrls: ['./cauhoi.component.scss']
})
export class CauhoiComponent {
  constructor(private cauhoiService: CauhoiService) { }

  Question: Question = {
    id: '', 
    tenCauHoi: '', 
  }
  listDataCauHoi: any;

  ngOnInit(): void {
    this.get()
  }
 
  get() {
    this.cauhoiService.getData().subscribe((data: any) => {
      this.listDataCauHoi = data;
    })
  }

  select(item: Question) {
    this.Question.id = item.id,
    this.Question.tenCauHoi = item.tenCauHoi
  }
  handleAdd(): void {
    this.cauhoiService.addItem(this.Question).subscribe(() => {
      this.get()
    })
  }
  handleDelete(id: String): void {
    this.cauhoiService.deleteItem(id).subscribe(() => {
      this.get()
    })
  }
  handleUpdate(): void {
    this.cauhoiService.updateItem(this.Question, this.Question.id).subscribe(() => {
      this.get()
    })
  }
}
