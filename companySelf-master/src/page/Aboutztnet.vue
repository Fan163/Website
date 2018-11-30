<template>
  <div class="Aboutztnet">
    <div  class="mudleImg" style="position:relative;" :style="{backgroundImage: 'url(http://www.smart-hox.com:8081/upFiles/' + aboutZ.image + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center',backgroundSize:'cover'}">
      <div style="position:absolute;bottom:0;padding-left:40px;text-align:left;color:white;margin-top:80px;width:100%">
        <b-row>
          <b-col cols="12" sm="12" md="12" lg="10">
            <!-- <h2>{{aboutZ.first_title}}1111ahhahahhahhdhak</h2>
            <p class="smallSize" style="font-size:16px">{{aboutZ.first_introduce}}22222好几个噶价格低就按个科技馆很快就打哈国际化光大科技阿很关键222</p> -->
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="2">
          </b-col>
        </b-row>
      </div>
    </div>
    <div style="width:90%;min-height:10px;padding-top:30px;margin:auto;text-align:left !important">
      <div v-html="thishtml"></div>
    </div>
    <!-- <div style="padding-left:20px;padding-right:20px;margin-top:30px ;margin-botton:200px">
      <div class="introduce">
        <h2>smart hox  快快非官方的闪光点快</h2>
        <div class="blue" style="text-align:left">
            <b-col cols="12" sm="12" md="6" lg="4" style="background-color:#267997">
              <p class="smallSize" style="font-size:16px;line-height:50px;padding-bottom:0px;text-align:left">地址kkkkkkkk</p>
            </b-col>
        </div>
        <div class="detail" style="margin-top:30px">卡噶几开发规划进口卡噶几开发规划进口红酒客户黄金卡很干净看哈进口红酒很快就啊卡噶几开发规划进口红酒客户黄金卡很干净看哈进口红酒很快就啊卡噶几开发规划进口红酒客户黄金卡很干净看哈进口红酒很快就啊红酒客户黄金卡很干净看哈进口红酒很快就啊哈国际快递华工科技加空格回到家客户</div>
        <div class="callan" style="margin-top:30px">
          <b-row style="padding-top:10px;padding-bottom:10px">
            <b-col cols="12" sm="12" md="6" lg="4">
              <div class="smallSize" style="font-size:16px;padding-bottom:0px">地kkk</div>
              <div class="smallSize" style="font-size:14px;">地址kkkkhahhahahhahahahahdd华师大返回的数据kkkk</div>
            </b-col>
            <b-col cols="12" sm="12" md="6" lg="4">
              <div class="smallSize" style="font-size:16px;">kkk</div>
              <div class="smallSize" style="font-size:14px;">地址kkkkkkkk</div>
            </b-col>
            <b-col cols="12" sm="12" md="6" lg="4">
              <div class="smallSize" style="font-size:16px;">kkkkk</div>
              <div class="smallSize" style="font-size:14px;">地址kkkkkkkk</div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div> -->
    <!-- <div style="background-color:pink;margin-top:20px;width:100%;min-height:100px;padding-left:20px;padding-right:20px">发展状况
       <div style="padding-top:10px;padding-bottom:10px;width:100%;display:flex;justify-content:space-between;margin-bottom:-32px">
        <div style="min-width:10px">
          <div class="smallSize"  style="text-align:left">2019</div>
          <div class="smallSize"  style="text-align:left">hahhha家居服基督kkkj经济法第几集教</div>
          <div style="width:10px">
            <div class="smallSize" >|</div>
            <div class="smallSize" style="width:10px;height:10px;border-radius:5px;background-color:red"></div>
          </div>
        </div>
        <div style="min-width:10px">
          <div class="smallSize" style="text-align:left">2019</div>
          <div class="smallSize"  style="text-align:left">hahhha家居服基督教</div>
          <div style="width:10px">
            <div class="smallSize" >|</div>
            <div class="smallSize" style="width:10px;height:10px;border-radius:5px;background-color:red"></div>
          </div>
        </div>
        <div style="min-width:10px">
          <div class="smallSize"  style="text-align:left">2019</div>
          <div class="smallSize" style="text-align:left" >hahhha家居服基督教</div>
          <div style="width:10px">
            <div class="smallSize" >|</div>
            <div class="smallSize" style="width:10px;height:10px;border-radius:5px;background-color:red"></div>
          </div>
        </div>
      </div>
      <hr style="border : 1px dashed red;"/>
      <div style="padding-top:10px;padding-bottom:10px;width:100%;display:flex;justify-content:space-between;padding-left:100px;margin-top:-32px">
        <div style="min-width:10px">
          <div style="width:10px;">
            <div class="smallSize" style="width:10px;height:10px;border-radius:5px;background-color:red"></div>
            <div class="smallSize" >|</div>
          </div>
          <div class="smallSize"  style="text-align:right ;margin-left:-100px">2019</div>
          <div class="smallSize" style="text-align:right;margin-left:-100px" >hahhha家居服基督教</div>
        </div>
        <div style="min-width:10px">
          <div style="width:10px;">
            <div class="smallSize" style="width:10px;height:10px;border-radius:5px;background-color:red"></div>
            <div class="smallSize" >|</div>
          </div>
          <div class="smallSize"  style="text-align:right;margin-left:-100px">2019</div>
          <div class="smallSize" style="text-align:right;margin-left:-100px" >hahhha家居服基督教</div>
        </div>
        <div style="min-width:10px">
          <div style="width:10px;">
            <div class="smallSize" style="width:10px;height:10px;border-radius:5px;background-color:red"></div>
            <div class="smallSize" >|</div>
          </div>
          <div class="smallSize"  style="text-align:right;margin-left:-100px">2019</div>
          <div class="smallSize" style="text-align:right;margin-left:-100px" >hahhha家居服基督教</div>
        </div>
      </div>
    </div> -->
    <!-- <div class="piclist" style="margin-top:30px;padding-left:20px;padding-right:20px">
      <b-row>
        <b-col cols="12" sm="6" md="6" lg="3">
          <div style="width:100%;height:100px;background-color:grey">1111</div>
          <p class="smallSize" style="font-size:14px">11111111</p>
        </b-col>
        <b-col cols="12" sm="6" md="6" lg="3">
          <div style="width:100%;height:100px;background-color:grey">1111</div>
          <p class="smallSize" style="font-size:14px">2222222</p>
        </b-col>
        <b-col cols="12" sm="6" md="6" lg="3">
          <div style="width:100%;height:100px;background-color:grey">1111</div>
          <p class="smallSize" style="font-size:14px">3333333</p>
        </b-col>
        <b-col cols="12" sm="6" md="6" lg="3">
          <div style="width:100%;height:100px;background-color:grey">1111</div>
          <p class="smallSize" style="font-size:14px">444444444</p>
        </b-col>
      </b-row>
    </div> -->
    <!-- <div style="margin-top:30px;min-top:20px;background-color:pink;padding-left:20px;padding-right:20px">
      <div>
        <div>
          <b-row style="padding-top:10px;padding-bottom:10px">
            <b-col cols="12" sm="12" md="1" lg="2">
            </b-col>
            <b-col cols="12" sm="12" md="10" lg="8">
              <div><span style="float:left;font-size:40px">“</span><span><h3 style="display: inline-block">资深团队</h3></span></div>
            </b-col>
            <b-col cols="12" sm="12" md="1" lg="2">
            </b-col>
          </b-row>
        </div>
      </div>
      <h4>hhhhhhhhhhhh</h4>
      <div>
        <b-row style="padding-top:10px;padding-bottom:10px">
          <b-col cols="12" sm="12" md="1" lg="2">
          </b-col>
          <b-col cols="12" sm="12" md="10" lg="8">
            <div style="text-align:left;font-size:14px;color:#333">健康绿色伏建国离开房间观看了发动机赶快来时代峰峻看来就健康了健身房了客观金石可镂根据反馈的两个健康绿色交罚款</div>
            <span style="float:right;font-size:40px">”</span>
          </b-col>
          <b-col cols="12" sm="12" md="1" lg="2">
          </b-col>
        </b-row>
      </div>
      <div style="width:100%;margin-top:30px">
        <b-row style="padding-top:10px;padding-bottom:10px">
          <b-col cols="12" sm="12" md="1" lg="2">
          </b-col>
          <b-col cols="12" sm="12" md="10" lg="8">
            <div style="width:150px;height:200px;background-color:white;margin:auto"></div>
          </b-col>
          <b-col cols="12" sm="12" md="1" lg="2">
          </b-col>
        </b-row>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Aboutztnet',
  data () {
    return {
      thishtml: '',
      customerlist: '',
      joinuslist: '',
      companylist: '',
      teamlist: '',
      ztnetlist: '',
      aboutZ: '',
      newslist: '',
      activitylist: '',
      photolist: '',
      newlist2: '',
      show: true,
      show2: false,
      shows: true,
      show3: false,
      shown: true,
      show4: false,
      show6: true,
      show5: false,
      listIndex: 111,
      joinIndex: 222,
      newsIndex: 333,
      actIndex: 444
    }
  },
  computed: {
    ...mapState({
      app_URL: state => state.app_URL
    })
  },
  created: function () {
    console.log(111)
    this.getList()
    console.log(222)
  },
  methods: {
    getList (ID) {
      axios.get(this.app_URL + 'aboutZTNET'
      ).then((res) => {
        if (res.data.code === 1) {
          console.log(res.data)
          this.aboutZ = res.data.aboutZTNET[0]
          console.log(res.data.aboutZTNET[0].image)
          this.thishtml = res.data.aboutZTNET[0].fcontent
          this.customerlist = res.data.customerlist
          this.joinuslist = res.data.joinuslist
          this.companylist = res.data.companylist[0]
          this.teamlist = res.data.teamlist
          this.ztnetlist = res.data.ztnetlist
          this.newslist = res.data.newslist
          this.activitylist = res.data.activitylist
          console.log(333)
          this.changetime1()
          console.log(444)
          this.changetime2()
          console.log(555)
          this.photolist = res.data.photos[0]
          this.newlist2 = res.data.newlist2[0]
        }
      })
    },
    changeshow (Idx) {
      this.listIndex = Idx
      this.show2 = true
    },
    changeushow (Idx) {
      this.listIndex = Idx
      this.show2 = false
      this.listIndex = 111
    },
    changejoin (Idx) {
      this.joinIndex = Idx
      this.show3 = true
    },
    changeujoin (Idx) {
      this.joinIndex = Idx
      this.show3 = false
      this.joinIndex = 222
    },
    changenews (Idx) {
      console.log(Idx)
      this.newsIndex = Idx
      this.show4 = true
    },
    changeunews (Idx) {
      this.newsIndex = Idx
      this.show4 = false
      this.newsIndex = 333
    },
    changeact (Idx) {
      this.actIndex = Idx
      this.show5 = true
    },
    changeuact (Idx) {
      this.actIndex = Idx
      this.show5 = false
      this.actIndex = 444
    },
    changetime1 () {
      console.log(this.newslist)
      for (var i = 0, lenI = this.newslist.length; i < lenI; ++i) {
        var date = new Date(this.newslist[i].news_date.time)
        var Y = date.getFullYear() + '年'
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月'
        var D = date.getDate() + '日'
        var time1 = (Y + M + D)
        console.log(time1)
        this.newslist[i].createtime = time1
        console.log(this.newslist)
      }
      console.log(this.newslist)
    },
    changetime2 () {
      for (var i = 0, lenI = this.activitylist.length; i < lenI; ++i) {
        var date = new Date(this.activitylist[i].activity_date.time)
        var Y = date.getFullYear() + '年'
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月'
        var D = date.getDate() + '日'
        var time2 = (Y + M + D)
        this.activitylist[i].createtime = time2
        console.log(this.activitylist)
      }
    }
  }
}
</script>
<style scoped>
.Img{
  width: 100%;
  margin: 10px auto;
}
.piclist{
  width: 100%;
  min-height: 100px;
  background-color: pink;
}
.callan{
  width: 100%;
  min-height: 50px;
  border: 1px solid #267997;
  border-radius: 4px
}
.introduce{
  min-height: 100px;
  width:100%;
  background-color: pink
}
.detail{
  font-size: 14px;
  text-align: left;
  color: #333;
}
.mudleImg{
  width:100%;
  height:500px;
  background-color: pink
}
.blue{
  color: white;
  font-size:14px;
  height: 30px;
}
.pic{
  width: 100%;
  height: 190px;
}
.news{
  background: linear-gradient(to bottom,rgba(0,63,86,1) 0,rgba(0,105,144,1) 90%);
  overflow-y:hidden
}
.mewslist{
  background: #267997;
  border: 1px solid rgba(223,223,223,0.5);
  height: 109px;
}
.mewslist1{
  background: #267997;
  border: 1px solid rgba(223,223,223,0.5);
  min-height: 209px;
  overflow: auto
}
.ablow{
  position: absolute;
  bottom: 0px;
  background: rgba(0,0,0,0.7);
  color: white;
  width: 100%;
  text-align: left;
  height: 70px;
  padding-top:15px;
  white-space:nowrap;
  overflow:hidden;
  /* text-overflow:ellipsis; */
}
.ablow2{
  position: absolute;
  bottom: 0px;
  background: rgba(0,0,0,0.7);
  color: white;
  width: 100%;
  text-align: left;
  height:370px;
  white-space:pre-wrap;
  }
/* .ablow:hover{
  position: absolute;
  bottom: 0px;
  background: rgba(0,0,0,0.7);
  color: white;
  width: 100%;
  text-align: left;
  height:370px;
  white-space:pre-wrap;
  } */
  .fpic{
    width: 100%;
    height:100%
  }
</style>
