<template lang="">
  <tr>
    <th scope="row">{{ index + 1 }}</th>
    <td>{{ product.name }}</td>
    <td>{{ formatPrice }}</td>
    <td>
      <input
        name="cart-item-quantity-1"
        @blur="handleUpdate"
        type="number"
        :value="cart.quantity"
        min="1"
      />
    </td>
    <td>
      <strong>{{ formatTotal }}</strong>
    </td>
    <td>
      <a @click.prevent="" class="label label-info update-cart-item" href="#">
        Update
      </a>
      <a
        @click.prevent="handleDelete"
        class="label label-danger delete-cart-item"
        href="#"
      >
        Delete
      </a>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
import {
  NOTI_ACT_DELETE,
  NOTI_ACT_UPDATE,
  NOTI_GREATER_THAN_ONE,
} from '../constants/config';
import { toCurrency, validateQuantity } from '../helpers';
export default {
  name: 'cart-body-item',
  props: {
    cart: {
      type: Object,
      default: {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    product() {
      return this.cart.product;
    },
    formatPrice() {
      return toCurrency(this.product.price, 'USD', 'right');
    },
    formatTotal() {
      return toCurrency(
        this.product.price * this.cart.quantity,
        'USD',
        'right'
      );
    },
  },
  methods: {
    ...mapActions({
      actDeleteCart: 'cart/actDeleteCart',
      actUpdateQuantity: 'cart/actUpdateQuantity',
      setLoading: 'setLoading',
    }),
    handleDelete() {
      if (confirm('Are you sure delete this item')) {
        this.actDeleteCart(this.cart);
        this.$notify(NOTI_ACT_DELETE);
      }
    },
    handleUpdate(e) {
      this.setLoading(true);
      setTimeout(() => {
        let quantity = e.target.value;
        const check = validateQuantity(quantity);
        if (check) {
          let data = {
            cartUpdate: this.cart,
            quantity: parseInt(quantity),
          };
          this.actUpdateQuantity(data);
          this.$notify(NOTI_ACT_UPDATE);
        } else {
          e.target.value = this.cart.quantity;
          this.$notify(NOTI_GREATER_THAN_ONE);
        }
        this.setLoading(false);
      }, 1000);
    },
  },
};
</script>
<style lang=""></style>
