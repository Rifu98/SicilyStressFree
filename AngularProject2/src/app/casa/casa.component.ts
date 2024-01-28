import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../case.service';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrl: './casa.component.css'
})
export class CasaComponent implements OnInit {
  constructor(private route: ActivatedRoute, private Case: CaseService) { }
  nome = this.route.snapshot.paramMap.get('id')
  villa = this.Case.ville.find(casa => casa.casa == this.nome)
  casa = this.Case.case.find(casa => casa.casa == this.nome)
  description: any
  amenities: any
  nrew: any
  rewurl: Array<string> = []
  ngOnInit(): void {
    if (this.casa == undefined) {
      if (this.villa == undefined) {
        this.description = this.Case.tours.find(tour => tour.casa == this.nome)?.description
        this.amenities = this.Case.tours.find(tour => tour.casa == this.nome)?.amenities
        this.nrew = this.Case.tours.find(tour => tour.casa == this.nome)!.nrew
      } else {
        this.amenities = this.Case.ville.find(villa => villa.casa == this.nome)?.amenities
        this.description = this.Case.ville.find(villa => villa.casa == this.nome)?.description
        this.nrew = this.Case.ville.find(villa => villa.casa == this.nome)!.nrew
      }
    } else {
      this.description = this.Case.case.find(casa => casa.casa == this.nome)?.description
      this.amenities = this.Case.case.find(casa => casa.casa == this.nome)?.amenities
      this.nrew = this.Case.case.find(casa => casa.casa == this.nome)!.nrew
    }
    for (let i = 0; i < this.nrew; i++) {
      this.rewurl.push(`background-image: url('../../../assets/img/${this.route.snapshot.paramMap.get('id')}/rew${i}.jpg')`)
    }
  }
}
