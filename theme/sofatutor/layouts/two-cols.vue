<template>
  <div class="slidev-layout two-cols">
    <div class="col-container">
      <div class="col left">
        <slot />
      </div>
      <div class="col right">
        <slot name="right" />
      </div>
    </div>
    <div class="watermark">
      <img src="/theme/sofatutor/assets/sofa_icon_green.svg" alt="Sofatutor Logo" />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.two-cols {
  position: relative;
}

.col-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 100%;
  padding: 1.5rem;
  background-color: var(--st-white);
  z-index: 1;
}

.col {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  overflow-y: auto;
}

.left {
  border-right: 1px solid var(--st-gray-medium);
  padding-right: 2rem;
}

.right {
  padding-left: 1rem;
}

.col h1 {
  color: var(--st-black);
  font-weight: 300;
  margin-bottom: 1.5rem;
  font-size: 42px;
  line-height: 1.5;
  border-bottom: 2px solid var(--st-green);
  padding-bottom: 0.5rem;
}

.col h2 {
  color: var(--st-green);
  font-weight: 300;
  margin-bottom: 1.5rem;
  font-size: 32px;
  line-height: 1.5;
}

.col h3 {
  color: var(--st-black);
  font-weight: 300;
  margin-bottom: 1rem;
  font-size: 22px;
  line-height: 1.8;
}

.col h4 {
  color: var(--st-black);
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 18px;
  line-height: 1.8;
}

.col p {
  margin-bottom: 1rem;
  line-height: 1.8;
  font-size: 16px;
  color: var(--st-black);
}

.col ul, 
.col ol {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--st-black);
}

.col li {
  margin-bottom: 0.8rem;
  line-height: 1.8;
}

.col strong {
  color: var(--st-black);
  font-weight: 600;
}

.col em {
  color: var(--st-blue);
  font-style: italic;
}

.col a {
  color: var(--st-blue);
  text-decoration: none;
  border-bottom: 1px solid var(--st-blue);
  transition: color 0.3s ease, border-color 0.3s ease;
}

.col a:hover {
  color: var(--st-hover);
  border-color: var(--st-hover);
}

.col blockquote {
  border-left: 4px solid var(--st-green);
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: var(--st-gray-dark);
  font-style: italic;
}

.col code {
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  background-color: var(--st-gray-light);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
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