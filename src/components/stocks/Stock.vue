<template>
    <v-flex class="pr-3 pb-3">
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{stock.name}} <small>Preço: {{stock.price | currency}}</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade"
                              type="number"
                              :error="insufficientFunds"
                              v-model.number="quantity"></v-text-field>
                <v-btn class="green darken-3 white--text"
                       :disabled=" insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                       @click="buyStock">{{insufficientFunds ? 'Insuficiente' : 'Comprar'}}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            };
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            ...mapActions({buyStockAction: 'buyStock'}),
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity

                };
                // this.$sotre.dispach('buyStock', order)
                this.buyStockAction(order);
                this.quantity = 0;
            }
        }
    };
</script>

<style>

</style>