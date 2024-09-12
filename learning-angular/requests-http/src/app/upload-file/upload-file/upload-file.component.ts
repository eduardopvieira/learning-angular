import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent {




  onChange(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;

    const fileNames = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
    }

    document.getElementById('customFileLabel')!.innerHTML = fileNames.join(', ');
  }

}
