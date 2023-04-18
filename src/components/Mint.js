
import React from "react";
import { Swiper, SwiperSlide  } from 'swiper/react';
import {Navigation, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/autoplay';
import './slider.css';
const Mint = () => {
  return (
<div className="mint">
<div className="container">
    <div className="mint-wrapper">
      <div className="mint-nft-item">
      <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                modules={[Navigation, A11y]}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                breakpoints={{
                  450: {
                    slidesPerView: 1,
                  },
                  680: {
                    slidesPerView: 1,
                  },
                  1250: {
                    slidesPerView: 2,
                  },
                }}
              >

<SwiperSlide>
<div className="mint-nft-img">
          <img src="./images/nft-img.png" alt="" />
        </div>
</SwiperSlide>
<SwiperSlide>
<div className="nft-content">
        <h4>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h4>
                      <div className="card-details-list">
                        <div className="card-list-item card-nft-details ">
                          <input id="list-1" type="radio" />
                          <label for="list">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item card-nft-details">
                          <input id="list-2" type="radio" />
                          <label for="list-2">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item card-nft-details">
                          <input id="list-3" type="radio" />
                          <label for="list-3">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                      </div>
        </div>
</SwiperSlide>
             </Swiper>
     
    

<div className="slider-nav">
                                   <div className="prev">
                                   <svg width="12" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L1 7.5L8 14" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                   </div>
                                  <div className="next">
                                  <svg width="12" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 14L8 7.5L1 1" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                  </div>
                    </div>
      </div>
      <div className="mint-price-item">
        <div className="mint-count">
          <p><span>2694</span>/<span>1000</span> MINTED</p>
        </div>
        <div className="mint-price">
          <div className="mint-value">
            <p>0.25 ETH</p>
          </div>
          <div className="mini-nft-cont">
          <button>-</button>
            <p>5</p>
            <button>+</button>
          </div>
        </div>
      </div>
      <div className="mint-total-item">
        <div className="mint-total-dis">
          <h3>Lorem ipsum DOLOR Awesome!</h3>
        </div>
        <div className="mint-total-value">
        <p>Total: <span>0.25</span>ETH</p>
        </div>
        <div className="mint-btn">
        <button>MINT</button>
        </div>
      </div>
    </div>

    </div>
</div>
  )
}

export default Mint
