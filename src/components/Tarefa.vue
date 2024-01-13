
<template>
    <IBox>
        <div class="columns">
            <div class="column is-7">{{ TarefaUm.descricao || 'Tarefa sem descrição' }}</div>

            <div class="column">
                <CronometroUm :tempoEmSegundos="TarefaUm.duracaoEmSegundos" />
            </div> 
        </div>
    </IBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometroUm from './CronometroUm.vue';
import Itarefa from '@/interfaces/ITarefa';
import IBox from './IBox.vue';

export default defineComponent({
    name: 'Tarefa',
    components: {
    CronometroUm,
    IBox
},
props: {
    TarefaUm: {
        type: Object as PropType<Itarefa>,
            required: true
    }
}
})

</script>

<style scoped>
.box {
    background: #faf0ca;
}

</style>