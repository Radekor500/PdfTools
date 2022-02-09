import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PdfMergeModel } from '../models/pdfMergeModel';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  mergePdfs(pdfFiles: FormData) : Observable<any> {
    const httpOptions = { responseType: 'blob' as 'json'};
    return this.http.post(`${environment.apiUrl}/api/pdf/merge`, pdfFiles, httpOptions);
  }

  splitPdf(splitData: FormData) : Observable<any> {
    const httpOptions = {responseType: 'blob' as 'json'};
    return this.http.post(`${environment.apiUrl}/api/pdf/split`, splitData, httpOptions);
  }

}
