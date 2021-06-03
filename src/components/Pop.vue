<template>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" :open="isOpen" @close="closeModal2">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-30"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black opacity-70" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
            <div v-if="confirmation">
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                ¿Estas seguro que deseas borrar este registro?
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  {{description}} <br>
                  {{amount}}
                </p>
              </div>

              <div class="mt-4 space-x-3">
                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  Borrar
                </button>
                  <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal2"
                >
                  Cancelar
                </button>

              </div>
              </div>
              <div v-if="!confirmation">
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                {{description}}
              </DialogTitle>
              <DialogTitle
                as="h3"
                class="text-lg mt-2 font-medium leading-6 text-gray-500"
              >
                {{amount}}
              </DialogTitle>


              <div class="mt-4 space-x-3">
                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="confirmation=true"
                >
                  Borrar
                </button>

                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  
                >
                  Editar
                </button>

              </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

import { ref, computed } from 'vue'
import {useStore} from 'vuex'
export default {
    props: ['id', 'description', 'amount'],
    name: 'Pop',
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle
    
  },

    setup(props) {

        const store = useStore()
        const register_selected = computed(() =>store.state.register_selected)

        let isOpen = ref(true);
        let confirmation = ref(false);
        const closeModal = ()=> {
        store.dispatch('deleteRegister', props.id)
        isOpen.value = false
        }

        const closeModal2 = ()=> {
        store.commit('setRegister_selected', null)
        isOpen.value = false
        }
        const openModal = ()=> isOpen.value = true

        return { isOpen, closeModal, register_selected, openModal, closeModal2, confirmation}
        
    },
}
</script>