let initListCarts = JSON.parse(window.localStorage.getItem('cart'));

if (initListCarts && initListCarts.listCarts) {
  initListCarts = initListCarts.listCarts;
} else {
  initListCarts = [];
}

export default {
  listCarts: initListCarts,
};
