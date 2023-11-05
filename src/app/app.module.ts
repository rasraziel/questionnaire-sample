import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to the imports array
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
