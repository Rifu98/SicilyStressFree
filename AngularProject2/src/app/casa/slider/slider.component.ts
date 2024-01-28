import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseService } from '../../case.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
  constructor(private route: ActivatedRoute, private Case: CaseService) { }

  index = 0
  imgurl = `../../../assets/img/${this.route.snapshot.paramMap.get('id')}/0.jpg`
  nome = this.route.snapshot.paramMap.get('id')
  casa = this.Case.case.find(casa => casa.casa == this.nome)
  villa = this.Case.ville.find(casa => casa.casa == this.nome)
  maxindex: any
  transition = {
    opacity: '1',
    right: '0px'
  }
  prewnumb = Math.floor(window.innerWidth * 7 /700)
  i = 0
  imax = 60
  prewurl = [this.index]
  ngOnInit(): void {
    if (this.casa == undefined) {
      if (this.villa == undefined) {
        this.maxindex = this.Case.tours.find(tour => tour.casa == this.nome)?.nphoto
      } else {
        this.maxindex = this.Case.ville.find(villa => villa.casa == this.nome)?.nphoto
      }
    } else {
      this.maxindex = this.Case.case.find(casa => casa.casa == this.nome)?.nphoto
    }

    this.prewurl = [this.index]
    for (var j = 1; j <= Math.floor(this.prewnumb / 2); j++) {
      if (this.index + j > this.maxindex) {
        this.prewurl.push(j)
      } else {
        this.prewurl.push(this.index+j)
      }
      if (this.index - j < 0) {
        this.prewurl.unshift(this.maxindex +this.index-j+1)
      } else {
        this.prewurl.unshift(this.index-j)
      }
    }
  }

  goBack() {
    var i = this.imax
    var outtran = setInterval(() => {
      this.transition.opacity = `${i / this.imax}`
      this.transition.right = `${-this.imax + i}px`
      i--
      if (i < 0) {
        clearInterval(outtran)
        if (this.index == 0) {
          this.index = this.maxindex!
        } else {
          this.index--
        }
        this.prewurl = [this.index]
        for (var j = 1; j <= Math.floor(this.prewnumb / 2); j++) {
          if (this.index + j > this.maxindex) {
            this.prewurl.push(j)
          } else {
            this.prewurl.push(this.index + j)
          }
          if (this.index - j < 0) {
            this.prewurl.unshift(this.maxindex + this.index - j + 1)
          } else {
            this.prewurl.unshift(this.index - j)
          }
        }
        this.imgurl = `../../../assets/img/${this.route.snapshot.paramMap.get('id')}/${this.index}.jpg`
        var intran = setInterval(() => {
          this.transition.opacity = `${i / this.imax}`
          this.transition.right = `${this.imax - i}px`
          i++
          if (i > this.imax) {
            clearInterval(intran)
          }
        }, 1)
      }
    }, 1)
  }

  goNext() {
    var i = this.imax
    var outtran = setInterval(() => {
      this.transition.opacity = `${i / this.imax}`
      this.transition.right = `${this.imax - i}px`
      i--
      if (i < 0) {
        clearInterval(outtran)
        if (this.index == this.maxindex!) {
          this.index = 0
        } else {
          this.index++
        }
        this.prewurl = [this.index]
        for (var j = 1; j <= Math.floor(this.prewnumb / 2); j++) {
          if (this.index + j > this.maxindex) {
            this.prewurl.push(j)
          } else {
            this.prewurl.push(this.index + j)
          }
          if (this.index - j < 0) {
            this.prewurl.unshift(this.maxindex +this.index - j + 1)
          } else {
            this.prewurl.unshift(this.index - j)
          }
        }
        this.imgurl = `../../../assets/img/${this.route.snapshot.paramMap.get('id')}/${this.index}.jpg`
        var intran = setInterval(() => {
          this.transition.opacity = `${i / this.imax}`
          this.transition.right = `${-this.imax + i}px`
          i++
          if (i > this.imax) {
            clearInterval(intran)
          }
        }, 1)
      }
    }, 1)
  }
  goIndex(z: number) {
    var i = this.imax
    var outtran = setInterval(() => {
      this.transition.opacity = `${i / this.imax}`
      this.transition.right = `${this.imax - i}px`
      i--
      if (i < 0) {
        clearInterval(outtran)
        this.index = z
        this.prewurl = [this.index]
        for (var j = 1; j <= Math.floor(this.prewnumb / 2); j++) {
          if (this.index + j > this.maxindex) {
            this.prewurl.push(j)
          } else {
            this.prewurl.push(this.index + j)
          }
          if (this.index - j < 0) {
            this.prewurl.unshift(this.maxindex + this.index - j + 1)
          } else {
            this.prewurl.unshift(this.index - j)
          }
        }
        this.imgurl = `../../../assets/img/${this.route.snapshot.paramMap.get('id')}/${this.index}.jpg`
        var intran = setInterval(() => {
          this.transition.opacity = `${i / this.imax}`
          this.transition.right = `${-this.imax + i}px`
          i++
          if (i > this.imax) {
            clearInterval(intran)
          }
        }, 1)
      }
    }, 1)
  }

  close() {
    document.querySelector('.fullscreenimg')!.classList.add('hidden')
    document.querySelector('.fullscreenimg')!.classList.remove('showed')
  }
  fullscreen(imgurl: string) {
    document.querySelector('.fullscreenimg')!.classList.remove('hidden')
    document.querySelector('.fullscreenimg')!.classList.add('showed')
  }
}
