<template>
  <div id="app">
    <Card />
    <div v-for="time in times" :key="time.nome">
      <CardDetails :time="time" />
    </div>
  </div>
</template>

<script>
import CardDetails from "./components/CardDetails.vue";
import Card from "./components/Card.vue";

export default {
  components: {
    Card,
    CardDetails,
  },
};
</script>

<style>
body {
  background-image: url("../public/img/libertadores-conmebol.gif");
  background-color: black;
  color: #ffffff;
  background-size: cover;
}
</style>