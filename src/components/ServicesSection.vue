<template>
  <section class="services-section">
    <h2>Our Services</h2>
    <div class="services-list">
      <div class="service-item" v-for="service in services" :key="service.id">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Roof Installation',
          description: 'Professional roof installation services for residential and commercial properties.'
        },
        {
          id: 2,
          title: 'Roof Repair',
          description: 'Expert roof repair services to fix leaks and damages quickly and efficiently.'
        },
        {
          id: 3,
          title: 'Roof Maintenance',
          description: 'Regular maintenance services to extend the life of your roof and prevent costly repairs.'
        },
        {
          id: 4,
          title: 'Gutter Installation',
          description: 'Quality gutter installation to protect your home from water damage.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.services-section {
  padding: 20px;
  background-color: #f9f9f9;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.service-item {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
}
</style>