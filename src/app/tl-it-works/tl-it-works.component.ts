import { Component, Injector, Input, ViewEncapsulation } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-it-works-element',
  templateUrl: './tl-it-works.component.html',
  styleUrls: ['./tl-it-works.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TamuItWorksComponent extends TamuAbstractBaseComponent {

  /** The text value to be displayed in the page title. */
  title = 'tl-it-works-component';

  /** The text value to be displayed for text. */
  @Input() text = '';

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
