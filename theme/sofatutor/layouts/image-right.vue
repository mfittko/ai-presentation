<template>
  <div class="slidev-layout image-right">
    <div class="container">
      <div class="content">
        <slot />
      </div>
      <div class="image-container" :style="imageStyle">
      </div>
    </div>
    <div class="watermark">
      <img src="/theme/sofatutor/assets/sofa_icon_green.svg" alt="Sofatutor Logo" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const image = computed(() => route.meta.frontmatter?.image || '')
const imageStyle = computed(() => ({
  backgroundImage: `url(${image.value})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))
</script>

<style scoped>
.slidev-layout.image-right {
  position: relative;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  z-index: 1;
}

.content {
  padding: 2rem;
  overflow-y: auto;
}

.content h1 {
  color: var(--st-black);
  font-weight: 300;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  border-bottom: 2px solid var(--st-green);
  padding-bottom: 0.5rem;
}

.content h2 {
  color: var(--st-green);
  font-weight: 300;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.content p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

.content ul, 
.content ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.content li {
  margin-bottom: 0.5rem;
}

.content strong {
  color: var(--st-black);
  font-weight: 600;
}

.content em {
  color: var(--st-blue);
  font-style: italic;
}

.image-container {
  width: 100%;
  height: 100%;
  border-left: 1px solid var(--st-gray-medium);
}

.watermark {
  position: absolute;
  bottom: 40px;
  right: 40px;
  opacity: 0.1;
  z-index: 0;
  pointer-events: none;
}

.watermark img {
  width: 120px;
  height: auto;
}
</style> 