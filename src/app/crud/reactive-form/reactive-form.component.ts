import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { User } from '../../types/user.entity'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  constructor(private crudService: CrudService, private fb: FormBuilder) { }

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<any>();
  @Output() getAssets = new EventEmitter<any>();

  listData: any;

  UserForm: FormGroup;

  ngOnInit(): void {
    this.UserForm = this.fb.group({
      tenBoCauHoi: ''
    });
  }

  submit() {
    console.log(this.UserForm.value, "Submit");
  }

  onSubmit(): void {
    console.log(this.UserForm, "submit");
  }

  handleOk(): void {
    this.crudService.addItem(this.UserForm.value).subscribe(() => {
      this.getAssets.emit()
    })
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
