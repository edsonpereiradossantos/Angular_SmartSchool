import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TeacherModule } from 'src/app/models/teacher/teacher.module';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public title = 'Teachers';
  public selectedTeacher: TeacherModule;
  public teacherForm: FormGroup;
  public modalRef: BsModalRef;

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService) {

    this.createForm();
  }

  ngOnInit(): void {
  }

  public teachers = [
    { id: 1, name: 'Teacher Maria', subject: 'Math' },
    { id: 2, name: 'Teacher João', subject: 'History' },
    { id: 3, name: 'Teacher José', subject: 'English' }
  ];

  openModal(studentTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(studentTemplate);
  }

  createForm() {
    this.teacherForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }

  teacherSubmit() {
    console.log(this.teacherForm.value);
  }

  selectTeacher(teacher: TeacherModule) {
    this.selectedTeacher = teacher;
    this.teacherForm.patchValue(teacher);
  }

  back() {
    this.selectedTeacher = null;
  }


}
