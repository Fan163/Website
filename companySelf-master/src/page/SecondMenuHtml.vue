<template>
  <div class="SecondMenuHtml" style="width:100%">
    <!-- <div v-html="secondMenuItem.second_content"></div> -->
    <div  class="TopImg" style="position:relative;" :style="{backgroundImage: 'url(http://www.smart-hox.com:8081/upFiles/' + secondMenuItem.image + ')', backgroundPosition:'center center', backgroundRepeat:'no-repeat',backgroundSize:'cover'}">
      <div style="position:absolute;padding-left:40px;text-align:left;color:#fff;margin-top:80px;width:100%">
        <!-- <b-row>
          <b-col cols="12" sm="10" md="10" lg="8">
            <h2>{{secondMenuItem.second_name}}</h2>
            <p class="smallSize" style="font-size:16px">
              <div v-html="secondMenuItem.second_content"></div>
            </p>
          </b-col>
        </b-row> -->
      </div>
    </div>
    <div style="width:90%;min-height:10px;padding-top:30px;margin:auto;text-align:left !important">
      <div v-html="secondMenuItem.second_content"></div>
    </div>
    <!-- <div style="text-align:left;padding-left:30px;margin-top:30px;padding-right:30px" v-for="(outlist,Idx) in secondMenuItem.bigtitles" :key="Idx">
      <div class="LineBlock"></div>
      <b-row style="margin-top:40px">
        <b-col cols="12" sm="12" md="12" lg="10">
          <h2>{{outlist.ftitle}}</h2>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="2">
        </b-col>
      </b-row>
      <b-row style="margin-top:30px">
        <b-col cols="12" sm="12" md="6" lg="6" v-for="(innerlist,Idx) in outlist.smalltitles" :key="Idx">
          <div style="width:100%;min-height:110px;padding-bottom:30px;overflow:hidden">
            <div style="width:100%;min-height:110px;position:relative">
              <div class="ablow">
                <div style="">
                  <p style="font-size:20px;margin-bottom:0px;">{{innerlist.ftitle}}<p>
                  <p style="line-height:25px;margin-top:-10px">{{innerlist.fcontent}}</p>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'SecondMenuHtml',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      secondMenuItem: state => state.secondMenuItem
    })
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
.mudleImg{
  width:100%;
  height:240px;
  background-color: pink;
}
.title{
  width:100%;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  color: rgb(192, 80, 77);
}
.TopImg{
  width:100%;
  height:500px;
  background-color: pink;
}
</style>
