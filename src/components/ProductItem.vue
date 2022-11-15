<template lang="">
  <div class="media product">
    <div class="media-left">
      <a href="#">
        <img class="media-object" :src="urlImage" alt="charmander" />
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{ product.name }}</h4>
      <p>
        {{ product.summary }}
      </p>
      <template v-if="product.canBuy">
        <input
          v-model="quantity"
          name="quantity-product-1"
          type="number"
          value="1"
          min="1"
        />
        <a @click.prevent="handleBuyProduct" href="#" class="price">
          {{ formatPrice }}
        </a>
      </template>
      <span v-else class="price">{{ formatPrice }}</span>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { NOTI_GREATER_THAN_ONE, NOTI_ACT_ADD } from '../constants/config';
import { toCurrency, validateQuantity } from '../helpers';
export default {
  name: 'product-item',
  data() {
    return {
      quantity: 1,
    };
  },
  props: {
    product: {
      type: Object,
      default: {},
    },
  },
  computed: {
    urlImage() {
      return '/dist/images/' + this.product.image;
    },
    formatPrice() {
      return toCurrency(this.product.price, 'USD', 'right');
    },
  },
  methods: {
    ...mapActions({
      actBuyProduct: 'cart/actBuyProduct',
    }),
    handleBuyProduct() {
      const check = validateQuantity(this.quantity);
      if (check) {
        let numQuantity = parseInt(this.quantity);
        let data = {
          product: this.product,
          quantity: numQuantity,
        };
        this.actBuyProduct(data);
        this.$notify(NOTI_ACT_ADD);
      } else {
        this.$notify(NOTI_GREATER_THAN_ONE);
      }
    },
  },
};
</script>
<style lang=""></style>
