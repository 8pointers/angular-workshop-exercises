import { Component, Input, OnInit } from '@angular/core';

const operationsInProgress = {};

export function loader(options?: any) {
  return function (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const method = descriptor.value;
    descriptor.value = function () {
      const result = method.apply(this, arguments);
      let operationName = options && options.operationName;
      operationName = (typeof operationName === 'function' ? operationName.apply(undefined, arguments) : operationName) || propertyName;
      operationsInProgress[operationName] = true;
      if (result.then) {
        result.then(
          () => operationsInProgress[operationName] = false,
          () => operationsInProgress[operationName] = false
        );
      }
      return result;
    };
  };
}

@Component({
  selector: 'app-loader',
  template: '<span *ngIf="operationsInProgress[operation]"><i class="fa fa-spinner fa-spin"></i></span>'
})
export class LoaderComponent implements OnInit {
  @Input()
  operation: string;

  public operationsInProgress: any;

  constructor() {
    this.operationsInProgress = operationsInProgress;
  }

  ngOnInit() {
  }
}
