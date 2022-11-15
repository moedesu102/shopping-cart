<template lang="">
  <tfoot id="my-cart-footer">
    <!-- CART FOOTER -->
    <tr>
      <td colspan="4">
        There are <b>{{ tFootInfo.countItem }}</b> items in your shopping cart.
      </td>
      <td colspan="2" class="total-price text-left">{{ formatPrice }}</td>
    </tr>
  </tfoot>
</template>
<script>
import { mapGetters } from 'vuex';
import { toCurrency } from '../helpers';
export default {
  name: 'cart-footer',
  computed: {
    ...mapGetters({
      tFootInfo: 'cart/tFootInfo',
    }),
    formatPrice() {
      return toCurrency(this.tFootInfo.totalPrice, 'USD', 'right');
    },
  },
};
</script>
<style lang=""></style>
