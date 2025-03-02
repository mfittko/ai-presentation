<template>
  <div class="slidev-layout section">
    <div class="section-container">
      <h1><slot /></h1>
    </div>
  </div>
</template>

<style scoped>
.section-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.section-container h1 {
  font-size: 3.5rem;
  font-weight: 300;
  text-align: center;
  max-width: 80%;
  color: var(--st-white);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  line-height: 1.3;
}
</style> 