import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{

  }

  //#########################           NAVBAR ANIMATION              ################

  // @HostListener('window:scroll',[])

  // onWindowScroll(){
  //   if(document.body.scrollTop> 200 || document.documentElement.scrollTop> 200){
      // $(".pad-navbar").removeClass("bg-transparent")
      // $(".navbar").removeClass("p-5");
      // $(".pad-navbar").removeClass("container");

      //logo change
      // $(".logo-black").css("display","none");
      // $(".logo-white").css("display","block");

      // $(".navbar").addClass("p-0");
      // $(".pad-navbar").css("background-color","black");
      // $(".pad-navbar").addClass("container-fluid");
    // }else{
      // $(".navbar").removeClass("p-0");
      // $(".pad-navbar").removeClass("container-fluid");

      //logo change
      // $(".logo-black").css("display","block");
      // $(".logo-white").css("display","none");

      // $(".navbar").addClass("p-5");
      // $(".pad-navbar").addClass("bg-transparent");
      // $(".pad-navbar").addClass("container");
  //   }
  // }

}
