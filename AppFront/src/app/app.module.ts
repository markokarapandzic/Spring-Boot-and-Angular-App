import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatSelectModule,
  MatOptionModule,
  MatSnackBarModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatPaginatorModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SmerComponent } from './components/smer/smer.component';
import { GrupaComponent } from './components/grupa/grupa.component';
import { ProjekatComponent } from './components/projekat/projekat.component';
import { StudentComponent } from './components/student/student.component';
import { FormsModule } from '@angular/forms';
import { GrupaService } from './services/grupa.service';
import { SmerService } from './services/smer.service';
import { ProjekatService } from './services/projekat.service';
import { StudentService } from './services/student.service';
import { SmerDialogComponent } from './components/dialogs/smer-dialog/smer-dialog.component';
import { GrupaDialogComponent } from './components/dialogs/grupa-dialog/grupa-dialog.component';
import { ProjekatDialogComponent } from './components/dialogs/projekat-dialog/projekat-dialog.component';
import { StudentDialogComponent } from './components/dialogs/student-dialog/student-dialog.component';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AboutComponent } from './components/core/about/about.component';

const Routes = [
  { path: 'smer', component: SmerComponent},
  { path: 'grupa', component: GrupaComponent},
  { path: 'projekat', component: ProjekatComponent},
  { path: 'student', component: StudentComponent},
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'author', component: AuthorComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SmerComponent,
    GrupaComponent,
    ProjekatComponent,
    StudentComponent,
    SmerDialogComponent,
    GrupaDialogComponent,
    ProjekatDialogComponent,
    StudentDialogComponent,
    HomeComponent,
    AuthorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
    MatGridListModule, MatExpansionModule, MatSortModule, MatTableModule,
    MatToolbarModule, MatSelectModule, MatOptionModule,
    MatSnackBarModule, MatDialogModule, MatInputModule,
    MatDatepickerModule, MatCheckboxModule, MatNativeDateModule,
    MatPaginatorModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    HttpClientModule
  ],
  entryComponents: [SmerComponent, GrupaComponent, ProjekatComponent, StudentComponent],
  providers: [GrupaService, SmerService, ProjekatService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
