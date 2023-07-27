import { Component,OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core/public_api';
import { AppService } from './app.service';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  private destroy$: Subject<any> = new Subject<any>();
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model : any;
  fields: FormlyFieldConfig[]=[];
  
  constructor(private appService: AppService){
    this.appService
    .getAppData()
    .pipe(takeUntil(this.destroy$))
    .subscribe(([model,fields])=>{
      this.fields = fields;
      this.model = model;
      console.log(model);
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  
  onSubmit() {
    if(this.form.valid){
      alert(JSON.stringify(this.model))
    }
  }
}
