<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Liste des Entrepreneurs</h4>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table table-header-color="green">
                <md-table-row slot="md-table-row" v-for="ent in entrepreneurs" v-bind:key="ent.Id">
                  <md-table-cell md-label="Nom">Nom : {{ ent.Nom }}</md-table-cell>
                  <md-table-cell md-label="Nom">Num : 0{{ ent.Numero_tel }}</md-table-cell>
                  <md-table-cell md-label="Nom">Email : {{ ent.Email }}</md-table-cell>
                  <md-table-cell md-label="Nom">Message : {{ ent.Message }}</md-table-cell>
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
      entrepreneurs: []
    };
  },
  mounted() {
    api.get("/entrepreneurs").then(res => {
      this.entrepreneurs = [...res.data.results];
    });
  },
  methods: {}
};
</script>

<style scoped>
</style>
