import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})

// adds and removes 'open' class to the element when clicked
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  // if the click is not in the element(dropdown) it should be closed
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event?.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
