import { NgModule } from '@angular/core';
import { ViewContainerDirective } from './directives/view-container.directive';

@NgModule({
  declarations: [ViewContainerDirective],
  exports: [ViewContainerDirective]
})
export class CoreModule { }