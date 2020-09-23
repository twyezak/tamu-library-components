import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TlMegaMenuComponent } from './tl-mega-menu.component';
import { ComponentRef, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

declare const viewport;

describe('MegaMenuComponent', () => {
  let component: TlMegaMenuComponent;
  let fixture: ComponentFixture<TlMegaMenuComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => TestBed.configureTestingModule({
    imports: [BrowserAnimationsModule],
    declarations: [ TlMegaMenuComponent ]
  })
    .compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(TlMegaMenuComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it("should have as default menuTitle 'Mega Menu'", () => {
    expect(component.menuTitle)
      .toEqual('Mega Menu');
  });

  it('should have customized text value for view All button', () => {
    expect(component.viewAllButtonDisplayText)
      .toEqual('View All Mega Menu');
    component.viewAllButtonText = 'Customized text value';
    fixture.detectChanges();
    expect(component.viewAllButtonDisplayText)
      .toEqual('Customized text value');
  });

  it('toggleMobileMenuOpen should toggle active class on click', () => {

    const tlMegaMenu = (fixture.elementRef.nativeElement as HTMLElement);
    const wvrDropDownElement = tlMegaMenu.querySelector('wvr-dropdown-element');
    const wvrDropdownBtn = wvrDropDownElement.querySelectorAll('wvr-dropdown-btn')[0];

    expect(wvrDropDownElement.classList.contains('active'))
    .toBeFalse();

    wvrDropdownBtn.dispatchEvent(new MouseEvent('click'));

    expect(wvrDropDownElement.classList.contains('active'))
      .toBeTrue();

    wvrDropdownBtn.dispatchEvent(new MouseEvent('click'));

    expect(wvrDropDownElement.classList.contains('active'))
    .toBeFalse();

  });

  it('toggleMobileMenuSectionOpen should toggle active class on click', done => {

    component.outOfHeader = true;

    viewport.set(320);

    setTimeout(() => {
      const tlMegaMenu = (fixture.elementRef.nativeElement as HTMLElement);
      const megaMenuSection = tlMegaMenu.shadowRoot.querySelector('tl-mega-menu-section');
      const megaMenuSectionTitle = tlMegaMenu.querySelector('.section-title');

      expect(megaMenuSection.classList.contains('active'))
      .toBeFalse();

      megaMenuSectionTitle.dispatchEvent(new MouseEvent('click'));

      expect(megaMenuSection.classList.contains('active'))
        .toBeTrue();

      megaMenuSectionTitle.dispatchEvent(new MouseEvent('click'));

      expect(megaMenuSection.classList.contains('active'))
      .toBeFalse();
      done();
    }, 1000);

  });

  // it('should highlight selected components when clicked', () => {
  //   expect(component.isMobileLayout)
  //     .toBeFalse();
  //   const bottomNav = debugElement.query(By.css('[bottom-nav]'));
  //   console.log('\n\n\n bottomNav = ', bottomNav);

  // });

  // const compElem = (fixture.elementRef.nativeElement as HTMLElement);
  //   const wvrDropdownBtn = compElem.querySelector('[ngbDropdownAnchor]');
  //   const wvrDropDownElement = wvrDropdownBtn.closest('wvr-dropdown-element');

  //   wvrDropdownBtn.dispatchEvent(new MouseEvent('click'));
  //   setTimeout(() => {
  //     expect(wvrDropDownElement.classList.contains('active'))
  //       .toBeTrue();
  //     done();
  //   }, 251);
  // it('should activate Mega menu section when clicked', done => {

  //   const tlMegaMenu = (fixture.elementRef.nativeElement as HTMLElement);

  //   const wvrDropdownBtn = tlMegaMenu.querySelector('wvr-dropdown-btn');
  //   const wvrDropDownElement = wvrDropdownBtn.closest('wvr-dropdown-element');
  //   const clickEvent = new MouseEvent('click', {
  //     relatedTarget: wvrDropdownBtn
  //   });

  //   tlMegaMenu.dispatchEvent(clickEvent);
    // console.log('\n\n wvrDropdownBtn classList = ', wvrDropdownBtn.classList, '\n---\n\n');
    // console.log('\n\n wvrDropDownElement = ', wvrDropDownElement, '\n\n\n');
    // setTimeout(() => {
    //   expect(wvrDropDownElement.classList.contains('active'))
    //     .toBeTrue();
    //   done();
    // }, 251);
  // });
// });

});
