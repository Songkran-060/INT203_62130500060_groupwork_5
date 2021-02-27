app.component('photo-searchs',{
  props:{
    thaides:{
      type: Array,
      require:true
    }
  },

    /*html*/
    template:
    `
    <div class="text-right">
    <div v-if="searchBoxOpen" class="inline-block">
      <input v-model="inputs" @input="search" placeholder="Searching ... " class="border w-64 px-2">
      <button @click="switchSearch" class="ml-2 bg-red-500 text-white py-1 px-2 rounded">Cancle</button>
    </div>
    <i v-else="searchBoxOpen" class="material-icons inline-block text-2xl align-text-bottom select-none" @click="switchSearch">search</i>
    </div>
    `,
    data(){
      return {
        inputs: '',
        searchBoxOpen: false
      }
    },
    methods: {
      switchSearch() {
        this.searchBoxOpen = !this.searchBoxOpen
        this.inputs = ''
        this.$emit('search',this.inputs)
      },
      search() {
        this.$emit('search', this.inputs)
      }
    }

})