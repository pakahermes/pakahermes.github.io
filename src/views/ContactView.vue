<template>
  <div class="contact-view">
    <h1>Contact Us</h1>
    <p>If you have any questions or need further information, please fill out the form below:</p>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'ContactView',
  components: {
    ContactForm
  }
}
</script>

<style scoped>
.contact-view {
  padding: 20px;
}
</style>