<template>
<ul :class="galleryClass" v-if="gallery.length">
  <li v-for="(thumb, index) in galleryShow" :key="index">
    <div :style="{backgroundImage:'url(' + baseUrl + thumb + ')'}">
      <img :src="thumb">
    </div>
  </li>
</ul>
</template>

<script>
export default {
  name: 'Gallery',
  props: ['gallery'],
  data () {
    return {
      baseUrl: this.$http.defaults.baseURL,
      galleryClass: 'gallery gallery' + (this.gallery.length > 9 ? 0 : this.gallery.length)
    }
  },
  computed: {
    galleryShow () {
      return this.gallery.slice(0, 9)
    }
  }
}
</script>

<style scoped>
.gallery { margin-left:-1%; overflow:hidden;}
.gallery li { float:left; border:solid 1px #ececec; margin-left:1%; margin-top:1%; position:relative; display:block; overflow:hidden;}
.gallery li > div { position:absolute; left:0; top:0; width:100%; height:100%; background-size:cover; overflow:hidden;}
.gallery li img { display:block; max-width:100%; height:auto; margin-top: 50%;
  width:1px; height:1px; opacity:0; margin:0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.gallery1 li { width:99%; padding-top:98%;}
.gallery2 li,
.gallery4 li { width:49%; padding-top:48%;}
.gallery3 li,
.gallery5 li,
.gallery6 li,
.gallery7 li,
.gallery8 li,
.gallery9 li { width:32%; padding-top:31%;}
.gallery0 li { width:32%; padding-top:31%; position:relative;}
.gallery0 li:last-child::before { content:""; display:block; width:100%; height:100%; position:absolute; top:0; left:0; z-index:1; background-color:#000; opacity:.55;}
.gallery0 li:last-child::after { color:#fff; content:"更多"; display:block; position:absolute; top:50%; left:50%; z-index:2; margin:-10px 0 0 -15px;}
</style>
