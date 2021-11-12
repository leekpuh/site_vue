<template>
  <div class="w-clothes">
    <Navbar/>
    <div class="black">
      <h3>Женская одежда</h3>
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
        {name: 'топы', value: '1'},
        {name: 'куртки', value: '2'},
        {name: 'платья', value: '3'},
        {name: 'футболки', value: '4'},
        {name: 'жакеты', value: '5'}
      ],
      sizes: [
        {name: 'все', value: 'all'},
        {name: 'XS', value: '1'},
        {name: 'S', value: '2'},
        {name: 'M', value: '3'},
        {name: 'L', value: '4'}
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
          imgURL: "wc-1.png",
          title: "Байковый топ",
          price: 25,
          category: "топы",
          size: "XS",
          price_category: '10$ - 30$'
        },
        {
          imgURL: "wc-2.png",
          title: "Топ с открытыми плечами",
          price: 30,
          category: "топы",
          size: "S",
          price_category: '10$ - 30$'
        },
        {
          imgURL: "wc-3.png",
          title: "Куртка",
          price: 70,
          category: "куртки",
          size: "M",
          price_category: '31$ - 70$'
        },
        {
          imgURL: "wc-4.png",
          title: "Платье",
          price: 90,
          category: "платья",
          size: "S",
          price_category: '71$ - 120$'

        },
        {
          imgURL: "wc-5.png",
          title: "Футболка",
          price: 15,
          category: "футболки",
          size: "M",
          price_category: '10$ - 30$'
        },
        {
          imgURL: "wc-6.png",
          title: "Двубортый жакет",
          price: 120,
          category: "жакеты",
          size: "L",
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

<style>
.grouped {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.filter {
  width: 30%;
  display: flex;
  flex-direction: column;
}
.filter h4 {
  margin-top: 15px;
  margin-left: 15px;

}
.filter img {
  width: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
.catalog {
  display: flex;
  justify-content: space-between;
  padding: 15px;

}
.panel {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}
.black {
  text-align: center;
  color: white;
  background-color: black;
  padding: 10px;
  margin-top: 15px;
}
hr {
  border-bottom: 1px solid black;
  margin: 5px;
}
</style>
