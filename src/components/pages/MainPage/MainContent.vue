<template>
  <div class="MainContent">
    <Header />
    <div class="wrapper">
      <div class="content">
        <h1>С SKYPRINT всё просто</h1>
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

  .wrapper {
    .content {
      padding-top: 440px;

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

      ::v-deep .slider {
        .slider-container {
          .product{
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
</style>
