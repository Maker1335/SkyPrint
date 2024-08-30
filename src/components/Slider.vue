<template>
  <div class="slider">
    <div class="wrapper">
      <h2>{{ titleText }}</h2>
      <div class="slider-container">
        <swiper :slides-per-view="slidesPerView" :space-between="9"
          :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true" :modules="modules" class="mySwiper"
          :breakpoints="breakpoints" update-on-window-resize>
          <swiper-slide class="product" v-for="(slide, index) in slides" :key="index">
            <img :src="slide.image" :alt="slide.alt" />
            <p>{{ slide.text }}</p>
          </swiper-slide>
        </swiper>
        <div class="all-categories">
          <p class="all-categories_text">Все категории </p>
          <p class="all-categories_arrow">&gt;</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import rollUpImage from '../assets/img/goods/img/RollUp.svg';
import notepadsImage from '../assets/img/goods/img/notepads.svg';
import canvasesImage from '../assets/img/goods/img/canvases.svg';
import businessCardsImage from '../assets/img/goods/img/businessСards.svg';
import laminationImage from '../assets/img/goods/img/lamination.svg';
import pensImage from '../assets/img/goods/img/pens.svg';

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
      slidesPerView: 5,
      slides: [
        { image: rollUpImage, alt: 'фото товара', text: 'Roll-up' },
        { image: notepadsImage, alt: 'фото товара', text: 'Блокноты' },
        { image: canvasesImage, alt: 'фото товара', text: 'Холсты' },
        { image: businessCardsImage, alt: 'фото товара', text: 'Визитки' },
        { image: laminationImage, alt: 'фото товара', text: 'Ламинирование' },
        { image: pensImage, alt: 'фото товара', text: 'Ручки' },
      ],
      breakpoints: {
        0: {
          slidesPerView: 3,
        },
        1366: {
          slidesPerView: 4,
        },
        1367: {
          slidesPerView: 5,
        },
      }
    };
  },
  props: {
    titleText: String,
  },
};
</script>

<style lang="scss" scoped>
$goodsBG: "../assets/img/background.png";

.slider {
  h2 {
    color: #27625F;
    font-size: 30px;
    font-weight: bold;
  }

  .slider-container {
    width: 100%;
    display: grid;
    grid-template-columns: auto 232px;
    justify-content: center;
    margin-top: 9px;
    gap: 9px;

    .swiper {
      width: 100%;
      z-index: auto;
    }

    .swiper-slide {
      text-align: start;
      font-size: 18px;
      background-color: #F4F4F4;
      width: 232px;
      height: 256px;
      position: relative;
      overflow: hidden;
      transition: background-color 0.5s ease;
      border-radius: 8px;

      p {
        font-size: 17px;
        font-weight: bold;
        color: #27625f;
        padding: 10px 20px;
        z-index: 1;
        box-sizing: border-box;
      }

      img {
        width: 233px;
        height: 183px;
        z-index: 1;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url($goodsBG);
        background-size: cover;
        opacity: 0;
        transition: opacity 0.5s ease;
      }

      &:hover {
        background-color: transparent;

        &::before {
          opacity: 1;
        }
      }
    }

    .product {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .all-categories {
      width: 100%;
      font-size: 17px;
      font-weight: bold;
      color: #27625f;
      background: #fff;
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      border: 1px solid #000000;
      border-radius: 8px;
      box-sizing: border-box;

      &_text {
        width: 85px;
      }

      &_arrow {
        width: 8px;
        height: 16px;
        padding: 3px;
      }

      p {
        margin-bottom: 25px;
      }
    }

  }
}

@media (max-width: 1367px) {
  .slider {
    h2 {
      font-size: 20px;
    }

    .slider-container {
      grid-template-columns: auto 194px;
      gap: 9px;

      .swiper-slide {
        font-size: 16px;
        width: 196px;
        height: 198px;

        p {
          font-size: 16px;
        }

        img {
          width: 196px;
          height: 153px;
        }

      }

      .all-categories {
        font-size: 16px;
      }
    }
  }
}

//@media (max-width: 361px) {
  @media (max-width: 700px) {
  .slider {
    h2 {
      font-size: 14px;
    }

    .slider-container {
      width: 100%;
      //width: calc(100vh - 30px);
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      gap: 4px;

      .swiper {
        width: 100%;
        gap: 4px;

        .swiper-wrapper {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 4px;
        }
      }


      .swiper-slide {
        font-size: 10px;
        width: 100%;
        height: 140px;

        p {
          font-size: 10px;
          padding: 10px;
        }

        img {
          width: 100%;
          height: 100px;
        }
      }

      .all-categories {
        width: 100%;
        font-size: 10px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        box-sizing: border-box;

        &_text {
          width: 50px;
        }

        p {
          margin-bottom: 25px;
          margin: 0;
        }
      }

    }
  }
}

.swiper-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 4px;
}
</style>