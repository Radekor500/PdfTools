import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfMergeFormComponent } from './pdfTools/pdf-merge-form/pdf-merge-form.component';
import { HomePageComponent } from './shared/home-page/home-page.component';

const routes: Routes = [
  {path: "merge", component: PdfMergeFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
