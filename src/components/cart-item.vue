<template>
  <div class="cart-item">
    <div class="cards">
      <img class="cart-item_img" :src="require('../assets/' + cart_item_data.imgURL)" alt="img">
      <div class="card-info">
        <h6>{{cart_item_data.title}}</h6>
        <h3>{{cart_item_data.price}}$</h3>
      </div>

      <div class="del-qua">
        <span class="cart-item_del" @click="DeleteFromCart"><img src="../assets/delete.png" alt="del"></span>
        <div class="cart-item_quantity">
          <span class="bt" @click='decrementItem'>-</span>
          <div class="qua"> {{cart_item_data.quantity}}</div>
          <span class="bt" @click='incrementItem'>+</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "cart-item",
  methods: {
    DeleteFromCart() {
      this.$emit('DeleteFromCart')
    },
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    }
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
    },
    mounted() {
      this.$set(this.cart_item_data, 'quantity', 1)
    }
}

</script>

<style >
.card-info{
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 15px;
  flex-wrap: wrap;
}
.cart-item {
  display: flex;
  justify-content: center;
}
.cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 10px gray;
  width: 80%;
  padding: 10px 20px;
  margin-top: 20px;
}
.cart-item_img {
  max-width: 100px;
}
.cart-item_quantity {
  display: flex;
  height: 40px;
  box-shadow: 0 5px 10px gray;
}
.bt {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 1px solid black;

}
.qua {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  width: 60px;
  border: 1px solid black;
}
.cart-item_del
{
  width: 40px;
  cursor: pointer;
  padding-bottom: 20px;
}
.del-qua {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
}


</style>