app.component('photo-items',{
  /*html*/
  template: 
  `<div v-for="(t,index) in filteredList" class="mx-auto">
  <img :src="t.url" class="w-72 h-44" @click="showImg(index)">
  <p class="text-center mt-4 text-xl select-none">
    <i v-if="t.isLike" class="material-icons text-red-400 text-base" v-on:dblclick="likeIt(index)">favorite</i>
    <i v-else class="material-icons text-base" v-on:dblclick="likeIt(index)">favorite_border</i>
    {{t.name}}
  </p>
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
    searchFound: false,
    showImages: false,
    currentIndex: 0
  }
},
methods: {
  likeIt(index) {
    this.thaides[index].isLike = !this.thaides[index].isLike
  },
  showImg(index) {
    this.showImages = true;
    this.currentIndex = index;
  }
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