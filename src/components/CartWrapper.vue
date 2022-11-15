<template lang="">
  <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h1 class="panel-title">Your Cart</h1>
      </div>
      <div class="panel-body">
        <table class="table">
          <cart-header />
          <cart-body-table />
          <cart-footer />
        </table>
      </div>
    </div>
    <!-- <notify /> -->
  </div>
</template>
<script>
import CartHeader from './CartHeader.vue';
import CartBodyTable from './CartBodyTable.vue';
import CartFooter from './CartFooter.vue';
// import Notify from './Notify.vue';
export default {
  name: 'cart-wrapper',
  components: {
    CartHeader,
    CartBodyTable,
    CartFooter,
    // Notify,
  },
};
</script>
<style lang=""></style>
