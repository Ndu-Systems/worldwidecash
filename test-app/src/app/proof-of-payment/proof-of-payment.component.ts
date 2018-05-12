import { Component, OnInit } from '@angular/core';
import { DreamDetailsService } from '../dream-detail/dream-details.service';
import { UploadService } from './upload.service';
import { GetImagePath } from '../shared/config';

@Component({
  selector: 'app-proof-of-payment',
  templateUrl: './proof-of-payment.component.html',
  styleUrls: ['./proof-of-payment.component.css']
})
export class ProofOfPaymentComponent implements OnInit {
file: File;
keeper:any;
message:string;
success:string;
  constructor(private dreamDetailsService: DreamDetailsService,private uploadService:UploadService) { }

  ngOnInit() {
    this.getKeeper();
  }
getKeeper(){
  this.keeper=this.dreamDetailsService.getKeeper();
  console.log("pop", this.keeper)
  
}
filesChanged(files){
this.file = <File>files[0];
}
uplaodFile(){
  this.uploadService.uploadFile(this.file)
  .subscribe((response)=>{
    let image = GetImagePath(response);
    console.log("image",image);
  });
}
}
