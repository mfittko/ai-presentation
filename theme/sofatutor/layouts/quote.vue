<template>
  <div class="slidev-layout quote">
    <div class="quote-container">
      <div class="quote-content">
        <slot />
      </div>
    </div>
    <div class="watermark">
      <img src="/theme/sofatutor/assets/sofa_icon_green.svg" alt="Sofatutor Logo" />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.quote {
  position: relative;
}

.quote-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
  background-color: var(--st-gray-light);
  position: relative;
  z-index: 1;
}

.quote-container::before {
  content: '"';
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 8rem;
  color: var(--st-green);
  opacity: 0.3;
  font-family: Georgia, serif;
  line-height: 1;
}

.quote-content {
  max-width: 80%;
  z-index: 1;
}

.quote-content h1 {
  font-size: 2.2rem;
  font-weight: 300;
  font-style: italic;
  color: var(--st-black);
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.5;
  border-bottom: none;
}

.quote-content ul,
.quote-content ol {
  list-style-position: inside;
  margin: 1.5rem auto;
  max-width: 80%;
}

.quote-content li {
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

.quote-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
}

.quote-content blockquote {
  border-left: 4px solid var(--st-green);
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
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