import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pdf-merge-form',
  templateUrl: './pdf-merge-form.component.html',
  styleUrls: ['./pdf-merge-form.component.scss']
})
export class PdfMergeFormComponent implements OnInit {

  mergeForm: FormGroup
  constructor(fb: FormBuilder) {
    this.mergeForm = new FormGroup({
      fileName: new FormControl(null),
      pdfFiles: fb.array([])
    })
   }

  pushPdf(pdf: any) {
    const newPdf = new FormControl(pdf, Validators.required);
    (<FormArray>this.mergeForm.get('pdfFiles')).push(newPdf)
  }

  onFileUpload(event: any) {
    // this.urls = [];
    let selectedFiles = event.target.files;
    if (selectedFiles) {
      for (let file of selectedFiles) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          // this.urls.push(e.target.result);
          this.pushPdf(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit() {
    console.log(this.mergeForm.value);
  }
  ngOnInit(): void {
  }

}
