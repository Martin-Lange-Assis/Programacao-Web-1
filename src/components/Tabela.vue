<template>
  <div>
    <table class="tabela">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Time</th>
          <th>Pts</th>
          <th>J</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>GP</th>
          <th>GC</th>
          <th>SG</th>
          <th>%</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in times" :key="time.posicao">
          <td>{{ time.posicao }}</td>
          <td class="nome-time" @click="exibirDetalhes(time)" >{{ time.nome }}</td>
          <td>{{ time.pontos }}</td>
          <td>{{ time.jogos }}</td>
          <td>{{ time.vitorias }}</td>
          <td>{{ time.empates }}</td>
          <td>{{ time.derrotas }}</td>
          <td>{{ time.gp }}</td>
          <td>{{ time.gc }}</td>
          <td>{{ time.sg }}</td>
          <td>{{ time.perc }}</td>
        </tr>
      </tbody>
    </table>
    <CardDetails
      v-if="timeSelecionado"
      :time="timeSelecionado"
      @fecharDetalhes="fecharDetalhes"
    />
  </div>
</template>

<script>
import CardDetails from "./CardDetails.vue";
export default {
  data() {
    return {
      times: [
        {
          posicao: 1,
          nome: "Fluminense",
          pontos: 10,
          jogos: 6,
          vitorias: 3,
          empates: 1,
          derrotas: 2,
          gp: 10,
          gc: 6,
          sg: 4,
          perc: 55,
          tecnico: "Fernando Diniz",
          imageTecnico: "/img/fernando-diniz.png",
          escudo: "/img/escudo-fluminense.png",
          taca: "/img/taca-libertadores.png",
          titulos: 0,
        },
        {
          posicao: 2,
          nome: "River Plate",
          pontos: 10,
          jogos: 6,
          vitorias: 3,
          empates: 1,
          derrotas: 2,
          gp: 11,
          gc: 11,
          sg: 0,
          perc: 55,
          tecnico: "Martín Demichelis",
          imageTecnico: "/img/martin-demichelis.png",
          escudo: "/img/escudo-river-plate.png",
          taca: "/img/taca-libertadores.png",
          titulos: 4,
        },
        {
          posicao: 3,
          nome: "Sporting Cristal",
          pontos: 8,
          jogos: 6,
          vitorias: 2,
          empates: 2,
          derrotas: 2,
          gp: 8,
          gc: 10,
          sg: -2,
          perc: 44,
          tecnico: "Tiago Nunes",
          imageTecnico: "/img/tiago-nunes.png",
          escudo: "/img/escudo-sporting-cristal.png",
          taca: "/img/taca-libertadores.png",
          titulos: 0,
        },
        {
          posicao: 4,
          nome: "The Strongest",
          pontos: 6,
          jogos: 6,
          vitorias: 2,
          empates: 0,
          derrotas: 4,
          gp: 5,
          gc: 7,
          sg: -2,
          perc: 33,
          tecnico: " Claudio Biaggi",
          imageTecnico: "/img/claudio-biaggi.png",
          escudo: "/img/escudo-the-strongest.png",
          taca: "/img/taca-libertadores.png",
          titulos: 0,
        },
      ],
      timeSelecionado: null,
    };
  },
  components: {
    CardDetails,
  },
  methods: {
    exibirDetalhes(time) {
      this.timeSelecionado = time;
    },
    fecharDetalhes() {
      this.timeSelecionado = null;
    },
  },
};
</script>

<style>
.tabela {
  width: 100%;
  border-collapse: collapse;
}

.tabela th,
.tabela td {
  font-family : 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
  border-bottom: 3px solid black;
  padding: 8px;
  text-align: left;
}

.tabela th {
  color: rgb(138, 118, 4);
}

.tabela td {
  background-color: #3c3621;
}

.nome-time {
  cursor: pointer;
}

.nome-time:hover {
  text-decoration: underline;
}
</style>
