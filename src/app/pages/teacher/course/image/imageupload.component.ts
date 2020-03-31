import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-image-uploader',
    templateUrl: './imageupload.component.html',
    styleUrls: ['./imageupload.component.scss']
})
export class ImageUploadComponent implements OnInit {
    urls: Array<any> = [];
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (let i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
    
                    reader.onload = (event:any) => {
                        this.urls.push(event.target.result); 
                    }
                    reader.readAsDataURL(event.target.files[i]);
            }
        }
    }
    removeImage(index) {
        this.urls.splice(index, 1);
    }
    constructor() {
    }

    ngOnInit() {
    }

}
