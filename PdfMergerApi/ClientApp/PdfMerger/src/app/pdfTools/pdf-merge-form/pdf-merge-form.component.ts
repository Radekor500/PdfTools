import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-pdf-merge-form',
  templateUrl: './pdf-merge-form.component.html',
  styleUrls: ['./pdf-merge-form.component.scss']
})
export class PdfMergeFormComponent implements OnInit {

  mergeForm: FormGroup
  constructor(private fb: FormBuilder, private pdfService: PdfService) {
    this.mergeForm = new FormGroup({
      endFileName: new FormControl(null),
      //pdfs: fb.array(File[])
    })
   }

  pushPdf(pdf: any) {
    const newPdf = new FormControl(pdf, Validators.required);
    (<FormArray>this.mergeForm.get('pdfs')).push(newPdf)
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

  // onSubmit(data: any) {
  //   console.log(data);
  //   this.pdfService.mergePdfs(data).subscribe(resp => {
  //     console.log(resp);
  //   })
  // }

  onSubmit() {
    const formData = new FormData();
    let files = document.getElementById('files') as any;
    files = files.files;
    console.log(files)
    Object.keys(this.mergeForm.controls).forEach(key => {
      console.log(key);
      formData.append(key, this.mergeForm.value[key]);
    });
    // formData.append('pdfs', this.mergeForm.get('pdfs')?.value);
    // files.files.forEach((pdf: any) => {
    //   formData.append('pdfs', pdf)
    // })
    Object.keys(files).forEach(key => {
      formData.append('pdfs', files[key]);
    })
    //formData.append('pdfs', files.files.FileList)
    formData.forEach(item => console.log(item))
    this.pdfService.mergePdfs(formData).subscribe(resp => {
          const blob = new Blob([resp], {type: 'application/pdf'});
          const url = window.URL.createObjectURL(blob);
          window.open(url);

        })
  }
  ngOnInit(): void {
  }

}
