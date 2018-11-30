<template>
  <div class="Aboutsale" style="text-align:center !important">
    <div>
      <div  class="TopImg" style="position:relative;" :style="{backgroundImage: 'url(http://www.smart-hox.com:8081/upFiles/' + image + ')', backgroundPosition:'center center', backgroundRepeat:'no-repeat',backgroundSize:'cover'}">
        <div style="position:absolute;padding-left:40px;text-align:left;color:#fff;margin-top:80px;width:100%">
        </div>
      </div>
    </div>
    <div>
      <b-col style="width:100%;margin-left: 30px;margin-right:30px;">
        <div>
          <div v-html="thishtml"></div>
        </div>
      </b-col>
    </div>
    <!-- <div style="text-align:left;padding-left:40px">
      <b-row>
        <b-col cols="12" sm="8" md="6" lg="4" v-for="(comppic,Idx) in companylist" :key="Idx">
          <p class="SmallTit" style="font-size:16px">{{comppic.company_name}}</p>
          <p class="smallSize" style="font-size:14px">地址：{{comppic.company_address}}</p>
          <p class="smallSize" style="font-size:14px">电话：{{comppic.company_tel}}</p>
          <p class="smallSize" style="font-size:14px">Mail：{{comppic.company_email}}</p>
        </b-col>
      </b-row>
    </div> -->
  </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Aboutsale',
  data () {
    return {
      thishtml: '',
      companylist: '',
      image: ''
    }
  },
  computed: {
    ...mapState({
      app_URL: state => state.app_URL
    })
  },
  created: function () {
    this.getList()
  },
  methods: {
    getList (ID) {
      axios.get(this.app_URL + 'contactSale'
      ).then((res) => {
        if (res.data.code === 1) {
          // console.log(res.data.companylist)
          console.log(res.data.contactSale)
          console.log(res.data.contactSale[0])
          this.thishtml = res.data.contactSale[0].fcontent
          // this.companylist = res.data.companylist
          this.image = res.data.contactSale[0].image
          console.log(res.data.contactSale[0].image)
        }
      })
    }
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
