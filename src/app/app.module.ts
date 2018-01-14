import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionListComponent } from './components/question-list/question-list.component';

import { DataService } from './services/data.service';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
