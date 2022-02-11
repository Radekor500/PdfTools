import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfExtractFormComponent } from './pdfTools/pdf-extract-form/pdf-extract-form.component';
import { PdfMergeFormComponent } from './pdfTools/pdf-merge-form/pdf-merge-form.component';
import { PdfSplitFormComponent } from './pdfTools/pdf-split-form/pdf-split-form.component';
import { HomePageComponent } from './shared/home-page/home-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "merge", component: PdfMergeFormComponent},
  {path: "select", component: PdfSplitFormComponent},
  {path: "extract", component: PdfExtractFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
