import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { StudentModule } from 'src/app/models/student/student.module';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public title = 'Students';
  public selectedStudent: StudentModule;
  public simpleText: String;
  public studentForm: FormGroup;
  public modalRef: BsModalRef;
  
  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService) {

    this.createForm();
  }

  ngOnInit(): void {
  }

  public students = [
    { id: 1, name: 'Claudio', surname: 'da Silva', phone: '99999999' },
    { id: 2, name: 'Mario', surname: ' Mariano', phone: '99555999' },
    { id: 3, name: 'Jose Aldo', surname: 'Ribeiro', phone: '99933999' },
    { id: 4, name: 'Andre', surname: 'Santos', phone: '99966699' },
    { id: 5, name: 'Christine', surname: 'Silva', phone: '999911199' },
    { id: 6, name: 'Joelma', surname: 'Pereira', phone: '99922299' }
  ];

  openModal(teacherTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(teacherTemplate);
  }


createForm(){
  this.studentForm = this.fb.group(
    {
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
    }
  );
}

studentSubmit(){
  console.log(this.studentForm.value);
}

selectStudent(student: StudentModule) {
  this.selectedStudent = student;
  this.studentForm.patchValue(student);
}

back(){
  this.selectedStudent = null;
}


}
