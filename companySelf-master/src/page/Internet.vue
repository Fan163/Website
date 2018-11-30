<template>
<div class="Internet">
  <div class="LineBlock"></div>
  <div class="par parsys">
    <div class="heroCarousel section">
      <div class="herocarouseltransitionValue" transitionvalue="5"></div>
      <div class="herocarouseltransitionOffOn" transitionoffon="transitionOn"></div>
      <div class="homeBanner section-custom full-width">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="owl-container">
                <section class="note-overlay">
                  <i></i>
                </section>
                <div id="heroBanner" class="owl-carousel owl-theme" style="opacity: 1; display: block;">
                  <div class="owl-wrapper-outer">
                    <div class="owl-wrapper" style="left: 0px; display: block;">
                      <div v-if="CurCarousel == Idx" class="owl-item active" style="width: 100%;height: 100%;" v-for="(Carousel,Idx) in CarouselList" :key="Idx">
                        <div class="heroCarouselTabs1 heroCarouselTabs">
                          <div class="item" style="width:100%,">
                            <b-jumbotron class="CarouselBox" header="" lead="" :style="{backgroundImage: 'url(http://www.smart-hox.com:8081/upFiles/' + Carousel.carousel_big_pic + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center',backgroundSize:'cover'}">
                              <h2>{{Carousel.carousel_title}}</h2>
                              <div v-html="Carousel.carousel_content"></div>
                              <!-- <b-btn variant="primary" href="#">More Info</b-btn> -->
                            </b-jumbotron>
                            <!-- <div class="item-img lazyOwl" title="物流管理平台" data-icon="fa fa-cubes" :style="{display: 'inline-block',backgroundImage: 'url(' + Carousel.img + ')'}"></div>
                            <div class="l2_banner_content">
                              <h2 class="colorWhite">{{Carousel.tit_b}}</h2>
                              <p>{{Carousel.tit_s}}</p>
                              <p>{{Carousel.content}}</p>
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-controls clickable" style="bottom: 58px;">
                    <div class="owl-pagination">
                      <div v-for="(Carousel,Idx) in CarouselList" :key="Idx" :class="{ 'active': CurCarousel == Idx,'owl-page downpage CursorPointer':true}"  @click="ChangeCurCarousel(Idx)">
                        <div style="width:100%;text-align:center">
                          <!-- <span><img style="width:40px;height:40px;display:inline" :src="'http://www.smart-hox.com:8081/upFiles/' + Carousel.carousel_icon"></span> -->
                          <span><img style="width:40px;height:40px;display:inline" :src="'http://www.smart-hox.com:8081/upFiles/' + Carousel.carousel_icon"><div style="height: 40px;text-align:center;display:inline">{{Carousel.carousel_name}}</div></span>
                        </div>
                      </div>
                    </div>
                    <div class="owl-buttons">
                      <div class="owl-prev" @click="PreCurCarousel"><i class="fa fa-angle-left"></i></div>
                      <div class="owl-next" @click="NextCurCarousel"><i class="fa fa-angle-right"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="LineBlock"></div>
  <div style="text-align: left;padding: 40px 40px;">
    <h4 class="MarginB_20">{{ZwzOnelist.centre_name}}</h4>
    <p class="MarginB_20">{{ZwzOnelist.centre_content}}</p>
    <b-row>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" :src="'http://www.smart-hox.com:8081/upFiles/' + ZwzOnelist.centre_icon1_pic">
        <p class="SmallTit" style="font-size:16px">{{ZwzOnelist.centre_icon1_name}}</p>
        <p class="smallSize" style="font-size:14px">{{ZwzOnelist.centre_icon1_introduce}}</p>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" :src="'http://www.smart-hox.com:8081/upFiles/' + ZwzOnelist.centre_icon2_pic">
        <p class="SmallTit" style="font-size:16px">{{ZwzOnelist.centre_icon2_name}}</p>
        <p class="smallSize" style="font-size:14px">{{ZwzOnelist.centre_icon2_introduce}}</p>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" :src="'http://www.smart-hox.com:8081/upFiles/' + ZwzOnelist.centre_icon3_pic">
        <p class="SmallTit" style="font-size:16px">{{ZwzOnelist.centre_icon3_name}}</p>
        <p class="smallSize" style="font-size:14px">{{ZwzOnelist.centre_icon3_introduce}}</p>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" :src="'http://www.smart-hox.com:8081/upFiles/' + ZwzOnelist.centre_icon4_pic">
        <p class="SmallTit" style="font-size:16px">{{ZwzOnelist.centre_icon4_name}}</p>
        <p class="smallSize" style="font-size:14px">{{ZwzOnelist.centre_icon4_introduce}}</p>
      </b-col>
    </b-row>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      slide: 0,
      sliding: null,
      CurCarousel: 0,
      CarouselList: [],
      ZwzOnelist: [],
      obj: {}
    }
  },
  computed: {
    ...mapState({
      app_URL: state => state.app_URL,
      menuList: state => state.menuList
    })
  },
  created: function () {
    axios.get(this.$store.state.app_URL + 'ZwzOneList'
    ).then((_res) => {
      if (_res.data.code === 1) {
        this.getCarouselList(_res.data.ZwzOnelist[0].id)
        this.ZwzOnelist = _res.data.ZwzOnelist[0]
      }
    })
  },
  methods: {
    ChangeCurCarousel (Idx) {
      this.CurCarousel = Idx
    },
    PreCurCarousel () {
      if (this.CurCarousel > 0) {
        this.CurCarousel -= 1
      } else {
        this.CurCarousel = 2
      }
    },
    NextCurCarousel () {
      if (this.CurCarousel < 2) {
        this.CurCarousel += 1
      } else {
        this.CurCarousel = 0
      }
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    getCarouselList (ID) {
      axios.get(this.app_URL + 'zwzonecarouselList?one_id=' + ID
      ).then((res) => {
        if (res.data.code === 1) {
          this.CarouselList = res.data.zwzonecarouselList
        }
      })
    }
  }
}
</script>

<style scoped>
.jumbotron{
  border-radius: 0 !important;
  margin-bottom: 0 !important;
  text-align: left;
  padding-right: 25%;
}
.CarouselBox{
  height: 700px;
  color: #fff;
  padding-left: 40px;
}
.CarouselBox h2, .CarouselBox p{
  margin-bottom: 40px;
}
@media (max-width: 640px){
  .CarouselBox{
    height: 475px;
    color: #fff;
  }
  .CarouselBox h2{
    margin-bottom: 20px;
  }
  .CarouselBox p{
    margin-bottom: 20px;
  }
}
@media (max-width: 360px){
  .CarouselBox h2{
    margin-bottom: 10px;
  }
  .CarouselBox p{
    margin-bottom: 10px;
  }
}
.section-custom{
  margin: 0px !important;
}
.container-fluid {
  width: 100%;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
#heroBanner .l2_banner_content h2{
  color: #fff;
}
.owl-container .l2_banner_content{
  text-align: left;
}
.mudleImg{
  width: 60%;
  margin: 10px auto;
}
</style>
