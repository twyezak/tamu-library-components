import { Component, Injector, Input } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-wysiwyg-component',
  templateUrl: './tl-wysiwyg.component.html',
  styleUrls: ['./tl-wysiwyg.component.scss']
})
export class TlWysiwygComponent extends TamuAbstractBaseComponent {

  @Input() initialValue = '';

  @Input() emitEvent = '';

  skin = 'oxide';

  toolbar = 'undo redo | bold italic removeformat | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | help cancel save';

  @Input() height = '500';

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
