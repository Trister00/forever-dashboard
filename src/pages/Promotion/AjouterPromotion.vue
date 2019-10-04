<template>
  <div class="content">
    <div class="md-layout">
      <form>
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Nouvelle Promotion</h4>
            <p class="category"></p>
          </md-card-header>

          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Nom Promo</label>
                  <md-input v-model="nom" required></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Prix Total</label>
                  <md-input v-model="prix_total" type="number" required></md-input>
                </md-field>
              </div>

              <div>
                <md-field>
                  <select v-model="produit" multiple required>
                    <option
                      v-for="option in produits"
                      v-bind:key="option.Id"
                    >{{ option.Nom }}-{{option.Id}}</option>
                  </select>
                </md-field>
              </div>
              <div>{{produit}}</div>
              <div class="md-layout-item md-size-100 text-right">
                <md-button class="md-raised md-success" @click="onSubmit()">Creer la Promotion</md-button>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </form>
    </div>
  </div>
</template>
<script>
import api from "../../../api";
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      produits: [],
      produit: [],
      nom: "",
      prix_total: Number
    };
  },
  mounted() {
    api.get("/produits").then(res => {
      this.produits = [...res.data.results];
    });
  },
  methods: {
    onSubmit() {
      let tmp = [];
      this.produit.map(item => {
        let t = item.split("-");
        tmp = [...tmp, parseInt(t[1])];
      });
      let ob = {
        nom: this.nom,
        prix_total: this.prix_total,
        produit: tmp
      };
      api
        .post("/promotion", ob)
        .then(res => {
          alert("Promotion ajoute avec succes");
          this.$router.go();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>