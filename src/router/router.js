import VueRouter from 'vue-router'

import Main from '../components/main'
import W_clothes from '../components/w-clothes'
import M_clothes from '../components/m-clothes'
import W_shoes from '../components/w-shoes'
import M_shoes from '../components/m-shoes'
import Cart from '../components/cart'

export default new VueRouter(
    {
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Main
            },
            {
                path: '/w_clothes',
                component: W_clothes,
                name: 'w_clothes',
                props: true

            },
            {
                path: '/m_clothes',
                component: M_clothes
            },
            {
                path: '/w_shoes',
                component: W_shoes
            },
            {
                path: '/m_shoes',
                component: M_shoes
            },
            {
                path: '/cart',
                component: Cart,
                name: 'cart',
                props: true
            }
        ]
    }
)

