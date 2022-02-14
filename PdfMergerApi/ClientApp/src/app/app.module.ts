import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfMergeFormComponent } from './pdfTools/pdf-merge-form/pdf-merge-form.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PdfSplitFormComponent } from './pdfTools/pdf-split-form/pdf-split-form.component';
import { PdfExtractFormComponent } from './pdfTools/pdf-extract-form/pdf-extract-form.component';
import { GlobalErrorHandler } from './shared/handlers/global-error-handler';
import { ServerErrorInterceptor } from './shared/interceptors/server-error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PdfMergeFormComponent,
    HomePageComponent,
    NavbarComponent,
    PdfSplitFormComponent,
    PdfExtractFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: ErrorHandler, useClass:GlobalErrorHandler,},
    {provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
