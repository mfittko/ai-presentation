<template>
  <div class="slidev-layout default">
    <div class="header">
      <div class="logo">
        <img src="/theme/sofatutor/assets/primary_logo.svg" alt="Sofatutor Logo" />
      </div>
      <div class="slide-info">
        <div class="slide-number">{{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}</div>
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
    <div class="watermark">
      <img src="/theme/sofatutor/assets/sofa_icon_green.svg" alt="Sofatutor Logo" />
    </div>
    <div class="footer">
      <div class="footer-text">© sofatutor GmbH</div>
    </div>
  </div>
</template>

<style scoped>
.default {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  background-color: var(--st-white);
  color: var(--st-black);
  position: relative;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background-color: var(--st-gray-light);
  border-bottom: 1px solid var(--st-gray-medium);
}

.logo {
  display: flex;
  align-items: center;
  max-width: 120px;
}

.logo img {
  width: 100%;
  height: auto;
}

.slide-info {
  font-size: 0.8rem;
  color: var(--st-gray-dark);
}

.content {
  flex-grow: 1;
  padding: 2rem;
  overflow: auto;
  z-index: 1;
}

.content h1 {
  color: var(--st-black);
  font-weight: 300;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--st-green);
  padding-bottom: 0.5rem;
}

.content p, .content li {
  color: var(--st-black);
  font-size: 16px;
  line-height: 1.8;
}

.content strong {
  font-weight: 600;
  color: var(--st-black);
}

.watermark {
  position: absolute;
  bottom: 60px;
  right: 40px;
  opacity: 0.1;
  z-index: 0;
  pointer-events: none;
}

.watermark img {
  width: 120px;
  height: auto;
}

.footer {
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 2rem;
  background-color: var(--st-gray-light);
  border-top: 1px solid var(--st-gray-medium);
  z-index: 1;
}

.footer-text {
  font-size: 0.8rem;
  color: var(--st-gray-dark);
}
</style> 