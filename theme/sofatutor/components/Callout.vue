<template>
  <div class="callout" :class="type">
    <div class="callout-icon" v-if="type === 'success'">✓</div>
    <div class="callout-icon" v-else-if="type === 'warning'">!</div>
    <div class="callout-icon" v-else-if="type === 'alert'">⚠</div>
    <div class="callout-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'warning', 'alert'].includes(value)
  }
})
</script>

<style scoped>
.callout {
  display: flex;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  align-items: flex-start;
}

.callout.success {
  background-color: var(--st-green-l4);
  border-left: 4px solid var(--st-green);
}

.callout.warning {
  background-color: var(--st-warning);
  border-left: 4px solid var(--st-amber);
}

.callout.alert {
  background-color: #FFEBEE;
  border-left: 4px solid var(--st-red);
}

.callout-icon {
  font-size: 1.2rem;
  margin-right: 1rem;
  font-weight: bold;
}

.success .callout-icon {
  color: var(--st-green);
}

.warning .callout-icon {
  color: var(--st-amber);
}

.alert .callout-icon {
  color: var(--st-red);
}

.callout-content {
  flex: 1;
}
</style> 