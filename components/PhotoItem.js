app.component('photo-items',{
  props:{
    thaides:{
      type: Array,
      require:true
    },
    'search-found': Boolean,
    'filtered-list': Array

  },

  /*html*/
  template: 
    `
    <div class="grid grid-cols-3 auto-rows-auto gap-10 ">
    <div v-for="(t,index) in filteredList" class="mx-auto">
      <img :src="t.url" class="w-72 h-44" @click="showImg(index)">
      <p class="text-center mt-4 text-xl select-none">
        <i v-if="t.isLike" class="material-icons text-red-400 text-base" v-on:dblclick="likeIt(index)">favorite</i>
        <i v-else class="material-icons text-base" v-on:dblclick="likeIt(index)">favorite_border</i>
            {{t.name}}
      </p>
    </div>
    <div v-if="searchFound" class="col-span-3 text-center mt-4 text-7xl">Photo Not Found !!!</div>
  </div>
    `,
      data(){
        return {
          showImages: false,
          currentIndex: 0
        }
      },
      methods: {
        likeIt(index) {
          this.thaides[index].isLike = !this.thaides[index].isLike
        },
        imgClicked(id) {
          this.currentIndex = id;
          this.showImages = true;
          this.$emit('show-img', this.currentIndex);
          this.$emit('show-images', this.showImages)
        }
      }
  
})