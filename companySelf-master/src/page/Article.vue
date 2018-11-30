<template>
  <div class="Article" style="padding:20px 20px;width:100%">
    <div class="item CursorPointer" style="text-align:left;position: relative;" v-for="(item,Idx) in playList" :key="Idx" v-if="show" @click="change(item)">
      <b-row>
      <b-col cols="4" sm="4" md="4" lg="3" style="overflow: hidden">
        <img class="mudleImg" :src="'http://www.smart-hox.com:8081/upFiles/' + item.play_pic">
        <!-- <img class="mudleImg" style="">         -->
      </b-col>
      <b-col cols="8" sm="8" md="8" lg="9" style="position:relative;">
        <h6>{{item.play_title}}</h6>
        <p class="smallSize" style="text-align:left;display:block;word-break: break-all;word-wrap: break-word;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;">{{item.play_introduce}}</p>
        <p class="smallSize" style="position: absolute;margin-bottom: 0px;bottom: 0; position:absolute;">发布时间：{{item.createtime}}</p>
      </b-col>
    </b-row>
    </div>
    <!--  -->
    <div v-if = "!show" style="width:90%;margin:auto">
      <h5>{{article.play_title}} <span class="CursorPointer" style="float: right" @click="back()"><b-button>返回</b-button></span></h5>
      <div v-html = "article.play_content" style="padding-top:20px;text-align: left">
      </div>
    </div>
    <!-- <div v-if="articleList.length > 0" style="margin: 10px;overflow: hidden">
      <div style="float: right; margin-top: 20px;">
          <Page :total="total" :current="curPage" @on-change="changePage" :page-size="pageSize" show-total></Page>
      </div>
    </div> -->
  </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Article',
  data () {
    return {
      playList: [],
      show: true,
      article: []
    }
  },
  computed: {
    ...mapState({
      app_URL: state => state.app_URL
    })
  },
  created: function () {
    this.getshiwan()
  },
  methods: {
    // pagechange(currentPage){
    //   console.log(currentPage);
    // },
    getshiwan () {
      axios.get(this.app_URL + 'playList'
      ).then((res) => {
        if (res.data.code === 1) {
          this.playList = res.data.playList
          for (var i = 0, lenI = this.playList.length; i < lenI; ++i) {
            var date = new Date(this.playList[i].create_date.time)
            var Y = date.getFullYear() + '-'
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            var D = date.getDate() + ' '
            var h = date.getHours() + ':'
            var m = date.getMinutes() + ':'
            var s = date.getSeconds()
            var time1 = (Y + M + D + h + m + s)
            this.playList[i].createtime = time1
            console.log(this.playList)
          }
        }
      })
    },
    back (item) {
      this.show = true
    },
    change (item) {
      this.show = false
      this.article = item
    }
  }
}
</script>
<style scoped>
.item{
  padding: 20px 20px;
  width: 96%;
  min-height: 150px;
  margin: auto
}
@media (min-width: 768px) {
  .item{
    padding: 20px 20px;
    text-align: left;
  }
}
.mudleImg{
  font-size: 12px;
  line-height:150px;
  width:100%;
  min-width:200px;
  height:120px;
  overflow: hidden;
}
.pic{

}
</style>
