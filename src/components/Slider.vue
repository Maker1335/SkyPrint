<template>
  <div class="slider">
    <div class="wrapper">
      <h2>{{ titleText }}</h2>
      <div class="slider-container">
        <swiper :slides-per-view="slidesPerView" :space-between="9"
          :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true" :modules="modules" class="mySwiper"
          :breakpoints="breakpoints" update-on-window-resize>
          <swiper-slide class="product" v-for="(slide, index) in slides" :key="index">
            <router-link :to="slide.link" class="product">
              <img :src="slide.image" :alt="slide.alt" />
              <p>{{ slide.text }}</p>
            </router-link>
          </swiper-slide>
        </swiper>
        <router-link to="/catalog" class="all-categories">
          <p class="all-categories_text">Все категории </p>
          <p class="all-categories_arrow">&gt;</p>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useImagesStore } from './stores/imagesStore.js';

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    let ImagesStore = useImagesStore();
    return {
      modules: [Autoplay],
      slidesPerView: 5,
      slides: [
        { image: ImagesStore.images.RollUp, alt: 'фото товара', text: 'Roll-up', link: '/product/21' },
        { image: ImagesStore.images.notebooks, alt: 'фото товара', text: 'Блокноты', link: '/product/17' },
        { image: ImagesStore.images.canvases, alt: 'фото товара', text: 'Холсты', link: '/product/2' },
        { image: ImagesStore.images.busrinessCards, alt: 'фото товара', text: 'Визитки', link: '/product/8' },
        { image: ImagesStore.images.lamination, alt: 'фото товара', text: 'Ламинирование', link: '/product/3' },
        { image: ImagesStore.images.pens, alt: 'фото товара', text: 'Ручки', link: '/product/1' },
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
        width: 180px;
        height: 180px;
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
      align-items: center;
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
      position: relative;
      transition: background-color 0.5s ease;


      &_text {
        width: 85px;
        position: absolute;
        left: 25px;
      }

      &_arrow {
        width: 8px;
        height: 16px;
        padding: 3px;
        position: absolute;
        right: 40px;
      }

      p {
        margin-bottom: 25px;
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
        border: none;

        &::before {
          opacity: 1;
          border-radius: 8px;
        }
      }

      &:hover {
        .all-categories_arrow {
          transition: all 0.5s ease;
          right: 15px;
        }
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