app.component('photo-searchs',{
    /*html*/
    template:
    `<div class="mb-8 grid grid-cols-2 grid-rows-1">
    <div class="text-3xl font-bold inline-block">Thai Dessert ( {{countLike}} )</div>
    <div class="text-right">
      <div v-if="searchBoxOpen" class="inline-block">
        <input v-model="inputs" placeholder="Searching ... " class="border w-64 px-2">
        <button @click="switchSearch" class="ml-2 bg-red-500 text-white py-1 px-2 rounded">Cancle</button>
      </div>
      <i v-else="searchBoxOpen" class="material-icons inline-block text-2xl align-text-bottom select-none"
        @click="switchSearch">search</i>
    </div>
  </div>`,
  data() {
    return {
      thaides: [{name: 'Bu Lan Dan Mek',url: './images/1.jpg',isLike: false},
                {name: 'Bu Lan Dan Mhok',url: './images/2.jpg',isLike: false},
                {name: 'Ja Mong Kut (Original)',url: './images/3.jpg',isLike: false},
                {name: 'Ja Mong Kut (Now)',url: './images/4.jpg',},
                {name: 'Leum Guen',url: './images/5.jpg',isLike: false},
                {name: 'Phra Pai',url: './images/6.jpg',isLike: false},
                {name: 'Cho maung',url: './images/7.jpg',isLike: false},
                {name: 'Look Chub',url: './images/8.jpg',isLike: false},
                {name: 'Thong Eak',url: './images/9.jpg',isLike: false} ],
      inputs: '',
      searchBoxOpen: false,
      searchFound: false,
      showImages: false,
      currentIndex: 0
    }
  },
  methods: {
    switchSearch() {
      this.searchBoxOpen = !this.searchBoxOpen
      this.inputs = ''
    },
    
  },
  computed: {
    filteredList() {
      this.searchFound = false
      if (this.inputs == '') {
        return this.thaides
      } else {
        let f = this.thaides.filter(t => this.inputs.toLowerCase().split(' ').every(v => t.name.toLowerCase().includes(v)))
        if (f == '') {
          this.searchFound = true
        } else {
          return f
        }
      }
    }
  }
})