<template>
  <button 
    class="st-button" 
    :class="[color, size, { 'full-width': fullWidth }]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'green', 'gray', 'white'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['tiny', 'small', 'medium', 'large'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style scoped>
.st-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--slidev-theme-font-family-default);
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

.st-button:hover {
  transform: translateY(-1px);
}

.st-button:active {
  transform: translateY(1px);
}

/* Colors */
.primary {
  background-color: var(--st-blue);
  color: var(--st-white);
}

.primary:hover {
  background-color: var(--st-hover);
}

.green {
  background-color: var(--st-green);
  color: var(--st-white);
}

.green:hover {
  background-color: var(--st-green-l1);
}

.gray {
  background-color: var(--st-gray);
  color: var(--st-white);
}

.gray:hover {
  background-color: var(--st-gray-dark);
}

.white {
  background-color: var(--st-white);
  color: var(--st-blue);
  border: 1px solid var(--st-gray-medium);
}

.white:hover {
  background-color: var(--st-gray-light);
}

/* Sizes */
.tiny {
  height: 24px;
  padding: 0 8px;
  font-size: 12px;
  line-height: 12px;
}

.small {
  height: 32px;
  padding: 0 16px;
  font-size: 14px;
  line-height: 14px;
}

.medium {
  height: 40px;
  padding: 0 20px;
  font-size: 16px;
  line-height: 16px;
}

.large {
  height: 48px;
  padding: 0 24px;
  font-size: 18px;
  line-height: 18px;
}

/* Full width */
.full-width {
  width: 100%;
}
</style> 