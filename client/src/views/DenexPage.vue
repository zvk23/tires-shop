<template>
  <div class="denex">
    <h3>Бейджи</h3>
    <ul class="list">
      <li v-for="badge in badgeList" :key="badge.color">
        <ui-badge :color="badge.color" :text="badge.text" />
      </li>
    </ul>

    <ul>
      <h3>Кнопки</h3>
      <!-- Сделать кнопки здесь -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import UiBadge, { EBadgeColor } from "@/components/UiBadge.vue";

const badgeList: { text: string; color: EBadgeColor }[] = [
  {
    text: "новинка",
    color: "black",
  },
  {
    text: "Хит",
    color: "blue",
  },
  {
    text: "распродажа",
    color: "purple",
  },
  {
    text: "-20%",
    color: "orange",
  },
];
</script>

<style lang="scss">
.denex {
  display: flex;
  flex-direction: column;

  .list {
    display: flex;
    gap: 15px;
  }
}
</style>
