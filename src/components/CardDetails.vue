<template>
  <div class="card-details">
    <img :src="time.escudo" :alt="time.nome" />
    <img id="fotoTecnico" :src="time.imageTecnico" :alt="time.imageTecnico" />
    <img id="fotoTaca" :src="time.taca" :alt="time.taca" />
    <h1 id="nome_time">{{ time.nome }}</h1>
    <p id="tecnico"><strong>Técnico:</strong> {{ time.tecnico }}</p>
    <p id="titulos">{{ time.titulos }}</p>
    <button id="btnVoltar" @click="$emit('fecharDetalhes')">Voltar</button>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Object,
      required: true,
    },
  },
  methods: {
    voltar() {
      console.log("Método voltar chamado");
      console.log(this.$router);
      this.$router.push("/");
    },
  },
};
</script>

<style>
.card-details {
  position: absolute;
  top: 151px;
  left: 410px;
  height: 195px;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid #3c3621;
  border-radius: 4px;
  padding: 30px;
  width: 483px;
  font-family : 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
}

img {
  width: 100px;
  height: 100px;
}

#fotoTecnico {
  position: absolute;
  width: 150px;
  height: 150px;
  margin-top: 20px;
  margin-left: 70px;
}

#nome_time {
  position: absolute;
  text-align: center;
  margin-left: 160px;
  margin-top: -130px;
}

#tecnico {
  position: absolute;
  bottom: 15px;
  right: 190px;
  text-align: center;
}

#fotoTaca{
  position: absolute;
  width: 100px;
  height: 150px;
  margin-left: 255px;
}

#titulos {
  font-size: x-large;
  position: absolute;
  margin-top: 50px;
  margin-left: 400px;
}

#btnVoltar {
  position: absolute;
  margin-top: 180px;
  margin-left: -100px;
   background-color: #3c3621;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

#btnVoltar:hover {
  background-color: #574f3d;
}
</style>
