import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import ProjetosUm from '../views/ProjetosUm.vue'

const rotas: RouteRecordRaw[] = [
    {
    path: '/',
    name: 'tarefas',
    component: Tarefas
}, {
    path:'/projetos',
    name:'ProjetosUm',
    component: ProjetosUm
},
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})


export default roteador;

