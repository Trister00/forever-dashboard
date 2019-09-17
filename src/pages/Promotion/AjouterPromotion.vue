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
                  <md-input v-model="nom"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Prix Total</label>
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
                {{categorie}}
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <md-input type="file" id="file" ref="myFiles" @change="onSelect"></md-input>
                </md-field>
              </div>
              {{message}}
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
                <md-button class="md-raised md-success" @click="onSubmit()">Ajouter le Produit</md-button>
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
      produit: [],
      categories: [],
      nom: "",
      categorie: "",
      prix_avant_promo: Number,
      prix_apres_promo: Number,
      description: "",
      utilisation: "",
      message: "",
      file: ""
    };
  },
  mounted() {
    api.get("/categories").then(res => {
      this.categories = [...res.data.results];
    });
  },
  methods: {
    onSelect(e) {
      this.file = e.target.files[0];
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);

      let tmp = {
        nom: this.nom,
        categorie: this.categorie,
        prix_avant_promo: this.prix_avant_promo,
        prix_apres_promo: this.prix_apres_promo,
        description: this.description,
        utilisation: this.utilisation
      };
      formData.append("produit", JSON.stringify(tmp));
      console.log(JSON.parse(formData.get("produit")));
      try {
        await api.post("/produits", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        this.message = "success";
      } catch (err) {
        console.log(err);
        this.message = " error";
      }
    }
  }
};
</script>