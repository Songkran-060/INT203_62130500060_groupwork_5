app.component('photo-views',{
  props:{
    thaides:{
      type: Array,
      require:true
    },
    'show-images': Boolean,
    'current-index': Number
  },

    /*html*/
    template:
    `
    <div class="grid grid-cols-3 auto-rows-auto gap-10 ">
        <div v-if="showImages"></div>
        <div v-if="showImages">
          <div class="bg-black text-xl rounded font-medium mt-6 py-4 mx-auto my-auto">
            <div class="px-auto">
              <span class="material-icons select-none flex justify-end mt-2 mb-3 mx-1 text-white" @click="hideImg">cancel</span>
              <img class="w-96 h-60 mx-auto" :src="filteredList[currentIndex].url">
            </div>
            <p class="pt-2 text-center text-lg text-white" v-if="showImages"> {{ filteredList[currentIndex].name }} </p>
            <p class="p-2 my-28 text-lg	text-center text-white" v-else>Preview here.</p>
          </div>
        </div>
        <div v-if="showImages"></div>
    </div>
    `,
    methods: {
      hideImg() {
        this.$emit('hideimg',this.showImages);
        }
    }

})