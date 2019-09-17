<template>
  <div class="content">
    <div class="md-layout">
      <form>
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Modifier Categorie</h4>
          </md-card-header>

          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Nom</label>
                  <md-input v-model="nom"></md-input>
                </md-field>
              </div>

              <div class="md-layout-item md-size-100">
                <md-field maxlength="5">
                  <label>Description</label>
                  <md-textarea v-model="description"></md-textarea>
                </md-field>
              </div>

              <div class="md-layout-item md-size-100 text-right">
                <md-button class="md-raised md-success" @click="modifier">Modifier le Produit</md-button>
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
  name: "Modifier",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      nom: "",
      description: ""
    };
  },
  mounted() {
    api.get(`/categories/${this.$route.params.id}`).then(res => {
      this.nom = res.data.results[0].Nom_Categeorie;
      this.description = res.data.results[0].description;
    });

    // api.get("/categories").then(res => {
    //   this.categories = [...res.data.results];
    // });
  },
  methods: {
    modifier() {
      let tmp = {
        nom: this.nom,
        description: this.description
      };
      console.log(tmp);
      api.post(`/categories/${this.$route.params.id}`, tmp).then(res => {
        alert("Modifier");
        console.log(res.data);
      });
    }
  }
};
</script>