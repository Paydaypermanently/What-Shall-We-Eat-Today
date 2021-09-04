import React, { Component } from 'react';
import Header2 from '/home/ubuntu/ict/project/src/components/header2.js'
import Main_section from '/home/ubuntu/ict/project/src/components/Main_section.js'
import Nav from '/home/ubuntu/ict/project/src/components/nav.js'
import Slider from '/home/ubuntu/ict/project/src/components/Slider.js'
import { SliderData } from '/home/ubuntu/ict/project/src/components/SliderData'
import $ from "jquery";

class Home2 extends Component {
  componentDidMount() {
    $(function(){
      var $header = $('header'); //헤더를 변수에 넣기
      var $page = $('.page-start'); //색상이 변할 부분
      var $window = $(window);
      var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
      
      $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        pageOffsetTop = $page.offset().top;
      });
      
      $window.on('scroll', function(){ //스크롤시
        var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
        $header.toggleClass('down', scrolled); //클래스 토글
      });
    });

    //  비디오 자동 재생
    document.getElementById('vid').play();
  }

  render() {
      return (
          <div>
              <div className="index2">
              <Header2 />
              </div>

              <div className="index1">
                <div class="header_vedio_box">
                  <video id="vid" muted autoplay loop>
                    <source src="https://bit.ly/3kYMF9A" type="video/mp4"></source>
                  </video>
                  <div class="header_vedio_box_text">
                    <p></p>
                  </div>
                </div>
              </div>
              
              <section class="page-start">
              </section>
              
              <Main_section />
              <Slider slides={SliderData}/>
          

              <Nav />

              

          </div>
      );
  }
}

export default Home2;