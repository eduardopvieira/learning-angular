import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }


  upload(files: Set<File>, url: string) {

    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name))

    return this.http.post(url, formData, {
      observe: 'events',
      reportProgress: true
    })

  }

  download(url: string) {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }

  handleFile(res: any, fileName: string) {
    //suporte ao chrome
    const file = new Blob([res], {
      type: res.type
    });

    const blob = window.URL.createObjectURL(file);

    const link = document.createElement('a');
    link.href = blob;
    link.download = fileName

    link.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }))


    //firefox
    setTimeout(() => {
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  };
}
