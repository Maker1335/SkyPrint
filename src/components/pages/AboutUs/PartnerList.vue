<template>
    <div class="partners">
        <div class="wrapper">
            <h3>С нами сотрудничают лучшие</h3>
            <div class="partners_list">
                <img v-for="(partner, index) in partners" :src="partner.imgSrc" :alt="partner.alt" :key="index">
            </div>
        </div>
    </div>
</template>

<script>
import carmel from "../../../assets/img/partners/carmel.svg"
import аджигардак from "../../../assets/img/partners/аджигардак.svg"
import баден from "../../../assets/img/partners/баден.svg"
import геомтерия from "../../../assets/img/partners/геомтерия.svg"
import крашер from "../../../assets/img/partners/крашер.svg"
import полет from "../../../assets/img/partners/полет.svg"
import сммщики from "../../../assets/img/partners/сммщики.svg"
import стомпрактика from "../../../assets/img/partners/стомпрактика.svg"
import чилинз from "../../../assets/img/partners/чилинз.svg"
import юургу from "../../../assets/img/partners/юургу.svg"

export default {
    name: 'PartnerList',
    data() {
        return {
            partners: [
                { imgSrc: carmel, alt: "фото партнера" },
                { imgSrc: аджигардак, alt: "фото партнера" },
                { imgSrc: баден, alt: "фото партнера" },
                { imgSrc: геомтерия, alt: "фото партнера" },
                { imgSrc: крашер, alt: "фото партнера" },
                { imgSrc: полет, alt: "фото партнера" },
                { imgSrc: сммщики, alt: "фото партнера" },
                { imgSrc: стомпрактика, alt: "фото партнера" },
                { imgSrc: чилинз, alt: "фото партнера" },
                { imgSrc: юургу, alt: "фото партнера" },
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
.partners {
    background-color: #F5F5F5;

    margin-bottom: 80px;

    .wrapper {
        padding: 100px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h3 {
        font-size: 38px;
        font-weight: bold;
        margin-bottom: 100px;
    }

    &_list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 80px;

        img {
            filter: grayscale(1);
            transition: filter 0.5s;

            &:hover {
                filter: grayscale(0);
            }
        }
    }
}
</style>