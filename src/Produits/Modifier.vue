<template>
  <div class="content">
    <div class="md-layout">
      <form>
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Modifier Produit</h4>
            <p class="category"></p>
          </md-card-header>

          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Nom</label>
                  <md-input v-model="nom"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Prix Avant Promo</label>
                  <md-input v-model="prix_avant_promo" type="number"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Prix Apres Promo</label>
                  <md-input v-model="prix_apres_promo" type="number"></md-input>
                </md-field>
              </div>
              <div>
                <md-field>
                  <select v-model="categorie">
                    <option
                      v-for="option in categories"
                      v-bind:value="option.Id"
                      v-bind:key="option.Id"
                    >{{ option.Nom_Categeorie }}</option>
                  </select>
                </md-field>
              </div>
              <div class="img-container">
                <img :src="image" alt="image_produit" class="img-thumbnail" />
              </div>
              <div class="md-layout-item md-size-100">
                <md-field maxlength="5">
                  <label>Description</label>
                  <md-textarea v-model="description"></md-textarea>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100">
                <md-field maxlength="5">
                  <label>Utilisation</label>
                  <md-textarea v-model="utilisation"></md-textarea>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100 text-right">
                <md-button class="md-raised md-success">Modifier le Produit</md-button>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </form>
    </div>
  </div>
</template>
<script>
import api from "../../api";
export default {
  name: "Modifier",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      produit: [],
      categories: [],
      selected: "",
      nom: "",
      categorie: "",
      prix_avant_promo: Number,
      prix_apres_promo: Number,
      description: "",
      utilisation: "",
      image: ""
    };
  },
  mounted() {
    api.get(`/produits/${this.$route.params.id}`).then(res => {
      this.produit = [...res.data.results];
      //   console.log(JSON.parse(JSON.stringify(this.produit)));
      //   console.log(res.data.results[0].Nom);
      this.nom = res.data.results[0].Nom;
      this.categorie = res.data.results[0].Id_Categorie;
      this.prix_avant_promo = res.data.results[0].Prix_avant_Promo;
      this.prix_apres_promo = res.data.results[0].Prix_apres_Promo;
      this.description = res.data.results[0].Description;
      this.utilisation = res.data.results[0].utilisation;
      this.image = `${api.defaults.baseURL}/${res.data.results[0].Image}`;
    });

    api.get("/categories").then(res => {
      this.categories = [...res.data.results];
    });
  }
};
</script>
<style >
.img-thumbnail {
  object-fit: contain;
}
.img-container {
  width: 150px;
  height: 150px;
}
</style>