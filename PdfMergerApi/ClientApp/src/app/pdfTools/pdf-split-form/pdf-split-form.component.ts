import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-pdf-split-form',
  templateUrl: './pdf-split-form.component.html',
  styleUrls: ['../form-shared/form-styles.scss']
})
export class PdfSplitFormComponent implements OnInit {

  splitForm: FormGroup
  constructor(private fb: FormBuilder, private pdfService: PdfService) {
    this.splitForm = fb.group({
      rangeFrom: ['', Validators.required],
      rangeTo: ['', Validators.required],
      ranges: fb.array([], Validators.minLength(1)),
      pdf: ['', Validators.required],
    })
   }

   public get ranges() {
     return this.splitForm.get("ranges")?.value
   }

   addRange(start: string, end: string) {
     if (start && end) {
      this.splitForm.get('ranges')?.value.push({
        splitStart: start,
        splitEnd: end
      })
      this.splitForm.patchValue
     }
     
   }
   onSubmit(event: string) {
     if (event === "main" && this.splitForm.valid) {
       let file = document.getElementById('file') as any;
       const formData = new FormData();
        formData.append('pdf', file.files[0]);
        formData.append("ranges", JSON.stringify(this.splitForm.get('ranges')?.value))
        this.pdfService.splitPdf(formData).subscribe(resp => {
          const blob = new Blob([resp], {type: 'application/pdf'});
          const url = window.URL.createObjectURL(blob);
          window.open(url);
          this.splitForm.reset()
        })
     }
   }
  ngOnInit(): void {
  }

}
