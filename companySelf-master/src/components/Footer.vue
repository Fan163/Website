<template>
  <div class="foot">
    <b-row style="margin-bottom:20px">
      <b-col cols="12" md="2" >
        <div style="width:100%;text-align:center">
          <h6 class="CursorPointer" href="#" @click="toAboutsale" style="cursor:hand;">联系销售部</h6>
          <p style="margin-top:10px;font-size:14px !important">©2018 Ztnet</p>
        </div>
      </b-col>
      <b-col cols="12" md="3" style="width:100%;text-align:center">
        <h6 class="CursorPointer" href="#" @click="toAboutztnet" style="cursor:hand">关于ZTNET</h6>
        <p style="margin-top:10px;font-size:14px !important">沪ICP备 16036901号</p>
      </b-col>
      <b-col cols="12" md="7" style="text-align:right">
        <img style="width: 90px" src="../../static/img/BT_weixin.png"/>
      </b-col>
    </b-row>
    <div class="LineBlock"></div>
    <div>
      <b-row>
        <b-col cols="12" md="2" >
          <div style="width:100%;text-align:center;height:100px">
            <div style="line-height:100px;margin:autoo">
              <img class="CursorPointer" style="width: 100px; height: 47px;margin-top:20px;margin:auto" src="../../static/img/Logo.png">
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="3">
        </b-col>
      </b-row>
    </div>
    <!-- <b-row>
      <b-col cols="12" md="3">
        <h5>关于我们</h5>
        <p>公司简介</p>
        <p>适玩资讯</p>
      </b-col>
      <b-col cols="12" md="6">
        <h5>联系方式</h5>
        <p>研发总部：江苏省常熟高新技术产业开发区汇金三路东东南汇1号楼</p>
        <p>上海公司：上海市普陀区中江路879号天地软件园12号楼4F</p>
        <p>杭州公司：杭州西湖区余杭塘路866号浙大紫金港东五教学区光及电磁波研究中心G106</p>
        <p>广州公司：广州大学城华南师范大学理五栋 (大学城西五路)</p>
        <p>南通公司：江苏海门市人民中路138号东洲青创3F </p>
        <p>Mail：servcie@hoxsmart.com</p>
      </b-col>
      <b-col cols="12" md="3">
        <h5>关注我们</h5>
        <img style="width: 90px" src="../../static/img/BT_weixin.png"/>
      </b-col>
    </b-row>
    <b-row class="TextCenter" style="margin-top: 20px;padding: 10px 0px; border-top: 1px solid #fff;">
      <b-col>
        <p>Copyright © 2005-2018 Ztnet （Smart Hox Ltd） 版权所有 . 沪ICP备 16036901号</p>
      </b-col>
    </b-row> -->
  </div>
</template>
<script>
export default{
  data: function () {
    return {
    }
  },
  mounted: function () {
  },
  created () {
  },
  computed: {
  },
  watch: {
  },
  components: {
  },
  methods: {
    toAboutsale () {
      this.$router.push({name: 'Aboutsale'})
    },
    toAboutztnet () {
      this.$router.push({name: 'Aboutztnet'})
    }
  }
}
</script>
<style>
.foot{
    padding: 40px 20px;
    color: #fff;
    text-align: left;
    background-color: #2c2d32;
  }
@media (min-width: 768px) {
  .foot{
    padding: 40px 20px 0px 170px;
    color: #fff;
    text-align: left;
    background-color: #2c2d32;
  }
}
.foot p{
  font-size: 12px !important;
  color: #bcbcbe;
}
</style>
