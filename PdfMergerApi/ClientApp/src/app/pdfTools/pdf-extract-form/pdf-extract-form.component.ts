import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { PdfService } from 'src/app/services/pdf.service';
import { commaValidator } from './comma-validator-directive';

@Component({
  selector: 'app-pdf-extract-form',
  templateUrl: './pdf-extract-form.component.html',
  styleUrls: ['../form-shared/form-styles.scss']
})
export class PdfExtractFormComponent implements OnInit {

  extractForm: FormGroup;
  fileLink!: string;
  constructor(private fb: FormBuilder, private pdfService: PdfService) {
    this.extractForm = fb.group({
      pages: ['', [Validators.required, commaValidator(/^[0-9]+(,[0-9]+)*$/)]],
      pdf: ['', Validators.required]
    })
   }

  downloadFile() {
    window.open(this.fileLink);
  }
  onSubmit() {
    let list = this.extractForm.get('pages')?.value.split(",");
    let file = document.getElementById('file') as any;
    const formData = new FormData();
    formData.append('pdf', file.files[0]);
    list.forEach((item:any) => {
      formData.append('pages', item)
    })
    this.pdfService.extractPdf(formData).subscribe(resp => {
      const blob = new Blob([resp], {type: 'application/zip'});
      this.fileLink = window.URL.createObjectURL(blob);
    })
    this.extractForm.reset();
  }
  ngOnInit(): void {
  }

}
