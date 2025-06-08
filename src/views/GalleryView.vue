<template>
  <div class="gallery-view">
    <h1>Our Gallery</h1>
    <Gallery />
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'GalleryView',
  components: {
    Gallery
  }
};
</script>

<style scoped>
.gallery-view {
  padding: 20px;
  text-align: center;
}
</style>