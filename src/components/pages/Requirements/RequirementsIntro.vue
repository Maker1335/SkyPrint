<template>
    <div class="requirements-intro">
        <div class="wrapper">
            <h2 class="requirements-intro_title">Как избежать ошибки вашего файла при печати?</h2>
            <div class="requirements-intro_files-for-printing">
                <h3>К печати принимаються следующие файлы</h3>
                <div class="cards">
                    <div class="card" v-for="file in files" :key="file.id">
                        <img :src="file.imgSrc" :alt="file.alt" class="card_img">
                        <div class="card_description description">
                            <p class="description_app-name">{{ file.appName }}</p>
                            <p class="description_file-type">{{ file.fileType }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import balloon from "../../../assets/img/pages/Requirements/balloon.svg";
import acrobat from "../../../assets/img/pages/Requirements/acrobat.svg";
import Ps from "../../../assets/img/pages/Requirements/Ps.svg";
import AI from "../../../assets/img/pages/Requirements/AI.svg";
export default {
    name: 'RequirementsIntro',
    data() {
        return {
            files: [
                { id: 1, imgSrc: balloon, alt: "фото", appName: "CorelDRAW", fileType: "cdr, eps" },
                { id: 2, imgSrc: acrobat, alt: "фото", appName: "Acrobat", fileType: "pdf" },
                { id: 3, imgSrc: Ps, alt: "фото", appName: "Photoshop", fileType: "psd, tiff, jpg, bmp" },
                { id: 4, imgSrc: AI, alt: "фото", appName: "Illustrator", fileType: "ai, pdf" }
            ]
        }; 
    }
};
</script>

<style lang="scss" scoped>
.requirements-intro {
    &_title {
        font-size: 50px;
        font-weight: bold;
        width: 800px;
        margin-bottom: 90px;
    }

    &_files-for-printing {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 100px;

        h3 {
            font-size: 30px;
            font-weight: bold;
            width: 373px;
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            gap: 22px;

            .card {
                display: flex;
                flex-direction: column;
                width: 180px;
                height: 180px;
                border-radius: 8px;
                justify-content: space-between;
                padding: 20px;
                background-color: #F5F5F5;

                &_img {
                    width: 35px;
                    height: 35px;
                }

                .description {
                    &_app-name {
                        font-size: 16px;
                        font-weight: bold;
                    }

                    &_description {
                        font-size: 16px;
                        font-weight: bold;
                        color: #7D7D7D;
                    }
                }
            }

        }
    }
}
</style>
