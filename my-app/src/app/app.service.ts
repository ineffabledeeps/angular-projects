import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormlyFieldConfig} from '@ngx-formly/core';

import {Observable,forkJoin} from 'rxjs'

@Injectable()
export class AppService{
    constructor(private http:HttpClient){}

    getAppData(): Observable<any> {
        return forkJoin([this.getData(),this.getFields()]);
    }    

    getData(){
        return this.http.get<{firstname:string,lastname:string}>('assets/sample-data.json');
    }

    getFields(){
        return this.http.get<FormlyFieldConfig[]>('assets/sample-inputs.json');
    }
}