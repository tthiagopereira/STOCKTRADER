<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e consulte suas Ações</h1>
        <v-sheet :elevation="6" class="pa-2" color="primary">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text">Você pode salvar e carregar os dados</span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-2 mt-3 success" color="primary">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text">Clique em finalizar para iniciar um novo dia !</span>
        </v-sheet>
        <v-divider class="my-4" />
        <p class="display-1"><strong>Seu saldo: {{funds | currency}}</strong></p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }
</script>

<style>

</style>