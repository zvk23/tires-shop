<template>
  <div class="ui-badge" :class="colorClass">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from "vue";

export type EBadgeColor = "blue" | "orange" | "purple" | "black";

interface IBadgeProps {
  text: string;
  color: EBadgeColor;
}

const props = withDefaults(defineProps<IBadgeProps>(), {
  color: "black",
  text: "",
});

const colorClass = computed(() => `ui-badge--${props.color}`);
</script>

<style lang="scss" scoped>
.ui-badge {
  font-size: 11px;
  color: white;
  text-align: center;
  font-weight: 500;
  padding: 10px;
  display: inline-flex;
  user-select: none;

  &--orange {
    background-color: #ff6915;
  }

  &--blue {
    background-color: #3f71bc;
  }

  &--black {
    background-color: black;
  }
  
  &--purple {
    background-color: #9747ff;
  }
}
</style>
