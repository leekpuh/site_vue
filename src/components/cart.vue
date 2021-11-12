<template>
  <div class="cart">
    <Navbar/>
    <div class="black">
      <h1>Cart</h1>
    </div>
    <h4 v-if="!cart_data.length">Корзина пуста...</h4>
    <div class="both">
      <cart-item id="item-pan"
          v-for="(item, index) in cart_data"
          :key="item.imgURL"
          :cart_item_data="item"
          @DeleteFromCart="DeleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
      />
      <div class="buy-pan">
        <p id="txt-log">Войдите в систему, чтобы использовать ваши персонализированные предложения.</p>
        <span><img src="../assets/login_2.png" alt="btn"></span>
        <hr>
        <div class="info-buy">
          <div class="t-inf">
            <h5>Стоимость заказа:</h5>
            <h3>{{cartTotalCost}}$</h3>
          </div>
          <div class="b-inf">
            <h5>Доставка:</h5>
            <h3>50$</h3>
          </div>
        </div>
        <hr>
        <div class="bot-inf">
            <h3>Итого к оплате:</h3>
            <h2>{{cartTotalCost+50}}$</h2>
        </div>
        <span><img src="../assets/buy.png" alt="btn"></span>
      </div>
    </div>

  </div>

</template>

<script>
import CartItem from './cart-item'
import {mapActions} from 'vuex'
import Navbar from "@/components/Navbar";
export default {
  name: "cart",
  computed: {
    cartTotalCost() {
      let result = []
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else { return 0 }
    }
  },
  components: {
    Navbar,
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),
     DeleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    }
  }
}
</script>

<style scoped>
span {
  cursor: pointer;
}
.both {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-buy{
  display: flex;
  flex-direction: column;
  width: 60%;
}
.t-inf, .b-inf  {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.bot-inf {
  width: 60%;
  display: flex;
  justify-content: space-between;
}
hr {
  background-color: black;
  width: 100%;
}
#item-pan {
  width: 100%;
  padding-bottom: 10px;
}
.buy-pan{
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 0 10px gray;
  padding-top: 30px;
  margin: 30px 0;
  background-color: lightgray;
}
.buy-pan span {
  padding: 20px 0;
}

</style>