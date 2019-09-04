<template>
  <v-container>
    <v-card
      width="450"
      :height="cardData.position ? '' : '210'"
      class="mx-auto credit-card"
      style="background-color:#191970;color: #fff"
    >
      <div v-if="cardData.position">
        <v-layout row wrap class="card-row">
          <v-flex xs6>
          </v-flex>
          <v-flex xs6 class="text-lg-right">
            <h4>{{ cardData.type || '' }}</h4>
          </v-flex>
        </v-layout>

        <v-layout row wrap class="card-row">
          <v-flex xs12 class="text-lg-center">
            <h2>{{ cardData.number || 'XXXX-XXXX-XXXX-XXXX' }}</h2>
          </v-flex>
        </v-layout>

        <v-layout row wrap class="card-row">
          <v-flex xs8 class="text-lg-center">
            <h2>{{ cardData.name || 'SEU NOME AQUI' }}</h2>
          </v-flex>
          <v-flex xs4 class="text-lg-center">
            <h2>{{ cardData.validate || 'XX/XX' }}</h2>
          </v-flex>
        </v-layout>
      </div>
      <div v-else>
        <v-layout row wrap style="border: 15px solid black">
        </v-layout>
        <v-layout row wrap class="card-row">
          <v-flex xs12 class="text-lg-right">
            <h2>{{ cardData.cvv || '' }}</h2>
          </v-flex>
        </v-layout>
      </div>
    </v-card>
    <v-card
    max-width="600"
    class="mx-auto"
    style="padding: 1%"
    >
    <v-layout>
      <v-flex xs12>
        <v-text-field
          v-model="cardData.number"
          label="Número do cartão"
          outlined
          v-mask="mask.credit_card"
          placeholder="XXXX-XXXX-XXXX-XXXXX"
          append-icon="mdi-credit-card"
          @focus="cardData.position = true"
          @keyup="buscarBandeira()"
        ></v-text-field>
        <v-text-field
          v-model="cardData.name"
          label="Titular do cartão"
          outlined
          append-icon="mdi-account"
          @focus="cardData.position = true"
        ></v-text-field>
        <v-layout>
          <v-flex xs5>
            <v-text-field
              v-model="cardData.validate"
              label="Validade"
              outlined
              v-mask="mask.date"
              placeholder="XX/XX"
              append-icon="mdi-calendar"
              @focus="cardData.position = true"
            ></v-text-field>
          </v-flex>
          <v-flex xs2></v-flex>
          <v-flex xs5>
            <v-text-field
              v-model="cardData.cvv"
              label="CVV"
              outlined
              v-mask="mask.cvv"
              placeholder="XXXX"
              append-icon="mdi-numeric"
              @focus="cardData.position = false"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs4></v-flex>
          <v-flex xs4>
            <v-btn color="primary" block>
              Pagar
            </v-btn>
          </v-flex>
          <v-flex xs4></v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
  </v-container>
</template>

<script>
import { mask } from 'vue-the-mask'
import cardValidator from 'card-validator'
export default {
  directives: { mask },
  data: () => ({
    mask: {
      credit_card: '####-####-####-#######',
      date: '##/##',
      cvv: '####',
    },
    cardData: {
      type: '',
      number: '',
      name: '',
      validate: '',
      cvv: '',
      position: true
    }
  }),
  methods: {
    buscarBandeira() {

      const bandeira = cardValidator.number(this.cardData.number);

      if(!bandeira.card){
        this.cardData.type = ''
      }

      if (bandeira.card) {
        this.cardData.type = bandeira.card.niceType;
      }
    }
  }
};
</script>

<style scoped>
.credit-card{
  padding: 1.5%;
  margin: 1%;
  border-radius: 10px;
}
.card-row{
  margin: 8% 0 0 0;
}
</style>
