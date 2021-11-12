<template>
  <div class="Navbar">
    <div class="logo">
      <a href="#"><img src="../assets/logo.png" width="230px" @click="$router.push('/')"></a>
    </div>
    <div class="top">
      <b-navbar toggleable="md" id="navbar-style">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="left-icons">
            <b-nav-item href="#" id="menu-text" @click="$router.push('/')">Главная</b-nav-item>
            <b-nav-item-dropdown text="Одежда" id="menu-text">
              <b-dropdown-item href="#" @click="$router.push('/w_clothes')">Для неё</b-dropdown-item>
              <b-dropdown-item href="#" @click="$router.push('/m_clothes')">Для него</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Обувь" id="menu-text">
              <b-dropdown-item href="#" @click="$router.push('/w_shoes')">Для неё</b-dropdown-item>
              <b-dropdown-item href="#" @click="$router.push('/m_shoes')">Для него</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>

        <div class="right-icons">
          <a href="#"><img src="../assets/login.png" width="30px" height="30px" ></a>
          <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <a href="#"><img src="../assets/shop.png" width="30px" height="30px" alt="">{{CART.length}}</a>
          </router-link>
        </div>

      </b-navbar>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'navbar',
  components: {
  },
  data() {
    return{}
  },
  computed: {
    ...mapGetters ([
        'CART'
    ])
  }
}
</script>

<style>
.top {
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  font-size: 20px;
}
.right-icons {
  width: 100px;
  display: flex;
  justify-content: space-around;
  margin-right: 15px;
}
#menu-text {
  margin: 0px 15px;
}
.left-icons {
  width: 100%;
  justify-content: center;
  margin-left: 130px;
}
#navbar-style {
  padding: 0px;
}
.logo {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}
</style>