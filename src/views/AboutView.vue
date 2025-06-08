<template>
  <div class="about-view">
    <header-component />
    <about-section />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import AboutSection from '@/components/AboutSection.vue';
import FooterComponent from '@/components/Footer.vue';

export default {
  components: {
    HeaderComponent,
    AboutSection,
    FooterComponent
  }
}
</script>

<style scoped>
.about-view {
  padding: 20px;
}
</style>