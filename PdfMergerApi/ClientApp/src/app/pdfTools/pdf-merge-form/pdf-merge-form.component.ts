import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-pdf-merge-form',
  templateUrl: './pdf-merge-form.component.html',
  styleUrls: ['../form-shared/form-styles.scss']
})
export class PdfMergeFormComponent implements OnInit {

  mergeForm: FormGroup
  constructor(private fb: FormBuilder, private pdfService: PdfService) {
    this.mergeForm = fb.group({
      endFileName: [''],
      pdfs: ['', Validators.required]
    });
   }

  onSubmit() {
    if (this.mergeForm.valid) {
      const formData = new FormData();
      let files = document.getElementById('files') as any;
      files = files.files;
      console.log(files)
      Object.keys(this.mergeForm.controls).forEach(key => {
        console.log(key);
        formData.append(key, this.mergeForm.value[key]);
      });
      Object.keys(files).forEach(key => {
        formData.append('pdfs', files[key]);
      })
      formData.forEach(item => console.log(item))
      this.pdfService.mergePdfs(formData).subscribe(resp => {
            const blob = new Blob([resp], {type: 'application/pdf'});
            const url = window.URL.createObjectURL(blob);
            window.open(url);
            this.mergeForm.reset();
          })
      }
    
  }
  ngOnInit(): void {
  }

}
