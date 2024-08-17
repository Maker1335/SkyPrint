<template>
    <Header />
    <div class="requirements">
        <RequirementsIntro />
        <LayoutRequirements />
        <Feedback :titleText="feedbackText" />
        <DescribeYourOrder />
        <Slider :titleText="sliderText" />
    </div>
</template>

<script>
import Header from '../header.vue';
import RequirementsIntro from '../pages/Requirements/RequirementsIntro.vue';
import LayoutRequirements from '../pages/Requirements/LayoutRequirements.vue';
import Feedback from '../Feedback.vue';
import DescribeYourOrder from '../pages/Requirements/DescribeYourOrder.vue';
import Slider from '../Slider.vue';

export default {
    name: 'Requirements',
    components: {
        Header,
        Slider,
        Feedback,
        RequirementsIntro,
        LayoutRequirements,
        DescribeYourOrder
    },
    data() {
        return {
            sliderText: "Вам понравиться",
            feedbackText: "Нет макета? Наши дизайнеры помогут!"
        };
    },
}
</script>

<style lang="scss" scoped>
$goodsBG: "../../assets/img/background.png";

.requirements {
    color: #27625F;
    margin-top: 50px;
    .feedback {
        margin-bottom: 100px;
    }
}
@media (max-width: 700px) {
    .requirements {
        margin-top: 30px;
        .feedback {
            margin-bottom: 30px;
        }
    }
}
</style>