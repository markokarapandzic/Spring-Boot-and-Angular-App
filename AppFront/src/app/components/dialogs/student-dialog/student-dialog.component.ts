import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

    public flag: number;

    constructor(public snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<StudentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public studentService: StudentService) { }

    ngOnInit() {
    }

    public add(): void {
        this.data.id = -1;
        this.studentService.addStudent(this.data);
        this.snackBar.open('Uspešno dodat Student: ' + this.data.naziv, 'U redu', { duration: 2500 });
    }

    public update(): void {
        this.studentService.updateStudent(this.data);
        this.snackBar.open('Uspešno modifikovan Student: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public delete(): void {
        this.studentService.deleteStudent(this.data.id);
        this.snackBar.open('Uspešno obrisan Student: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public cancel(): void {
        this.dialogRef.close();
        this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
    }
}
