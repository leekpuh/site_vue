<template>
  <div class="m-shoes">
    <Navbar/>
    <div class="black">
      <h3>Мужская обувь</h3>
    </div>
    <div class="catalog">
      <div class="filter">
        <div class="grouped">
          <h4>Категория</h4>
          <img src="../assets/caret-down-fill.svg">
        </div>
        <hr>
        <selector
            :selected="selected"
            :options="categories"
            @select="sortByCategories" />
        <div class="grouped">
          <h4>Размер</h4>
          <img src="../assets/caret-down-fill.svg">
        </div>
        <hr>
        <selector
            :selected="selected"
            :options="sizes"
            @select="sortBySizes" />
        <div class="grouped">
          <h4>Цена</h4>
          <img src="../assets/caret-down-fill.svg">
        </div>
        <hr>
        <selector
            :selected="selected"
            :options="prices"
            @select="sortByPrices" />
      </div>
      <div class="panel">
        <catalog_item
            v-for="item in filteredProducts" :key="item.imgURL" v-bind:item_data="item" @AddToCart="AddToCart"
        />
      </div>
    </div>
    <vFooter/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import catalog_item from './catalog-item'
import {mapActions, mapGetters} from 'vuex'
import selector from '../components/select'
import vFooter from '../components/footer';


export default {
  name: 'W-Clothes',
  components: {
    Navbar,
    catalog_item,
    selector,
    vFooter
  },
  data() {
    return {
      categories: [
        {name: 'все', value: 'all'},
        {name: 'шлепанцы', value: '1'},
        {name: 'слипоны', value: '2'},
        {name: 'кроссовки', value: '3'},
        {name: 'кеды', value: '4'},
        {name: 'ботинки', value: '5'}
      ],
      sizes: [
        {name: 'все', value: 'all'},
        {name: '38', value: '1'},
        {name: '40', value: '2'},
        {name: '41', value: '3'},
        {name: '42', value: '4'}
      ],
      prices: [
        {name: 'все', value: 'all'},
        {name: '10$ - 30$', value: '1'},
        {name: '31$ - 70$', value: '2'},
        {name: '71$ - 120$', value: '3'}
      ],
      selected: 'Все',
      w_clothes_catalog: [
        {
          imgURL: "ms-1.png",
          title: "Шлепанцы",
          price: 25,
          category: "шлепанцы",
          size: "39",
          price_category: '10$ - 30$'
        },
        {
          imgURL: "ms-2.png",
          title: "Слипоны",
          price: 35,
          category: "слипоны",
          size: "40",
          price_category: '10$ - 30$'
        },
        {
          imgURL: "ms-3.png",
          title: "Кроссовки",
          price: 70,
          category: "кроссовки",
          size: "41",
          price_category: '31$ - 70$'
        },
        {
          imgURL: "ms-4.png",
          title: "Кеды",
          price: 90,
          category: "кеды",
          size: "42",
          price_category: '71$ - 120$'

        },
        {
          imgURL: "ms-5.png",
          title: "Ботинки дерби",
          price: 45,
          category: "ботинки",
          size: "39",
          price_category: '31$ - 70$'
        },
        {
          imgURL: "ms-6.png",
          title: "Кеды котонной вязки",
          price: 120,
          category: "кеды",
          size: "40",
          price_category: '71$ - 120$'
        }
      ],
      sortedProducts: []

    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.w_clothes_catalog
      }
    },
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),
    AddToCart(data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories(category) {
      this.sortedProducts = [];
      let vm = this;
      this.w_clothes_catalog.map(function(item) {
        if (item.category === category.name) {
          vm.sortedProducts.push(item);

        }
      })
    },
    sortBySizes(size) {
      this.sortedProducts = [];
      let vm = this;
      this.w_clothes_catalog.map(function (item) {
        if (item.size === size.name) {
          vm.sortedProducts.push(item);

        }
      })
    },
    sortByPrices(price_category) {
      this.sortedProducts = [];
      let vm = this;
      this.w_clothes_catalog.map(function (item) {
        if (item.price_category === price_category.name) {
          vm.sortedProducts.push(item);

        }
      })
    }
  }

}
</script>