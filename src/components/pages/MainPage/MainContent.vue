<template>
  <div class="MainContent">
    <Header />
    <div class="wrapper">
      <div class="content">
        <h1>С SKYPRINT ВСЁ ПРОСТО</h1>
        <p class="description">
          К любым, даже небольшим заказам, мы стараемся найти творческий подход: разработать оригинальный дизайн,
          выбрать оптимальный метод печати и отделки, помочь заказчику сэкономить.
        </p>
        <Slider />
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
import Slider from '../../Slider.vue';

export default {
  name: 'MainPage',
  components: {
    Header,
    Swiper,
    SwiperSlide,
    Slider
  },
  data() {
    return {
      modules: [Autoplay],
      backgroundImg: backgroundImg,
      sliderText: "Товары",
    };
  }
};
</script>

<style lang="scss" scoped>
$mainBG: "../../../assets/img/pages/MainPage/MainContent/homePageBackground.webp";
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
  position: relative;
  border-radius: 0 0 0 10px;

  .wrapper {
    .content {
      position: absolute;
      bottom: 70px;

      h1 {
        font-size: 51px;
        font-weight: bold;
        color: #289793;
        width: 700px;
      }

      .description {
        font-size: 16px;
        color: #3baeaa;
        width: 647px;
      }

      :deep .slider  {
        margin-top: 30px;
        .slider-container {
          .product {
            background-color: #fff;
          }

          .all-categories {
            border: 0px;
          }
        }
      }
    }
  }
}

@media (max-width: 1367px) {
  .MainContent {
    height: 740px;

    .wrapper {
      .content {
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
      }
    }
  }
}

@media (max-width: 700px) {
  .MainContent {

    .wrapper {
      position: relative;
       height: 660px;

      .content {
        width: 100%;
        h1 {
          font-size: 30px;
          color: #0E7571;
          width: 336px;
        }

        .description {
          font-size: 12px;
          width: 336px;
          color: #061111;
        }
      }
    }
  }
}
</style>
