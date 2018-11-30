<template>
  <div class="AboutUs">
    <div v-html="thishtml"></div>
    <!-- <SelectGoodsByType/> -->
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'AboutUs',
  data () {
    return {
      thishtml: ''
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
    getList () {
      axios.get(this.app_URL + 'ZwzOneList'
      ).then((res) => {
        if (res.data.code === 1) {
          this.thishtml = res.data.ZwzOnelist[3].one_content
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
