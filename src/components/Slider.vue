<template>
  <div class="slider">
    <div class="wrapper">
      <h2>{{ titleText }}</h2>
      <div class="slider-container">
        <swiper :slides-per-view="5" :space-between="9" :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :loop="true" :modules="modules" class="mySwiper">
          <swiper-slide class="product">
            <img :src="rollUpImage" alt="фото товара" />
            <p>Roll-up</p>
          </swiper-slide>
          <swiper-slide class="product">
            <img :src="notepadsImage" alt="фото товара" />
            <p>Блокноты</p>
          </swiper-slide>
          <swiper-slide class="product">
            <img :src="canvasesImage" alt="фото товара" />
            <p>Холсты</p>
          </swiper-slide>
          <swiper-slide class="product">
            <img :src="businessCardsImage" alt="фото товара" />
            <p>Визитки</p>
          </swiper-slide>
          <swiper-slide class="product">
            <img :src="laminationImage" alt="фото товара" />
            <p>Ламинирование</p>
          </swiper-slide>
          <swiper-slide class="product">
            <img :src="pensImage" alt="фото товара" />
            <p>Ручки</p>
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

import rollUpImage from '../assets/img/goods/RollUp.svg';
import notepadsImage from '../assets/img/goods/notepads.svg';
import canvasesImage from '../assets/img/goods/canvases.svg';
import businessCardsImage from '../assets/img/goods/businessСards.svg';
import laminationImage from '../assets/img/goods/lamination.svg';
import pensImage from '../assets/img/goods/pens.svg';

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
      rollUpImage,
      notepadsImage,
      canvasesImage,
      businessCardsImage,
      laminationImage,
      pensImage
    };
  },
  props: {
    titleText: Object
  }
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

//@media (max-width: 1367px) {
//  .slider {
//    h2 {
//      font-size: 20px;
//    }
//
//    .slider-container {
//      grid-template-columns: auto 194px;
//      gap: 9px;
//
//      .swiper-slide {
//        font-size: 16px;
//        width: 196px;
//        height: 198px;
//
//        p {
//          font-size: 16px;
//        }
//
//        img {
//          width: 196px;
//          height: 153px;
//        }
//
//      }
//
//      .all-categories {
//        font-size: 16px;
//      }
//    }
//  }
//}
</style>
