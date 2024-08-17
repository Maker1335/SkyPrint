<template>
    <div class="about-us_title">
        <div class="wrapper">
            <h2>Одна из лучших типографий Челябинска</h2>
            <p>
                Типография SkyPrint основанная в 2005 году, является одним из лидеров по потдержке типографичных
                продукций для компаний и рекламы. За это время, типография успела основатся как помошник для брендов и
                людей.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUsTitle'
}
</script>

<style lang="scss" scoped>
.about-us {
    color: #27625F;

    &_title {
        .wrapper {
            margin-bottom: 60px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 19px;
        }

        h2 {
            font-size: 50px;
            font-weight: bold;
            width: 622px;
        }

        p {
            font-size: 16px;
            width: 952px;
            font-weight: 600;
        }
    }
}

@media (max-width: 1367px) {
    .about-us {
        &_title {
            .wrapper {
                margin-bottom: 30px;
                gap: 15px;
            }

            h2 {
                font-size: 35px;
                width: 450px;
            }
        }
    }
}

@media (max-width: 700px) {
    .about-us {
        &_title {
            .wrapper {
                margin-bottom: 30px;
                gap: 25pxx;
            }

            h2 {
                font-size: 25px;
                width: 100%;
            }

            p {
                font-size: 14px;
                width: 100%;
            }
        }
    }
}
</style>