import React from "react";

// import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide  } from 'swiper/react';
import {Navigation ,A11y} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/autoplay';
import './slider.css';
function Home() {
  // const swiper = useSwiper();
 const [btnActive, setBtnActive]=useState();

  return (
    <React.Fragment>
      {/*------------- Intro Section  ----------------*/}
  <section className="intro">
    <div className="container">
      <div className="intro-wrapper">
        <h1 className="hero-title">Our Mission: Create an online <span><img src="./images/intro-1.svg" alt="" className="intro-img-1" /></span> social club for Discovering,  <span><img src="./images/intro-img-2.svg" alt=""  className="intro-img-2"/> </span>ShowcasinG, & investing iN NFTs.</h1>
      </div>
    </div>
  </section>

{/* ================ ROADMAP ========== */}

<section className="roadmap cpb-6">
     <div className="roadmap-wrapper">
<div className="roadmap-header">
      <div className="roadmap-title">
          <img src="./images/hand.svg" alt="" />
          <h1>Peep the Roadmap</h1>
        </div>
      <div className="roadmap-description">
          <p>Our mission is not Simple but lorem ipsum dolor incident ut labore. </p>
      </div>
</div>
<div className="roadmap-cards cpt-7">
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
                  700: {
                    slidesPerView: 2,
                  },
                  1240: {
                    slidesPerView: 3,
                  },
                  1500: {
                    slidesPerView: 4,
                  },
                }}
              >
                      <SwiperSlide>
                    <div className={
                btnActive === 1
                  ? "card-item active"
                  : "card-item"
              }>
                      <div className="card-wrapper">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 1) {
                            setBtnActive();
                          } else {
                            setBtnActive(1);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#222222" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#222222" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#222222" stroke-width="2.478"/>
</svg></button>                    
                      </div>
                      <h3>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h3>
                      <img src="./images/card-img.svg" alt="" />
                      </div>

                      <div className="card-details">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 1) {
                            setBtnActive();
                          } else {
                            setBtnActive(1);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#fff" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#fff" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#fff" stroke-width="2.478"/>
</svg></button>                    
                      </div>    
                      <h4>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h4>
                      <div className="card-details-list">
                        <div className="card-list-item">
                          <input id="list-1" type="radio" />
                          <label for="list">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-2" type="radio" />
                          <label for="list-2">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-3" type="radio" />
                          <label for="list-3">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                      </div>
                      </div>
                    </div>
                    </SwiperSlide>       
                      <SwiperSlide>
                    <div className={
                btnActive === 2
                  ? "card-item active"
                  : "card-item"
              }>
                      <div className="card-wrapper">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 2) {
                            setBtnActive();
                          } else {
                            setBtnActive(2);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#222222" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#222222" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#222222" stroke-width="2.478"/>
</svg></button>                    
                      </div>
                      <h3>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h3>
                      <img src="./images/card-img.svg" alt="" />
                      </div>

                      <div className="card-details">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 2) {
                            setBtnActive();
                          } else {
                            setBtnActive(2);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#fff" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#fff" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#fff" stroke-width="2.478"/>
</svg></button>                    
                      </div>    
                      <h4>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h4>
                      <div className="card-details-list">
                        <div className="card-list-item">
                          <input id="list-1" type="radio" />
                          <label for="list">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-2" type="radio" />
                          <label for="list-2">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-3" type="radio" />
                          <label for="list-3">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                      </div>
                      </div>
                    </div>
                    </SwiperSlide>       
                      <SwiperSlide>
                    <div className={
                btnActive === 3
                  ? "card-item active"
                  : "card-item"
              }>
                      <div className="card-wrapper">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 3) {
                            setBtnActive();
                          } else {
                            setBtnActive(3);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#222222" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#222222" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#222222" stroke-width="2.478"/>
</svg></button>                    
                      </div>
                      <h3>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h3>
                      <img src="./images/card-img.svg" alt="" />
                      </div>

                      <div className="card-details">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 3) {
                            setBtnActive();
                          } else {
                            setBtnActive(3);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#fff" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#fff" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#fff" stroke-width="2.478"/>
</svg></button>                    
                      </div>    
                      <h4>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h4>
                      <div className="card-details-list">
                        <div className="card-list-item">
                          <input id="list-1" type="radio" />
                          <label for="list">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-2" type="radio" />
                          <label for="list-2">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-3" type="radio" />
                          <label for="list-3">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                      </div>
                      </div>
                    </div>
                    </SwiperSlide>       
                      <SwiperSlide>
                    <div className={
                btnActive === 4
                  ? "card-item active"
                  : "card-item"
              }>
                      <div className="card-wrapper">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 4) {
                            setBtnActive();
                          } else {
                            setBtnActive(4);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#222222" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#222222" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#222222" stroke-width="2.478"/>
</svg></button>                    
                      </div>
                      <h3>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h3>
                      <img src="./images/card-img.svg" alt="" />
                      </div>

                      <div className="card-details">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 1) {
                            setBtnActive();
                          } else {
                            setBtnActive(1);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#fff" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#fff" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#fff" stroke-width="2.478"/>
</svg></button>                    
                      </div>    
                      <h4>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h4>
                      <div className="card-details-list">
                        <div className="card-list-item">
                          <input id="list-1" type="radio" />
                          <label for="list">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-2" type="radio" />
                          <label for="list-2">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-3" type="radio" />
                          <label for="list-3">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                      </div>
                      </div>
                    </div>
                    </SwiperSlide>       
                      <SwiperSlide>
                    <div className={
                btnActive === 5
                  ? "card-item active"
                  : "card-item"
              }>
                      <div className="card-wrapper">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 5) {
                            setBtnActive();
                          } else {
                            setBtnActive(5);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#222222" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#222222" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#222222" stroke-width="2.478"/>
</svg></button>                    
                      </div>
                      <h3>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h3>
                      <img src="./images/card-img.svg" alt="" />
                      </div>

                      <div className="card-details">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 5) {
                            setBtnActive();
                          } else {
                            setBtnActive(5);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#fff" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#fff" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#fff" stroke-width="2.478"/>
</svg></button>                    
                      </div>    
                      <h4>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h4>
                      <div className="card-details-list">
                        <div className="card-list-item">
                          <input id="list-1" type="radio" />
                          <label for="list">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-2" type="radio" />
                          <label for="list-2">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-3" type="radio" />
                          <label for="list-3">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                      </div>
                      </div>
                    </div>
                    </SwiperSlide>       
                      <SwiperSlide>
                    <div className={
                btnActive === 6
                  ? "card-item active"
                  : "card-item"
              }>
                      <div className="card-wrapper">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 6) {
                            setBtnActive();
                          } else {
                            setBtnActive(6);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#222222" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#222222" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#222222" stroke-width="2.478"/>
</svg></button>                    
                      </div>
                      <h3>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h3>
                      <img src="./images/card-img.svg" alt="" />
                      </div>

                      <div className="card-details">
                      <div className="card-headers">
                        <button className="phase-btn">PHASE 2</button>
                        <button className="arrow-left-icon"
                        onClick={() => {
                          if (btnActive === 6) {
                            setBtnActive();
                          } else {
                            setBtnActive(6);
                          }
                        }}
                        >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20.0024" r="19" stroke="#fff" stroke-width="2"/>
<path d="M26.4734 29V22.4C26.4734 19.0863 23.7871 16.4 20.4734 16.4H12.2001" stroke="#fff" stroke-width="2.478"/>
<path d="M17.5532 11L12.2007 16.4L17.5532 21.8" stroke="#fff" stroke-width="2.478"/>
</svg></button>                    
                      </div>    
                      <h4>THIS IS A CARD TITLE PLACE- HOLDER THAT SPANS 2 LINES.</h4>
                      <div className="card-details-list">
                        <div className="card-list-item">
                          <input id="list-1" type="radio" />
                          <label for="list">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-2" type="radio" />
                          <label for="list-2">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
                        <div className="card-list-item">
                          <input id="list-3" type="radio" />
                          <label for="list-3">Lorem ipsum dolor incididunt ut labore.</label>
                        </div>
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
     </div>
</section>
    

  

      {/* --------- FAQ SECTION  ------------ */}
      {/* <section className="faq" id="faqs">
        <div className="container" data-aos="fade-up">
          <h1>
            Frequently Asked <br /> <span>Questions</span>
          </h1>


          <div className="questions-answers" data-aos="fade-up"> */}
            {/* FAQ - 1  */}
            {/* <div
              className={
                activeFaq === 1
                  ? "red question-answer active"
                  : " red question-answer"
              }
            >
              <div
                className="question"
                onClick={() => {
                  if (activeFaq === 1) {
                    setActiveFaq();
                  } else {
                    setActiveFaq(1);
                  }
                }}
              >
                <img src="/images/faq-img.png" alt="" />
                <p>What is CryptoOtters?</p>

                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.375L22.3253 15.8437L0.674683 15.8437L11.5 0.375Z"
                    fill="#0F1134"
                  />
                </svg>
              </div>
              <p className="answer">
                CryptoOtters is the first line of avatars that are coming for an upcoming P2E game that we will be releasing.  Game where players can socialize, grind, trade, and potentially even make money.
              </p>
            </div> */}

            {/* FAQ - 2  */}
            {/* <div
              className={
                activeFaq === 2
                  ? "green question-answer active"
                  : "green question-answer"
              }
            >
              <div
                className="question"
                onClick={() => {
                  if (activeFaq === 2) {
                    setActiveFaq();
                  } else {
                    setActiveFaq(2);
                  }
                }}
              >
                <img src="/images/faq-img.png" alt="" />
                <p>Is this an ETH or SOL project?</p>

                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.375L22.3253 15.8437L0.674683 15.8437L11.5 0.375Z"
                    fill="#0F1134"
                  />
                </svg>
              </div>
              <p className="answer">
                The project will be on the Ethereum network.
              </p>
            </div> */}
            {/* FAQ - 3  */}
            {/* <div
              className={
                activeFaq === 3
                  ? "blue question-answer active"
                  : "blue question-answer"
              }
            >
              <div
                className="question"
                onClick={() => {
                  if (activeFaq === 3) {
                    setActiveFaq();
                  } else {
                    setActiveFaq(3);
                  }
                }}
              >
                <img src="/images/faq-img.png" alt="" />
                <p>How much is a CryptoOtter?</p>

                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.375L22.3253 15.8437L0.674683 15.8437L11.5 0.375Z"
                    fill="#0F1134"
                  />
                </svg>
              </div>
              <p className="answer">
                Presale is $80, Public Mint is $100.
              </p>
            </div> */}
            {/* FAQ - 4  */}
            {/* <div
              className={
                activeFaq === 4
                  ? "pink question-answer active"
                  : "pink question-answer"
              }
            >
              <div
                className="question"
                onClick={() => {
                  if (activeFaq === 4) {
                    setActiveFaq();
                  } else {
                    setActiveFaq(4);
                  }
                }}
              >
                <img src="/images/faq-img.png" alt="" />
                <p>Why should I buy a CryptoOtter?</p>

                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.375L22.3253 15.8437L0.674683 15.8437L11.5 0.375Z"
                    fill="#0F1134"
                  />
                </svg>
              </div>
              <p className="answer">
                If you enjoy games where you get to create an alternate life where there is unlimited possibilities for you and your avatar, then our game will be for you.
                <br />
                <br />
                The only way to play our game is to have one of our avatars (nfts) in your wallet. We believe our game will be a huge hit, and because of that we see the 10,000 CryptoOtters going fast. After launch has finished, there will be many that didn’t get to buy one, and will be willing to pay a premium to acquire one. Those that are interested in the aftermarket selling of our avatars will definitely want to purchase more than one CryptoOtter.
              </p>
            </div> */}
            {/* FAQ - 5  */}
            {/* <div
              className={
                activeFaq === 5
                  ? "pink question-answer active"
                  : "pink question-answer"
              }
            >
              <div
                className="question"
                onClick={() => {
                  if (activeFaq === 5) {
                    setActiveFaq();
                  } else {
                    setActiveFaq(5);
                  }
                }}
              >
                <img src="/images/faq-img.png" alt="" />
                <p>How many CryptoOtters are in the collection?</p>

                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.375L22.3253 15.8437L0.674683 15.8437L11.5 0.375Z"
                    fill="#0F1134"
                  />
                </svg>
              </div>
              <p className="answer">
                There are 10,000 CryptoOtters.
              </p>
            </div> */}
            {/* FAQ - 6  */}
            {/* <div
              className={
                activeFaq === 6
                  ? "pink question-answer active"
                  : "pink question-answer"
              }
            >
              <div
                className="question"
                onClick={() => {
                  if (activeFaq === 6) {
                    setActiveFaq();
                  } else {
                    setActiveFaq(6);
                  }
                }}
              >
                <img src="/images/faq-img.png" alt="" />
                <p>What is Safemoon, and why has the project decided to contributed to that token rather than other choices?</p>

                <svg
                  width="23"
                  height="16"
                  viewBox="0 0 23 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.375L22.3253 15.8437L0.674683 15.8437L11.5 0.375Z"
                    fill="#0F1134"
                  />
                </svg>
              </div>
              <p className="answer">
                Safemoon is a token on the Binance Smart Chain, and is a token that both of us founders are invested in. We believe they have an amazing vision to do things in the crypto space that no other project has done before.
                <br />
                <br />
                We wanted to contribute to a project that like us are not just another average project, but on the contrary are trying to provide something new for the space. We also wanted to select a project that we ourselves have money invested in, to show that we truly do believe in that project.
                <br />
                <br />
                For us it was clear that Safemoon was the project we wanted to give towards, 5% of all nft profit will go towards the buy and burn of Safemoon.

              </p>
            </div> */}

          {/* </div> */}
        {/* </div> */}
      {/* </section> */}


    </React.Fragment>
  );
}

export default Home;
