<template>
        
        <div class="flex flex-col py-2 border rounded-lg shadow-md place-content-between hover:border-2 hover:border-gray-500" v-bind:class="[class_bg ? class_bg : class_default_bg]">
        
        <div class="p-2 text-2xl font-semibold text-black name">
            {{name}}
        </div>
       
        <div class="px-3 py-2 font-semibold amount place-self-end" v-bind:class="{ negative: amount<0 }">
            {{amount}}
        </div>
        </div>
    
</template>
<script>
import {computed} from 'vue'
export default {
    props : ['name', 'amount', 'color', 'intensity'],
    setup(props) {
        const name = computed(()=>{
            const lower = props.name.toLowerCase()
            return lower[0].toUpperCase() + lower.slice(1)
        })
                
        const amount = Number(props.amount)
        const color = props.color
        const intensity = props.intensity
        const class_default_bg = 'bg-white'
        
        const class_bg = computed(()=> {
            if (color && intensity) {
                return `bg-${color}-${intensity}`
            }else{
                return null
            }
        })
        
        return {name,amount, class_bg, class_default_bg}
        
    },
}
</script>
<style scoped>
.negative {
  color: #EF4444;
  background: #FEE2E2;
  margin-left: 0.5rem;
  margin-bottom : 0.1rem;
  border-radius: 8px;
  padding-left: 0.3rem;
  padding-right:0.3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-width: 1px;
  border-color: #EF4444;
  
}
</style>