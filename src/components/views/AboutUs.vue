<template>
    <Header />
    <div class="about-us">
        <AboutUsTitle />
        <AboutUsDescription />
        <PartnerList/>
        <History />
        <Portfolio/>
    </div>
</template>

<script>
import Header from "../header.vue";
import AboutUsTitle from "../pages/AboutUs/AboutUsTitle.vue";
import AboutUsDescription from "../pages/AboutUs/AboutUsDescription.vue";
import PartnerList from "../pages/AboutUs/PartnerList.vue";
import History from "../pages/AboutUs/History.vue";
import Portfolio from "../Portfolio.vue";

export default {
    name: 'AboutUs',
    components: {
        Header,
        AboutUsTitle,
        AboutUsDescription,
        PartnerList,
        History,
        Portfolio
    }
}
</script>

<style lang="scss" scoped>
.header {
    margin-bottom: 40px;
}

.about-us {
    color: #27625F;

}
</style>