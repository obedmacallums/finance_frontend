<template>
    
    <div class="border rounded-lg shadow-md hover:border-2 hover:border-gray-500" v-bind:class="[class_bg ? class_bg : class_default_bg]">
        
        <div class="p-3 text-2xl font-semibold text-black description">
            {{description}}
        </div>
       
      <div class="flex p-3 place-content-between ">   
    
        <div class="item">
            {{item}}
        </div>
        <div class="font-semibold amount">
            {{amount}}
        </div>

        </div>

    </div>

</template>

<script>
import {computed} from 'vue'

export default {
    props : ['description', 'amount', 'item', 'color', 'intensity'],

    setup(props) {

        const description = props.description
        const amount = props.amount
        const item = props.item
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
        
        return {description,amount, item, class_bg, class_default_bg}
        
    },
}
</script>

