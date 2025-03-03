<template>
  <div class="slidev-layout end" :style="backgroundStyle">
    <div class="end-container">
      <div class="logo-container">
        <div class="logo">
          <img src="/theme/sofatutor/assets/primary_logo.svg" alt="Sofatutor Logo" />
        </div>
      </div>
      <div class="content-container">
        <h1><slot /></h1>
        <div class="subtitle"><slot name="subtitle" /></div>
      </div>
      <div class="footer">
        <div class="contact-info">
          <img src="/theme/sofatutor/assets/sofa_icon_green.svg" alt="Sofatutor Icon" class="footer-icon" />
          <span>www.sofatutor.com</span>
        </div>
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
  if (!background.value) return {
    backgroundImage: `linear-gradient(rgba(102, 153, 0, 0.9), rgba(153, 204, 0, 0.9))`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  
  return {
    backgroundImage: `linear-gradient(rgba(102, 153, 0, 0.7), rgba(153, 204, 0, 0.7)), url(${background.value})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
})
</script>

<style scoped>
.end {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--st-white);
  color: var(--st-black);
  position: relative;
}

.end-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;
}

.logo-container {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.logo {
  background-color: var(--st-white);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  max-width: 180px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: var(--st-white);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.subtitle {
  font-size: 1.8rem;
  opacity: 0.9;
  color: var(--st-white);
  max-width: 80%;
  margin-bottom: 2rem;
}

.footer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.contact-info {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: var(--st-white);
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.footer-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
</style> 