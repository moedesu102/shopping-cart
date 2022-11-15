<template lang="">
  <div id="#app">
    <div class="container">
      <!-- TITLE : START -->
      <comp-title />
      <!-- TITLE : END -->

      <div class="row">
        <!-- LIST PRODUCT : START -->
        <product-list />
        <!-- LIST PRODUCT : END -->

        <!-- CART : START -->
        <cart-wrapper />
        <!-- CART : END -->
      </div>
      <notifications group="noti" position="bottom right" :duration="2000" />
      <loading :class="{ show: isLoading }" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import CartWrapper from './components/CartWrapper.vue';
import CompTitle from './components/CompTitle.vue';
import Loading from './components/Loading.vue';
import ProductList from './components/ProductList.vue';
export default {
  name: 'app',
  components: {
    CompTitle,
    ProductList,
    CartWrapper,
    Loading,
  },
  computed: {
    ...mapState({
      isLoading: 'isLoading',
    }),
  },
};
</script>
<style>
.notification {
  padding-right: 10px;
  padding-bottom: 10px;
}
</style>
