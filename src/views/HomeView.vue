<template>
  <div class="home">
    <Header />
    <main>
      <AboutSection />
      <ServicesSection />
      <Gallery />
      <ContactForm />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AboutSection from '@/components/AboutSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import Gallery from '@/components/Gallery.vue';
import ContactForm from '@/components/ContactForm.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    AboutSection,
    ServicesSection,
    Gallery,
    ContactForm,
    Footer
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>