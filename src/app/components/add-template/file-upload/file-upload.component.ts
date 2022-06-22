import { Component, OnInit } from '@angular/core';

export var content : any = null;
export var fileExt : boolean = false;

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {

  files !: FileList; // Variable to store file
  isExt: boolean = false;
  htmlExists: boolean = false;

  // Inject service 
  constructor() { }

  ngOnInit(): void {
    content = null;

  }

  // On file Select
  onChange(event: Event) {
    this.files = (event.target as HTMLInputElement).files!;
    let file = this.files[0];
    if (this.checkExt(file)) {
      this.isExt = true;
      console.table(file);
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        content = (fileReader.result as string)!;
        console.log(fileReader.result);
      }
      fileReader.readAsText(file);
    }
    else {
      this.isExt = false
    }
  }

  checkExt(file: File): boolean {
      return fileExt = (file.name.split('.').pop() === 'txt' || file.name.split('.').pop() === 'html');
  }

}