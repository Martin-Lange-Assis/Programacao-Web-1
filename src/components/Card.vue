<template>
  <div class="container">
    <div class="card">
      <div class="card-header">GRUPO D</div>
      <div class="card-body">
        <Tabela />
      </div>
    </div>
  </div>
</template>

<script>
import Tabela from "./Tabela.vue";
export default {
  components: {
    Tabela,
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}

.card {
  background-color: black;
  border: 1px solid #3c3621;
  border-radius: 4px;
  padding: 16px;
  margin-top: 143px;
  box-shadow: 0 0 10px 5px #ffd700, 0 0 20px 10px rgba(255, 217, 3, 0.5);
}

.card-header {
  font-family : 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
  font-size: xx-large;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
}

.card-body {
  margin-top: 20px;
  margin-right: 10px;
  width: 500px;
}
</style>
