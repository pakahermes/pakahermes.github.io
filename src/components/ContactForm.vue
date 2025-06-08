<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <div v-if="submitted" class="success-message">
      Thank you for contacting us! We will get back to you soon.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    };
  },
  methods: {
    submitForm() {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', this.formData);
      this.submitted = true;
      this.resetForm();
    },
    resetForm() {
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact-form h2 {
  text-align: center;
}

.contact-form div {
  margin-bottom: 15px;
}

.contact-form label {
  display: block;
  margin-bottom: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.contact-form button {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.contact-form .success-message {
  margin-top: 20px;
  color: green;
  text-align: center;
}
</style>