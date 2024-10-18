<template>
    <div class="contente">
        <MainContent />
        <WeHaveAll />
        <TypographyDescription />
        <QualityOfService />
        <StagesOfWork />
        <Reviews />
        <Feedback :titleText="feedbackText"/>
        <Contacts />
    </div>
</template>

<script>
import MainContent from '../pages/MainPage/MainContent.vue';
import WeHaveAll from '../pages/MainPage/WeHaveAll.vue';
import TypographyDescription from '../pages/MainPage/TypographyDescription.vue';
import QualityOfService from '../pages/MainPage/QualityOfService.vue';
import StagesOfWork from '../pages/MainPage/StagesOfWork.vue';
import Reviews from '../pages/MainPage/Reviews.vue';
import Feedback from '../Feedback.vue';
import Contacts from '../Contacts.vue';

export default {
    name: 'MaimPage',
    components: {
        MainContent,
        WeHaveAll,
        TypographyDescription,
        QualityOfService,
        StagesOfWork,
        Reviews,
        Feedback,
        Contacts,
    },
    data() {
        return {
            feedbackText: 'Заинтересовали? Тогда скорее звони нам!',
        }
    },
}
</script>

<style lang="scss" scoped>
.contente {
}
</style>