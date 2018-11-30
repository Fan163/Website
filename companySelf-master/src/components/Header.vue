<template>
<div>
  <div class="menu">
    <b-navbar toggleable="md" type="dark" variant="info" fixed="top" style="height:55px">
      <span @click="toggleSider" style="position: fixed;top:10px"><b-navbar-toggle target="nav_collapse"></b-navbar-toggle></span>
      <b-navbar-brand href="#" style="color: #000;">NavBar</b-navbar-brand>
     <!--  <b-navbar-nav class="ml-auto"> -->
      <b-navbar-nav class="ml-auto" style="min-heigth:50px;" v-if="!showweb">
        <b-nav-item href="#" style="color: #fff;font-size: 12px;"><span  @click="changeshowweb()" >HoxCloud 登入<img class="pushicon1" src="../../static/img/down.png"></span>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" style="min-heigth:50px;padding-top:60px;background-color:black" v-if="showweb">
        <b-nav-item href="#" style="color: #fff;font-size: 12px;background-color:black"><span  @click="changeshowweb()" >HoxCloud 登入<img class="pushicon1" src="../../static/img/up.png"></span>
        <div v-for="(web, idx) in zwzLinklist" :key="idx" style="z-index:100000;display:block;background-color:black" v-if="showweb" >
          <div @click="changeweb(web)" style="margin-top:12px" class="showweb">{{web.fname}}</div>
        </div>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="searchBox">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
    <!-- <div style="width:100%;background: #000;position: fixed;z-index:1000;top:50px;color:white;" v-if="showweb">
      <div v-for="(web, idx) in zwzLinklist" :key="idx" class="webitem">
        <span @click="changeweb(web)">{{web.fname}}</span>
      </div>
    </div> -->
    <div v-if="HeaderMenu" class="headerMenu" style="background: #333 !important;">
      <b-nav vertical class="w-100">
        <b-nav-item>
          <b-input-group style="padding-top: 10px;">
            <b-form-input placeholder="Search"></b-form-input>
            <b-input-group-append>
              <b-btn type="submit">Search</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-nav-item>
        <div v-for="(menu, idx) in menuList" :key="idx">
          <b-nav-item><span @click="changeMenu(idx)" style="float:left">{{menu.fmenu}}</span><span v-if="menuList[idx].smenu.length != 0" active @click="toggleSecondMenu(idx)" style="float:right"><img class="pushicon" src="../../static/img/push.png"></span></b-nav-item>
          <div v-if="menuIndex == idx && ifShowsecondMenu" class="secondMenu">
            <b-nav-item v-for="(sMenu, sIdx) in menuList[idx].smenu" :key="sIdx" style="margin-top:20px" class="secondname"><span @click="chooseSecondMenu(sMenu)" style="margin-left:30px;float:left" class="secondname">{{sMenu.second_name}}</span></b-nav-item>
          </div>
        </div>
        <!-- <b-nav-item active @click="toggleSecondMenu">物联网场景应用</b-nav-item>
        <div v-if="secondMenu" class="secondMenu">
          <b-nav-item>智能家居</b-nav-item>
          <b-nav-item>智能酒店</b-nav-item>
          <b-nav-item>智能环保</b-nav-item>
          <b-nav-item>智能工业</b-nav-item>
          <b-nav-item>智能校园</b-nav-item>
        </div>
        <b-nav-item>产品与服务</b-nav-item>
        <b-nav-item>适玩资讯</b-nav-item> -->
      </b-nav>
    </div>
  </div>
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import axios from 'axios'
export default {
  name: 'Header',
  data () {
    return {
      HeaderMenu: false,
      ifShowsecondMenu: false,
      menuIndex: 0,
      zwzLinklist: [],
      showweb: false
    }
  },
  computed: {
    ...mapState({
      curMenuIdx: state => state.curMenuIdx,
      menuList: state => state.menuList,
      app_URL: state => state.app_URL
    })
  },
  created: function () {
    this.getList()
  },
  methods: {
    ...mapActions([
      'changeCurMenu',
      'changeSecondMenuItem'
    ]),
    changeshowweb () {
      if (this.showweb === false) {
        this.showweb = true
      } else {
        this.showweb = false
      }
    },
    toggleSider () {
      this.HeaderMenu = !this.HeaderMenu
    },
    toggleSecondMenu (idx) {
      if (this.menuList[idx].smenu.length === 0) {
        this.ifShowsecondMenu = false
        this.changeMenu(idx)
        this.menuIndex = idx
        this.toggleSider()
      } else {
        this.ifShowsecondMenu = !this.ifShowsecondMenu
        this.menuIndex = idx
      }
    },
    changeMenu (idx) {
      if (idx === 0) {
        this.showOverLay = true
        this.menuIndex = idx
      }
      this.changeCurMenu(idx)
      switch (idx) {
        case -1:
          this.$router.push({name: 'Internet'})
          break
        case 0:
          this.$router.push({name: 'Internet'})
          this.HeaderMenu = false
          break
        case 1:
          this.$router.push({name: 'Product'})
          this.HeaderMenu = false
          break
        case 2:
          this.$router.push({name: 'Article'})
          this.HeaderMenu = false
          break
        case 3:
          this.$router.push({name: 'AboutUs'})
          this.HeaderMenu = false
          break
        default:
          this.$router.push({name: 'Internet'})
          this.HeaderMenu = false
      }
    },
    changeweb (web) {
      var address = web.faddress
      window.location.href = address
    },
    chooseSecondMenu (sMenu) {
      this.changeSecondMenuItem(sMenu)
      this.$router.push({name: 'SecondMenuHtml', params: {id: sMenu}})
      console.log(sMenu)
      this.showOverLay = false
      this.ifShowsecondMenu = false
      this.HeaderMenu = false
      // this.toggleSider()
    },
    getList () {
      axios.get(this.app_URL + 'ZwzLink'
      ).then((res) => {
        if (res.data.code === 1) {
          this.zwzLinklist = res.data.zwzLinklist
        }
      })
    }
  }
}
</script>

<style scoped>
.menu{
  position: relative;
}
.bg-info{
  background: #000 !important;
}
.headerMenu {
  width: 100%;
  height: 100vh;
  display: block;
  position: fixed;
  left: 0px;
  top: 50px;
  z-index: 999;
}
.searchBox{
  display: none;
}
.nav-item a{
  color: #fff;
}
/* .nav-item:hover{
  background: #000;
} */
.secondname:hover {
  color:#1296db;
}
.webitem {
  height: 45px;
  line-height: 45px
  /* padding-top:10px;
  margin-top:10px */
}
.webitem:hover {
   background: #333;
   color:#1296db;
}
.showweb:hover {
   color:#1296db;
}
.secondMenu .nav-item a{
  color: #ccc;
}
.pushicon{
  width: 20px;
  height: 20px
}
.pushicon1{
  width: 15px;
  height: 15px
}
@media (min-width: 768px) {
  .headerMenu{
    display: none;
  }
  .searchBox{
    display: block;
  }
}
</style>
