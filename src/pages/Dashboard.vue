<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"></div>
    </div>
  </div>
</template>

<script>
import api from "../../api";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(api.defaults.baseURL);
  }
};
</script>
