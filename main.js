const app = {
  data() {
    return {
      thaides: [{
          name: 'Bu Lan Dan Mek',
          url: './images/1.jpg',
          isLike: false
        },
        {
          name: 'Bu Lan Dan Mhok',
          url: './images/2.jpg',
          isLike: false
        },
        {
          name: 'Ja Mong Kut (Original)',
          url: './images/3.jpg',
          isLike: false
        },
        {
          name: 'Ja Mong Kut (Now)',
          url: './images/4.jpg',
          isLike: false
        },
        {
          name: 'Leum Guen',
          url: './images/5.jpg',
          isLike: false
        },
        {
          name: 'Phra Pai',
          url: './images/6.jpg',
          isLike: false
        },
        {
          name: 'Cho maung',
          url: './images/7.jpg',
          isLike: false
        },
        {
          name: 'Look Chub',
          url: './images/8.jpg',
          isLike: false
        },
        {
          name: 'Thong Eak',
          url: './images/9.jpg',
          isLike: false
        }
      ],
      inputs: '',
      searchBoxOpen: false,
      searchFound: false,
      showImages: false,
      currentIndex: 0
    }
  },
  methods: {
    likeIt(index) {
      this.thaides[index].isLike = !this.thaides[index].isLike
    },
    switchSearch() {
      this.searchBoxOpen = !this.searchBoxOpen
      this.inputs = ''
    },
    showImg(index) {
      this.showImages = true;
      this.currentIndex = index;
    },
    hideImg() {
      this.showImages = false;
    }
    
  },
  computed: {
    countLike() {
      return this.thaides.filter(t => t.isLike).length
    },
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

}
Vue.createApp(app).mount('#app')