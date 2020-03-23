import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[view-container]',
  exportAs: 'view-container'
})
export class ViewContainerDirective {
  constructor(public vcRef: ViewContainerRef) { }
}