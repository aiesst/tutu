import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'error-alert',
  template: `
            <div *ngIf="errors.length>0" class="alert alert-danger">
                    <p *ngFor="let error of errors">
                      {{error}}
                    </p>
                  </div>
            `
})
export class ErrorAlterComponent implements OnInit {
  @Input() errors: string[];

  constructor() {
  }

  ngOnInit() {
  }

}
