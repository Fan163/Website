<template>
    <div class="SelectGoodsByType">
        <div class="SelectGoodsByType">
            <Row class="type-goods">
                <Col span="6" class="typeName" v-for="(type,index) in typeList" v-bind:key="type.value" v-bind:class="{isActive:index==isActive,isCommon:index!=isActive}" >
                    <div @click="showProduct(index)">{{type.name}}</div>
                </Col>
            </Row>
            <Row class="product-area">
                <Col span="4" v-for="(product,index) in tableData" v-bind:key="index">
                    <div class="product" v-bind:class="{isSecect:product.isSecect}" @click="getGoodsInfo(index)">
                        <span>{{product.name}}</span>¥{{product.price}}
                    </div>
                </Col>
            </Row>
            <Row class="search-area">
                <Col span="8">
                    <Input v-model="search" placeholder="输入商品名称搜索"/>
                </Col>
                <Col span="12">&nbsp;</Col>
                <Col span="4" class="icon-area">
                  <template v-if="page>1">
                    <Icon type="md-arrow-round-back" size="36" color="#1179c9" @click="BackToLastPage" />
                  </template>
                  <template v-else>
                    <Icon type="md-arrow-round-back" size="36" color="#e8eaec"/>
                  </template>
                  <template v-if="page<=next">
                    <Icon type="md-arrow-round-forward" size="36" color="#1179c9" @click="goToNextPage"/>
                  </template>
                  <template v-else>
                    <Icon type="md-arrow-round-forward" size="36" color="#e8eaec"/>
                  </template>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SelectGoodsByType',
  components: {
  },
  props: {
    productList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isActive: 0,
      typeList: [
        { value: 0, name: '分类一' },
        { value: 1, name: '分类二' },
        { value: 2, name: '分类三' },
        { value: 3, name: '分类四' },
        { value: 4, name: '分类五' },
        { value: 5, name: '分类六' },
        { value: 6, name: '分类七' },
        { value: 7, name: '分类八' }
      ],
      search: null,
      tableData: [],
      page: 1, // 当前页码
      pageSize: 30, // 每页显示30个
      total: null, // 数据总量
      //   previous: true, // 显示上一页图标
      next: 0 // 显示下一页图标
    }
  },
  methods: {
    // 点击切换分类
    showProduct (index) {
      this.isActive = index
    },
    // 上一页
    BackToLastPage () {
      let page = this.page
      let pageSize = this.pageSize
      if (page > 1) {
        page -= 1
        this.page = page
        this.getTable(page, pageSize)
        // this.previous = true
      } else {
        // this.previous = false
      }
    },
    // 下一页
    goToNextPage () {
      let page = this.page
      let pageSize = this.pageSize
      if (this.productList.length > page * pageSize) {
        page += 1
        this.page = page
        this.getTable(page, pageSize)
        // this.next = true
      } else {
        // this.next = false
      }
    },
    getTable (page, pageSize) {
      let arr = this.productList
      this.tableData = arr.filter((item, index, arr) => {
        if (index >= (page - 1) * pageSize && index < page * pageSize) {
          return item
        }
      })
      console.log(this.tableData)
    },
    getGoodsInfo (obj) {
      this.$emit('get-goods-info', obj)
    }
  },
  mounted () {
    this.total = this.productList.length
    let page = this.page
    let pageSize = this.pageSize
    this.next = this.total / this.pageSize
    this.getTable(page, pageSize)
  }
}
</script>
<style lang="less">
    .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .select-goods-modal{
        .ivu-modal-body{
            padding: 8px 10px 0 10px;
            .type-goods{
                border-top: 1px solid #e8eaec;
                border-left: 1px solid #e8eaec;
            }
            .isActive{
                background-color: #1179c9;
                color: #fff;
            }
            .isCommon{
                color: #1179c9;
                border-bottom: 1px solid #e8eaec;
                border-right: 1px solid #e8eaec;

            }
            .typeName{
                cursor: pointer;
                height: 40px;
                line-height: 40px;
                float: left;
                text-align: center;
            }
            .product-area.ivu-row{
                border: 1px solid #e8eaec;
                padding: 6px;
                margin-top: 4px;
                .ivu-col{
                    .product{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 55px;
                        padding: 5px;
                        border: 1px solid #e8eaec;
                        color: #1179c9;
                        margin: 5px;
                        span{
                            text-align: center;
                            line-height: 14px;
                        }
                    }
                    .isSecect{
                      background: #e8f1fb;
                      color: #515a6e;
                    }
                }
            }
            .search-area.ivu-row{
                padding: 10px 0;
                display: flex;
                align-items: center;
                .icon-area{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
