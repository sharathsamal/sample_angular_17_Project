import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomfilterPipe } from './pipes/customfilter.pipe';
import { CustomStructuralDirectiveDirective } from './directives/custom-structural-directive.directive';



@NgModule({
  declarations: [
    CustomfilterPipe,
    CustomStructuralDirectiveDirective
  ],
  imports: [
    CommonModule,
   
  ]
})
export class SharedModule { }
