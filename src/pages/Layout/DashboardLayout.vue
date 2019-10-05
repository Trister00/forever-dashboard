<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>Liste de Produits</p>
      </sidebar-link>

      <sidebar-link to="/list_categories">
        <md-icon>notifications</md-icon>
        <p>List Categories</p>
      </sidebar-link>
      <sidebar-link to="/list_promotions">
        <md-icon>notifications</md-icon>
        <p>List Promotions</p>
      </sidebar-link>
      <sidebar-link to="/commandes_promo">
        <md-icon>notifications</md-icon>
        <p>Commandes Promos</p>
      </sidebar-link>
      <sidebar-link to="/list_commandes">
        <md-icon>notifications</md-icon>
        <p>List Commandes</p>
      </sidebar-link>
      <sidebar-link to="/list_entrepreneurs">
        <md-icon>notifications</md-icon>
        <p>List Entrepreneurs</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content></dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  mounted() {
    if (localStorage.getItem("userInfo") === null) {
      this.$router.push("/login");
    }
  }
};
</script>
