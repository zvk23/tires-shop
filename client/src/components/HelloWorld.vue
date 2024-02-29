<template>
  <div class="zagolovok">КНОПКИ</div>
  <button type="button" class="new but">НОВИНКА</button>
  <button type="button" class="hit but">ХИТ</button>
  <button type="button" class="sale but">РАСПРОДАЖА</button>
  <button type="button" class="ss but">-20%</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.zagolovok {
  font-size:20px;
  color: #3f71bc;
  text-align: center;
  font-weight: 500;
}
.but {
  font-size: 11px;
  color: white;
  text-align: center;
  font-weight: 500;
  padding: 10px;
  border-style: none;
  cursor: pointer;
  transition: all 1s linear;
}
.but:hover{
opacity:0.7;
}
.new {
  background-color: black;
}
.hit {
  background-color: #3f71bc;
}
.sale {
  background-color: #9747ff;
}
.ss {
  background-color: #ff6915;
}
</style>
