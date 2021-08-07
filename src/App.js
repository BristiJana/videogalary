import React, {useEffect} from 'react';

import Aos from 'aos';

import 'aos/dist/aos.css';
import YoutubeEmbed from "./YoutubeEmbed";
import './App.css';

function App() {
  useEffect(()=>{

  Aos.init({duration:2000});
},[])
  return (
    <div className="App">
      <div data-aos="fade-up">
<section id="WorkS">
<div class="third-container">
<h2>
          Video Galary
        </h2>
<br /> <br />
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
   
   
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"  aria-label="Slide 5"></button>
   
   
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="4000">
      <div class="wsa">
                <YoutubeEmbed embedId="rokGy0huYEA" />
              </div>
      <div class="carousel-caption d-none d-md-block">
        <h5>First video of video galary</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <div class="wsa">
                <YoutubeEmbed embedId="OJ_1BZ7ZrbA" />
              </div>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second video of video galary</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <div class="wsa">
                <YoutubeEmbed embedId="vI4LHl4yFuo" />
              </div>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third video of video galary</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>

    <div class="carousel-item" data-bs-interval="4000">
      <div class="wsa">
                <YoutubeEmbed embedId="v_UyVmITiYQ" />
              </div>
      <div class="carousel-caption d-none d-md-block">
        <h5>Fourth video of video galary</h5>
        <p>Some representative placeholder content for the fourth slide.</p>
      </div>
    </div>

    <div class="carousel-item" data-bs-interval="4000">
      <div class="wsa">
                <YoutubeEmbed embedId="66OFYWBrg3o" />
              </div>
      <div class="carousel-caption d-none d-md-block">
        <h5>Fifth video of video galary</h5>
        <p>Some representative placeholder content for the fifth slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
</div>
</div>

</section>
</div>

    </div>
  );
}

export default App;
