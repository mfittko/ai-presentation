<template>
  <div class="slidev-layout center">
    <div class="center-container">
      <slot />
    </div>
    <div class="watermark">
      <img src="/theme/sofatutor/assets/sofa_icon_green.svg" alt="Sofatutor Logo" />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.center {
  position: relative;
}

.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 2rem;
  background-color: var(--st-white);
  z-index: 1;
}

.center-container h1 {
  color: var(--st-black);
  font-weight: 300;
  margin-bottom: 1.5rem;
  font-size: 42px;
  line-height: 1.5;
  position: relative;
  padding-bottom: 0.5rem;
}

.center-container h1::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: var(--st-green);
}

.center-container h2 {
  color: var(--st-green);
  font-weight: 300;
  margin-bottom: 2rem;
  font-size: 32px;
  line-height: 1.5;
}

.center-container h3 {
  color: var(--st-black);
  font-weight: 300;
  margin-bottom: 1.5rem;
  font-size: 22px;
  line-height: 1.8;
}

.center-container p {
  max-width: 80%;
  margin: 0 auto 1rem;
  font-size: 16px;
  line-height: 1.8;
  color: var(--st-black);
}

.center-container ul, 
.center-container ol {
  display: inline-block;
  text-align: left;
  margin: 1rem auto;
  color: var(--st-black);
}

.center-container li {
  margin-bottom: 0.8rem;
  line-height: 1.8;
}

.center-container strong {
  font-weight: 600;
  color: var(--st-black);
}

.center-container em {
  font-style: italic;
  color: var(--st-blue);
}

.center-container a {
  color: var(--st-blue);
  text-decoration: none;
  border-bottom: 1px solid var(--st-blue);
  transition: color 0.3s ease, border-color 0.3s ease;
}

.center-container a:hover {
  color: var(--st-hover);
  border-color: var(--st-hover);
}

.text-center * {
  text-align: center;
}

.text-center ul,
.text-center ol {
  list-style-position: inside;
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