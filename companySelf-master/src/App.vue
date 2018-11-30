<template>
  <div id="app" style="width:100%; overflow-x:hidden;margin-top:0px;">
    <Header/>
    <SiderBar/>
    <div class="contentBox">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import SiderBar from './components/SiderBar'
import Footer from './components/Footer'
import axios from 'axios'
import send from './util/send.js'
import {mapState, mapActions} from 'vuex'
export default {
  name: 'App',
  data: function () {
    return {
      Zwzsecondlist: [],
      ZwzOnelist: [],
      obj: {},
      menuList: [{}, {}, {}, {}],
      menuObj: {
        '0': {},
        '1': {},
        '2': {},
        '3': {}
      }
    }
  },
  components: {
    Header,
    SiderBar,
    Footer
  },
  computed: {
    ...mapState({
      app_URL: state => state.app_URL
    })
  },
  created: function () {
    this.getonelist()
    // this.getshiwan()
  },
  methods: {
    ...mapActions([
      'changemenuList'
    ]),
    async getonelist () {
      // let t = await this.getSecondMenu()
      axios.get(this.$store.state.app_URL + 'ZwzOneList'
      ).then((_res) => {
        if (_res.data.code === 1) {
          let fmenu = _res.data.ZwzOnelist
          let len = _res.data.ZwzOnelist.length
          fmenu.map((item, idx) => {
            this.middle(item, idx, len)
          })
        }
      })
    },
    getSecondMenu (fmenu, idx, len) {
      return new Promise((resolve, reject) => {
        axios.get(this.app_URL + 'ZwzsecondList?one_id=' + fmenu.id
        ).then((res) => {
          if (res.data.code === 1) {
            let obj = {
              'fmenu': fmenu.one_name,
              'icon': 'http://www.smart-hox.com:8081/upFiles/' + fmenu.one_icon,
              'smenu': res.data.Zwzsecondlist
            }
            resolve(obj)
          }
        })
      })
    },
    async middle (fmenu, idx, len) {
      let obj = await this.getSecondMenu(fmenu, idx, len)
      this.menuList.splice(idx, 1, obj)
      this.changemenuList(this.menuList)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.contentBox{
  width: 100%;
  padding: 0px;
  overflow: hidden;
  /*background: yellow;*/
  text-align: center;
  margin-top: 115px;
  margin-left: 0px;
}
@media (min-width: 768px) {
  .contentBox{
    width: 100%;
    padding: 0px 0px 0px 130px;
    /*background: pink;*/
    margin-top: 115px;
    margin-left: 0px;
  }
}
.owl-next{
  right: 15px !important;
}
</style>
