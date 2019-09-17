<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Liste des Categories</h4>
            <md-button class="md-info" @click="nouveau">Ajouter Categorie</md-button>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table table-header-color="green">
                <md-table-row
                  slot="md-table-row"
                  v-for="categorie in categories"
                  v-bind:key="categorie.Id"
                >
                  <md-table-cell md-label="Nom">{{ categorie.Nom_Categeorie }}</md-table-cell>

                  <md-table-cell md-label="Action">
                    <md-button class="md-warning" @click="modifier(categorie)">Modifier</md-button>

                    <md-button class="md-danger" @click="supprimer(categorie)">Supprimer</md-button>
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
      categories: []
    };
  },
  mounted() {
    api.get("/categories").then(res => {
      this.categories = [...res.data.results];
    });
  },
  methods: {
    modifier(c) {
      this.$router.push({ name: "Modifier Categorie", params: { id: c.Id } });
    },
    supprimer(c) {
      console.log(c.Id);
      if (confirm("Voulez vous vraiment supprimer cette categorie ?")) {
        api.delete(`/categories/${c.Id}`).then(res => {
          this.$router.go();
        });
      }
    },
    nouveau() {}
  }
};
</script>

<style scoped>
#prix_avant_promo {
  text-decoration: line-through;
}
</style>
