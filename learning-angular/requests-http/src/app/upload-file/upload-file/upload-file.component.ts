import { Component } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent {

  files: Set<File> = new Set();
  progress: number = 0;

  constructor(private service: UploadFileService) { }

  ngOnInit() {

  }

  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;

    const fileNames = [];


    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i])
    }

    document.getElementById('customFileLabel')!.innerHTML = fileNames.join(', ');

  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, '/api/upload')
        .subscribe((event: HttpEvent<Object>) => {
          // HttpEventType
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log('Upload Concluído');
          } else if (event.type === HttpEventType.UploadProgress) {
            if (event.total) {
              const percentDone = Math.round((event.loaded * 100) / event.total);
              this.progress = percentDone;
              console.log('Progresso', percentDone);
            }
          }
        });
    }
  }

}
