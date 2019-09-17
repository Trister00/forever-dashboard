import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import Modifier from "../Produits/Modifier.vue";
import Nouveau from "../Produits/Nouveau.vue";

//Categories
import AjouterCategorie from "../pages/Categories/AjouterCategorie.vue";
import ListCategories from "../pages/Categories/ListCategories.vue";
import ModifierCategorie from "../pages/Categories/ModifierCategorie.vue";

//Promotion

import ListPromotion from "../pages/Promotion/ListPromotion.vue";
import AjouterPromotion from "../pages/Promotion/AjouterPromotion.vue";
import ModifierPromotion from "../pages/Promotion/ModifierPromotion.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      ,
      {
        path: "modifier_produit/:id",
        name: "Modifier Produit",
        component: Modifier
      },
      {
        path: "nouveau_produit",
        name: "Nouveau Produit",
        component: Nouveau
      },
      {
        path: "list_categories",
        name: "List Categories",
        component: ListCategories
      },
      {
        path: "ajouter_categorie",
        name: "Ajouter Categorie",
        component: AjouterCategorie
      },
      {
        path: "modifier_categorie/:id",
        name: "Modifier Categorie",
        component: ModifierCategorie
      },
      {
        path: "modifier_promotion/:id",
        name: "Modifier Promotion",
        component: ModifierPromotion
      },
      {
        path: "list_promotions",
        name: "List Promotion",
        component: ListPromotion
      },
      {
        path: "ajouter_promotion",
        name: "Ajouter Promotion",
        component: AjouterPromotion
      }
    ]
  }
];

export default routes;