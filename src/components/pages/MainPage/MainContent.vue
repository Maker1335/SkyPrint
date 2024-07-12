<template>
  <div class="MainContent">
    <Header />
    <div class="content">
      <h1>С SKYPRINT всё просто</h1>
      <p class="description">
        К любым, даже небольшим заказам, мы стараемся найти творческий подход: разработать оригинальный дизайн,
        выбрать оптимальный метод печати и отделки, помочь заказчику сэкономить.
      </p>
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
import Header from '../../header.vue';
import backgroundImg from "../../../assets/img/background.png";

import rollUpImage from '../../../assets/img/goods/RollUp.svg';
import notepadsImage from '../../../assets/img/goods/notepads.svg';
import canvasesImage from '../../../assets/img/goods/canvases.svg';
import businessCardsImage from '../../../assets/img/goods/businessСards.svg';
import laminationImage from '../../../assets/img/goods/lamination.svg';
import pensImage from '../../../assets/img/goods/pens.svg';



export default {
  name: 'MainPage',
  components: {
    Header,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay],
      backgroundImg: backgroundImg,
      rollUpImage,
      notepadsImage,
      canvasesImage,
      businessCardsImage,
      laminationImage,
      pensImage
    };
  }
};
</script>

<style lang="scss" scoped>
$mainBG: "../../../assets/img/pages/MainPage/MainContent/homePageBackground.svg";
$goodsBG: "../../../assets/img/background.png";

.header {
  background: none;
}

.MainContent {
  background-image: url($mainBG);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 941px;

  .content {
    width: 1440px;
    margin: 0 auto;
    padding-top: 440px;
    
  }

  h1 {
    font-size: 51px;
    font-weight: bold;
    color: #289793;
    width: 647px;
  }

  .description {
    font-size: 16px;
    color: #3baeaa;
    width: 647px;
  }

  .slider-container {
    width: 100%;
    display: grid;
    grid-template-columns: auto 232px;
    justify-content: center;
    margin-top: 9px;

    .swiper {
      width: 100%;
    }

    .swiper-slide {
      text-align: start;
      font-size: 18px;
      background-color: #fff;
      width: 232px;
      height: 256px;
      position: relative;
      overflow: hidden;
      transition: background-color 0.5s ease;

      p {
        font-size: 17px;
        font-weight: bold;
        color: #27625f;
        padding: 10px 20px;
        z-index: 1;
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
      margin-left: 9px;
      width: 100%;
      font-size: 17px;
      font-weight: bold;
      color: #27625f;
      background: #fff;
      display: flex;
      align-items: flex-end;
      justify-content: space-around;

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


</style>
