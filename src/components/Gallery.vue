<template>
  <div class="gallery">
    <h2>Our Work</h2>
    <div class="gallery-grid">
      <div v-for="image in images" :key="image.id" class="gallery-item">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, src: require('@/assets/images/roof1.jpg'), alt: 'Roofing Project 1' },
        { id: 2, src: require('@/assets/images/roof2.jpg'), alt: 'Roofing Project 2' },
        { id: 3, src: require('@/assets/images/roof3.jpg'), alt: 'Roofing Project 3' },
        { id: 4, src: require('@/assets/images/roof4.jpg'), alt: 'Roofing Project 4' },
        { id: 5, src: require('@/assets/images/roof5.jpg'), alt: 'Roofing Project 5' },
      ],
    };
  },
};
</script>

<style scoped>
.gallery {
  padding: 20px;
}

.gallery h2 {
  text-align: center;
  margin-bottom: 20px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>