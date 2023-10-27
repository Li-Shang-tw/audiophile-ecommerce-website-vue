import { defineStore } from 'pinia'
import data from "../data.json"
export const useProductsStore = defineStore('products', {
  state: () => { 
    return{
      products:data
    }
      
   },
   getters: {
    getHeadphones(){
      return this.products.filter((item)=>item.category==='headphones')  ;
    },
    getSpeakers(){
      return this.products.filter((item)=>item.category==='speakers')  ;
    },
    getEarphones(){
      return this.products.filter((item)=>item.category==='earphones')  ;
    }

  },
  })