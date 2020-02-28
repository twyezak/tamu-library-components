import { Component, Input } from '@angular/core';
/**
 * Intended to appear at the top of document and provides for branding, links and page title.
 */
@Component({
  selector: 'tl-header-element',
  templateUrl: './tl-header.component.html',
  styleUrls: ['./tl-header.component.scss']
})
export class TamuHeaderComponent {

  /** This is a URL pointing to the location of the logo. */
  logoSrc = 'https://php.library.tamu.edu/searcher/_application/resources/css/tamu-logo-with-bar.png';

  /** The text value to be displayed beside the TAMU logo. */
  logoText = ' Texas A&M University Libraries';

  /** This defines the TAMU css variable: --tl-primary. */
  primaryColor = 'var(--tl-primary)';

  /** This defines the css variable: --tl-secondary. */
  secondaryColor = 'var(--tl-secondary)';

  /** This defines the TAMU css variable: grayColor. */
  grayColor = '#ededed';

  /** This defines the TAMU css variable: topNavPrimaryColor. */
  topNavPrimaryColor = '#FFC222';

  /** This defines the TAMU css variable: bottomNavPrimaryColor. */
  bottomNavPrimaryColor = '#4D4D4D';

  /** This defines the TAMU page  header title and is displayed as page title. */
  @Input() pageTitle = 'TL Header Component';

}
