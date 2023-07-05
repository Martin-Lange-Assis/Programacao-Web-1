import { createRouter, createWebHistory } from 'vue-router';
import Tabela from './components/Tabela.vue';
import CardDetails from './components/CardDetails.vue';

const routes = [
    { path: '/', component: Tabela },
    { path: '/time/:id', component: CardDetails },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
