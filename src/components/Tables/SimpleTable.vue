<template>
  <div>
    <md-table :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" v-for="produit in produits" v-bind:key="produit.Id">
        <md-table-cell md-label="Nom">{{ produit.Nom }}</md-table-cell>
        <md-table-cell
          md-label="Prix Avant Promo"
          id="prix_avant_promo"
        >{{ produit.Prix_avant_Promo }}</md-table-cell>
        <md-table-cell md-label="Prix Apres Promo">{{ produit.Prix_apres_Promo }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-warning" @click="modifier(produit)">Modifier</md-button>

          <md-button class="md-danger" @click="supprimer(produit)">Supprimer</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import api from "../../../api";
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      produits: []
    };
  },
  mounted() {
    api.get("/produits").then(res => {
      this.produits = [...res.data.results];
    });
  },
  methods: {
    modifier(p) {
      this.$router.push({ name: "Modifier Produit", params: { id: p.Id } });
    },
    supprimer(p) {
      console.log(p.Id);
      if (confirm("Voulez vous vraiment supprimer ce produit ?")) {
        console.log("here");
        api.delete(`/produits/${p.Id}`).then(res => {
          this.$router.go();
        });
      }
    }
  }
};
</script>

<style scoped>
#prix_avant_promo {
  text-decoration: line-through;
}
</style>