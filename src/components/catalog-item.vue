<template>
<div class="catalog-item">
  <img class="catalog-item_img" :src="require('../assets/' + item_data.imgURL)" alt="img">
  <h5 class="catalog-item_title">{{item_data.title}}</h5>
  <p class="catalog-item_price">{{item_data.price}}$</p>
  <button class="catalog-item__add_to_cart_btn btn" @click="AddToCart">
    <img src="../assets/Add.png" alt="add"></button>
</div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
      item_data: {
        type: Object,
        default() {
        return {}
        }
      }
    },
    data() {
      return {}
    },
  computed: {},
  methods: {
    AddToCart() {
      this.$emit('AddToCart', this.item_data)
    }
  }
}
</script>

<style scoped>
.catalog-item {
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.catalog-item_img {
  width: 340px;
}
</style>