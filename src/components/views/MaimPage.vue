<template>
    <div class="contente">
        <MainContent />
        <WeHaveAll />
        <TypographyDescription />
        <QualityOfService />
        <StagesOfWork />
        <Reviews />
        <Feedback />
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
import Feedback from '../pages/MainPage/Feedback.vue';
import Contacts from '../pages/MainPage/Contacts.vue';

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
    }
}
</script>

<style lang="scss" scoped>
.contente {
}
</style>