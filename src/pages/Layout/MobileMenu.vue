<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <md-field>
        <label>Search</label>
        <md-input v-model="search" type="text"></md-input>
      </md-field>
    </li>
    <li>
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons">dashboard</i>
        <p>Dashboard</p>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      search: null
    };
  }
};
</script>
