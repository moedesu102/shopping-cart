<template lang="">
  <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h1 class="panel-title">List Products</h1>
      </div>
      <div class="panel-body" id="list-product">
        <!-- PRODUCT : START -->
        <product-item v-for="item in products" :key="item.id" :product="item" />
        <!-- PRODUCT : END -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import ProductItem from './ProductItem.vue';
export default {
  name: 'product-list',
  components: {
    ProductItem,
  },
  computed: {
    ...mapState({
      products: (state) => state.product.productList,
    }),
  },
  methods: {
    plus() {
      this.$store.state.product.count++;
    },
  },
};
</script>
<style lang=""></style>
