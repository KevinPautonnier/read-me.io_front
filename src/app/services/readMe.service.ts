import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ReadMe {

  private url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  getVersion() {
    const request = `${this.url}/version`;
    return this.http.get(request);
  }

  getTemplates() {
    const request = `${this.url}/templates`;
    return this.http.get(request)
      .map((res: any) => res.results);
  }

  getExtention() {
    const request = `${this.url}/extention`;
    return this.http.get(request)
      .map((res: any) => res.results);
  }

  getReadme(template, extension) {

    var request = this.url + "/generate?";

    if(template != undefined) {
      request += "template =" + template + "&";
    }
    
    if(extension != undefined) {
      request += "extension =" + extension;
    }
    else {
      request = request.substring(0, request.length-1);
    }
    
    
    return this.http.get(request)
      .map((res:any) => res.result )
  }
}
