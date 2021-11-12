<template>
  <div class="w-clothes">
    <Navbar/>
    <div class="black">
      <h3>Мужская одежда</h3>
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
        {name: 'толстовки', value: '1'},
        {name: 'футболки', value: '2'},
        {name: 'свитера', value: '3'},
        {name: 'джинсы', value: '4'},
        {name: 'рубашки', value: '5'},
        {name: 'куртки', value: '6'}
      ],
      sizes: [
        {name: 'все', value: 'all'},
        {name: 'S', value: '1'},
        {name: 'M', value: '2'},
        {name: 'L', value: '3'},
        {name: 'XL', value: '4'}
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
          imgURL: "mc-1.png",
          title: "Толстовка",
          price: 25,
          category: "толстовки",
          size: "S",
          price_category: '10$ - 30$'
        },
        {
          imgURL: "mc-2.png",
          title: "Футболка",
          price: 30,
          category: "футболки",
          size: "M",
          price_category: '10$ - 30$'
        },
        {
          imgURL: "mc-3.png",
          title: "Свитер",
          price: 70,
          category: "свитера",
          size: "L",
          price_category: '31$ - 70$'
        },
        {
          imgURL: "mc-4.png",
          title: "Джинсы",
          price: 90,
          category: "джинсы",
          size: "M",
          price_category: '71$ - 120$'

        },
        {
          imgURL: "mc-5.png",
          title: "Рубашка",
          price: 15,
          category: "рубашки",
          size: "L",
          price_category: '10$ - 30$'
        },
        {
          imgURL: "mc-6.png",
          title: "Джинсовая куртка",
          price: 120,
          category: "куртки",
          size: "XL",
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