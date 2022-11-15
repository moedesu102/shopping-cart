<template lang="">
  <tbody id="my-cart-body">
    <template v-if="listCarts.length">
      <cart-body-item
        v-for="(item, index) in listCarts"
        :key="item.product.id"
        :cart="item"
        :index="index"
      />
    </template>
    <tr v-else>
      <th colspan="6">{{ NOTI_EMPTY_PRODUCT }}</th>
    </tr>
  </tbody>
</template>
<script>
import { mapState } from 'vuex';
import { NOTI_EMPTY_PRODUCT } from '../constants/config';
import CartBodyItem from './CartBodyItem.vue';
export default {
  name: 'cart-body-table',
  components: {
    CartBodyItem,
  },
  data() {
    return {
      NOTI_EMPTY_PRODUCT: NOTI_EMPTY_PRODUCT,
    };
  },
  computed: {
    ...mapState({
      listCarts: (state) => state.cart.listCarts,
    }),
  },
};
</script>
<style lang=""></style>
