<template>
  <div class="slidev-layout cover" :style="backgroundStyle">
    <div class="cover-container">
      <div class="logo-container">
        <!-- Using the downloaded logo -->
        <div class="logo">
          <img src="/theme/sofatutor/assets/primary_logo.svg" alt="Sofatutor Logo" />
        </div>
      </div>
      <div class="content-container">
        <h1><slot /></h1>
        <p><slot name="subtitle" /></p>
      </div>
      <div class="author-container">
        <p><slot name="author" /></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const background = computed(() => route.meta.frontmatter?.background || '')

const backgroundStyle = computed(() => {
  if (!background.value) return {}
  
  return {
    backgroundImage: `linear-gradient(rgba(102, 153, 0, 0.85), rgba(153, 204, 0, 0.85)), url(${background.value})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})
</script>

<style scoped>
.cover-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;
}

.logo-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
}

.logo {
  background-color: var(--st-white);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  max-width: 200px;
}

.logo img {
  width: 100%;
  height: auto;
}

.content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;
}

.content-container h1 {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: var(--st-white);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.content-container p {
  font-size: 1.5rem;
  opacity: 0.9;
  color: var(--st-white);
  max-width: 80%;
}

.author-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

.author-container p {
  font-size: 1rem;
  opacity: 0.9;
  color: var(--st-white);
}
</style> 