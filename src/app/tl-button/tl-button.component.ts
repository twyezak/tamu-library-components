import { Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-button-element',
  templateUrl: './tl-button.component.html',
  styleUrls: ['./tl-button.component.scss']
})
export class TlButtonComponent extends TamuAbstractBaseComponent {

  /** Used to override the button class. */
  @Input() btnClass;

  /** Used to define the size for button component.  */
  @Input() btnSize = '';

  /** Used to define the type of a button.  */
  @Input() wvrBtnType = 'button';

  /** Allows for the button component to be an anchor tag component if hrefUrl property present. */
  @Input() href;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
