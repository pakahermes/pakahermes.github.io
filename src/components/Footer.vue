<template>
  <footer>
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Roofing Company. All rights reserved.</p>
      <ul class="social-links">
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer-content {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
}

.social-links {
  list-style: none;
  padding: 0;
}

.social-links li {
  display: inline;
  margin: 0 10px;
}

.social-links a {
  color: white;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
}
</style>