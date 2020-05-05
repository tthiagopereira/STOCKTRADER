<template>
    <v-toolbar app>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat to="/">Inicio</v-btn>
            <v-btn flat to="/portfolio">Portfólio</v-btn>
            <v-btn flat to="/stocks">stocks</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat @click="endDay">Finalizar o dia</v-btn>
            <v-menu offset-y>
                <v-btn flat slot="activator">Salvar & carregar</v-btn>
                <v-list>
                    <v-list-tile @click="saveData">
                        <v-list-tile-title>Salvar dados</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="loadDataLocal">
                        <v-list-tile-title>Carregar dados</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar-items>
        <v-layout align-center>
            <span class="text-uppercase grey--text text--darken-2">
                Saldo: {{funds | currency}}
            </span>
        </v-layout>
    </v-toolbar>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        },
        methods: {
            ...mapActions(['randomizeStocks','loadData']),
            endDay() {
                this.randomizeStocks()
            },
            saveData() {
                const { funds, stockPortfolio, stocks} = this.$store.getters
                this.$http.put('data.json', {funds, stockPortfolio, stocks})
            },
            loadDataLocal() {
                this.loadData()
            }
        }
    }
</script>

<style>

</style>