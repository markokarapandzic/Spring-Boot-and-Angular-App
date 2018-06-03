import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Student';
import { HttpClient } from '@angular/common/http';
import { StudentDialogComponent } from '../dialogs/student-dialog/student-dialog.component';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    displayedColumns = ['id', 'ime', 'prezime', 'broj_indexa', 'grupa', 'projekat'];
    exampleDatabase: StudentService;
    dataSource: MatTableDataSource<Student>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public httpClient: HttpClient, public studentService: StudentService, public dialog: MatDialog) { }

    ngOnInit() {
        this.loadData();
    }

    public loadData() {
        this.studentService.getAllStudent().subscribe(data => {

            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;

            this.dataSource.sortingDataAccessor = (data, property) => {
                switch (property) {
                    case 'id': return data[property];
                    default: return data[property].toLocaleLowerCase();
                }
            };
            this.dataSource.sort = this.sort;
        });

    }


    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    public openDialog(flag: number, id: number, ime: string, prezime: string, brojIndexa: string, grupa: number, projekat: number) {

        const dialogRef = this.dialog.open(StudentDialogComponent, {
            data: { id: id, ime: ime, prezime: prezime, brojIndexa: brojIndexa, grupa: grupa, projekat: projekat }
        });
        dialogRef.componentInstance.flag = flag;
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                this.loadData();
            }
        });
    }
}
