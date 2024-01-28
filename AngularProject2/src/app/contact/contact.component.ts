import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  waRedirect() {
    this.document.location.href = 'https://wa.me/+393931964466'
  }
  mailRedirect() {
    window.location.href = "mailto:LydiaSchembri@gmail.com<";
  }
  phoneRedirect() {
    window.location.href = "tel:+393931964466";
  }
}
