<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Liste des Commandes</h4>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table table-header-color="green">
                <md-table-row slot="md-table-row" v-for="pan in panier" v-bind:key="pan.Id">
                  <md-table-cell md-label="Nom">Num: 0{{ pan.Id_client }}</md-table-cell>
                  <md-table-cell md-label="Nom">{{ pan.Nom }}</md-table-cell>
                  <md-table-cell md-label="Nom">Qte : {{ pan.Quantite }}</md-table-cell>
                  <md-table-cell md-label="Nom">Cout : {{ pan.Cout_total }}</md-table-cell>
                  <md-table-cell md-label="adresse">Adresse : {{ pan.Adresse }}</md-table-cell>

                  <md-table-cell md-label="Action">
                    <!-- <md-button class="md-info">Visualiser</md-button>
                    <md-button class="md-warning" @click="modifier(promo)">Modifier</md-button>

                    <md-button class="md-danger" @click="supprimer(promo)">Supprimer</md-button>-->
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../../api";
export default {
  data() {
    return {
      panier: []
    };
  },
  mounted() {
    api.get("/panier").then(res => {
      this.panier = [...res.data.results];
    });
  },
  methods: {
    modifier(p) {
      this.$router.push({ name: "Modifier Promo", params: { id: c.Id } });
    },
    supprimer(p) {
      console.log(c.Id);
      if (confirm("Voulez vous vraiment supprimer cette Promo ?")) {
        api.delete(`/categories/${c.Id}`).then(res => {
          this.$router.go();
        });
      }
    },
    nouveau() {
      this.$router.push({ name: "Ajouter Promotion" });
    }
  }
};
</script>

<style scoped>
#prix_avant_promo {
  text-decoration: line-through;
}
</style>
