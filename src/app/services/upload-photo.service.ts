import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
@Injectable({
  providedIn: 'root',
})
export class UploadPhotoService {
  constructor() {}

  uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: 'AKIAUJAOIAXT4LC3YTAO',
      secretAccessKey: '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',
      region: 'us-east-2',
    });
    const params = {
      Bucket: 'projectendgame',
      Key: '1',
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
    };
    bucket.upload(params, (err, data): boolean => {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
    //for upload progress
    /*bucket.upload(params).on('httpUploadProgress', function (evt) {
          console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });*/
  }
}
