import { Component, OnInit, Inject } from '@angular/core';
import { SmerService } from '../../../services/smer.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-smer-dialog',
    templateUrl: './smer-dialog.component.html',
    styleUrls: ['./smer-dialog.component.css']
})
export class SmerDialogComponent implements OnInit {

    public flag: number;

    constructor(public snackBar: MatSnackBar,
        public dialogRef: MatDialogRef<SmerDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public smerService: SmerService) { }

    ngOnInit() {
    }

    public add(): void {
        this.data.id = -1;
        this.smerService.addSmer(this.data);
        this.snackBar.open('Uspešno dodat Smer: ' + this.data.naziv, 'U redu', { duration: 2500 });
    }

    public update(): void {
        this.smerService.updateSmer(this.data);
        this.snackBar.open('Uspešno modifikovan Smer: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public delete(): void {
        this.smerService.deleteSmer(this.data.id);
        this.snackBar.open('Uspešno obrisan Smer: ' + this.data.id, 'U redu', { duration: 2500 });
    }

    public cancel(): void {
        this.dialogRef.close();
        this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
    }
}
