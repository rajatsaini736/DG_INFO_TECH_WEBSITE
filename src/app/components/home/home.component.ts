import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';
import { init } from 'ityped';

declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    const name = document.getElementById('name');
    init(name, {showCursor: false, strings: ['Dynamic', 'Reliable', 'Truly Professional'], typeSpeed: 200, backSpeed: 50});
  }

  ngAfterViewInit(): void{
      $('.work-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
        ]
      });
  }

}
