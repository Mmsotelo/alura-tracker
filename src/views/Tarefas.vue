<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <IBox v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </IBox>
        <Tarefa v-for="(TarefaUm, index) in tarefas" :key="index" :TarefaUm="TarefaUm" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import Itarefa from '../interfaces/ITarefa'
import IBox from '../components/IBox.vue';

export default defineComponent({
    name: 'App',
    components: {
        Formulario,
        Tarefa,
        IBox
    },
    data() {
        return {
            tarefas: [] as Itarefa[],
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(TarefaUm: Itarefa) {
            this.tarefas.push(TarefaUm)
        }
    }
});
</script>
  
  