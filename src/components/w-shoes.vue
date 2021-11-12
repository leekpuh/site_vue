<template>
  <div class="w-shoes">
    <Navbar/>
    <div class="black">
      <h3>Женская обувь</h3>
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
  name: 'W-Shoes',
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
        {name: 'кроссовки', value: '1'},
        {name: 'босоножки', value: '2'},
        {name: 'лоферы', value: '3'},
        {name: 'туфли', value: '4'},
        {name: 'сапожки', value: '5'}
      ],
      sizes: [
        {name: 'все', value: 'all'},
        {name: '37', value: '1'},
        {name: '38', value: '2'},
        {name: '39', value: '3'},
        {name: '40', value: '4'}
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
          imgURL: "ws-1.png",
          title: "Кроссовки",
          price: 25,
          category: "кроссовки",
          size: "37",
          price_category: '10$ - 30$'
        },
        {
          imgURL: "ws-2.png",
          title: "Босоножки",
          price: 35,
          category: "босоножки",
          size: "38",
          price_category: '31$ - 70$'
        },
        {
          imgURL: "ws-3.png",
          title: "Лоферы",
          price: 70,
          category: "лоферы",
          size: "39",
          price_category: '31$ - 70$'
        },
        {
          imgURL: "ws-4.png",
          title: "Лоферы",
          price: 90,
          category: "лоферы",
          size: "40",
          price_category: '71$ - 120$'

        },
        {
          imgURL: "ws-5.png",
          title: "Туфли",
          price: 15,
          category: "туфли",
          size: "37",
          price_category: '10$ - 30$'
        },
        {
          imgURL: "ws-6.png",
          title: "Полусапожки",
          price: 120,
          category: "сапожки",
          size: "38",
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