window.onload=function(){
  new Vue({
    el: '#app',
    //スライダー
    data: {
      eventTitle: 'イベントのタイトル',
      eventVolOn: 'イベントの回数',
      eventUrl: '#',
      eventDateOn: 'イベントの期日',
      current_slide: 0,　//追加
      slides: [
        {img: 'img/kv_img01.jpg'},
        {img: 'img/kv_img02.jpg'},
        {img: 'img/kv_img03.jpg'},
        {img: 'img/kv_img04.jpg'},
        {img: 'img/kv_img05.jpg'}
      ],
    },
    mounted() {
      　　setInterval(() => {
            this.current_slide = this.current_slide < this.slides.length -1 ? this.current_slide +1 : 0
          }, 6000)
      }
  })
}
