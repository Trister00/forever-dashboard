<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Liste des Produits</h4>
            <md-button class="md-info" @click="nouveau">Nouveau Produit</md-button>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";
import api from "../../api";

export default {
  components: {
    OrderedTable,
    SimpleTable
  },
  methods: {
    nouveau() {
      this.$router.push("nouveau_produit");
    }
  }
};
</script>
