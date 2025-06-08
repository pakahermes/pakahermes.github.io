<template>
  <div class="services-view">
    <h1>Our Services</h1>
    <ServicesSection />
  </div>
</template>

<script>
import ServicesSection from '@/components/ServicesSection.vue';

export default {
  name: 'ServicesView',
  components: {
    ServicesSection
  }
};
</script>

<style scoped>
.services-view {
  padding: 20px;
}
</style>