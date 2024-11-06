<template>
  <div>
    <RouterLink to="/" style="display: none;"></RouterLink>
  
    <RouterView></RouterView>
  </div>
</template>


<script>
import { RouterView, RouterLink } from 'vue-router';

export default {
  name: 'App', 
  components: {
    RouterView, 
    RouterLink  
  }
};
</script>


<style lang="scss" scoped>

</style>
