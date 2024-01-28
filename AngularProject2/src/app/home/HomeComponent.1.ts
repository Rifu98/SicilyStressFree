import { Component, Inject } from '@angular/core';
import { CaseService } from '../case.service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private Case: CaseService, @Inject(DOCUMENT) private document: Document) { }
  scrollTop() {
    window.scroll(0, 0);
  }
  tourRedirect() {
    this.document.location.href = '#tour'
  }
  villaRedirect() {
    this.document.location.href = '#villa'
  }
  apartmentRedirect() {
    this.document.location.href = '#apartment'
  }
  case = this.Case.case
  ville = this.Case.ville
  tours = this.Case.tours
}
