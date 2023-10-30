import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Catergory from "../views/CatergoryPage.vue"
import ProductDetail from "../views/ProductDetail.vue"

const routes =[
  { path: '/',
   component: Home 
  },
  {path:"/catergory/:type",
  component: Catergory, 
  props: true
},
{path:"/:category/:id",
component: ProductDetail, 
props: true
}
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes 
  })

export default router
