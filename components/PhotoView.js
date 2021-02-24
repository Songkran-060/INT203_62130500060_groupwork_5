app.component('photo-views',{
    /*html*/
    template:
    `<div v-if="showImages"></div>
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
    <div v-if="showImages"></div>`,
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
          showImages: false,
          searchFound: false,
          currentIndex: 0
        }
      },
      methods: {
        showImg(index) {
          this.showImages = true;
          this.currentIndex = index;
        },
        hideImg() {
          this.showImages = false;
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