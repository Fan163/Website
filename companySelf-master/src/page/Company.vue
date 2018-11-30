<template>
  <div class="Company">
    <div>
      <b-col>
        <div  class="mudleImg" style="position:relative;" :style="{backgroundImage: 'url(http://www.smart-hox.com:8081/upFiles/' + aboutZ.first_pic + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center',backgroundSize:'cover'}">
          <div style="position:absolute;padding-left:40px;text-align:left;color:white;margin-top:80px;width:100%">
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="10">
                <h2>{{aboutZ.first_title}}</h2>
                <p class="smallSize" style="font-size:16px">{{aboutZ.first_introduce}}</p>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="2">
              </b-col>
            </b-row>
          </div>
        </div>
        <!-- <img class="mudleImg" :src="'http://www.smart-hox.com:8081/upFiles/' + "> -->
      </b-col>
    </div>
    <div style="margin-top:50px;margin-left:20px">
      <b-col>
        <div style="position:relative;text-align:left;">
          <div>
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="10">
                <h2>公司概况</h2>
                <p class="smallSize" style="font-size:16px">{{aboutZ.company_overview}}</p>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="2">
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </div>
    <div style="margin-top:40px;margin-left:20px">
      <b-col>
        <div style="position:relative;text-align:left;">
          <div>
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="10">
                <h2>企业文化</h2>
                <p class="smallSize" style="font-size:16px">{{aboutZ.company_culture}}</p>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="2">
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </div>
    <div class="LineBlock" style="margin-top:40px;margin-bottom:40px"></div>
    <div style="margin-top:50px;margin-left:20px">
      <b-col>
        <div style="position:relative;text-align:left;">
          <div>
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="10">
                <h2>愿景与使命</h2>
                <h4>让信息系统更简单</h4>
                <p class="smallSize" style="font-size:16px">{{aboutZ.company_mission}}</p>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="2">
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </div>
    <div class="LineBlock" style="margin-top:40px;margin-bottom:40px"></div>
     <div style="margin-top:50px;margin-left:20px">
      <b-col>
        <div style="position:relative;text-align:left;">
          <div>
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="10">
                <h2>选择Ztnet</h2>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="2">
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" sm="12" md="6" lg="4" v-for="(teampic,Idx) in ztnetlist" :key="Idx">
                <div style="width:100%;height:370px;position:relative;" :style="{backgroundImage: 'url(http://www.smart-hox.com:8081/upFiles/' + teampic.fpic + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center',backgroundSize:'cover'}">
                  <div class="ablow" v-if="listIndex != Idx && show">
                    <div style="display:flex;flex-direction:column;justify-content:center;min-height:100%;">
                      <b-row>
                        <b-col cols="2" sm="2" md="2" lg="2">
                          <div style="width:100%;height:90px;">
                            <img :src="'http://www.smart-hox.com:8081/upFiles/' + teampic.ficon" style="width:30px;height:30px;margin-left:10px">
                          </div>
                        </b-col>
                        <b-col cols="8" sm="7" md="7" lg="7" style="padding-right:0px">
                          <div style="width:100%;height:90px;">
                            <p style="font-size:16px;margin-bottom:0px;">{{teampic.ftitle}}<p>
                            <p style="line-height:20px;margin-top:-10px;overflow:hidden;font-size:14px">{{teampic.fcontent}}</p>
                          </div>
                        </b-col>
                        <b-col cols="2" sm="3" md="3" lg="3">
                          <div style="width:100%;height:90px;" active @click="changeshow(Idx)">
                            <img class="CursorPointer" style="width: 30px; height: 30px;padding-left:0px" src="../../static/img/up.png">
                          </div>
                        </b-col>
                      </b-row>
                      <!-- <p style="font-size:16px;margin:0;padding-top:20px;">
{{teampic.ftitle}}<p>
                      <p style="line-height:20px">{{teampic.fcontent}}</p> -->
                    </div>
                  </div>
                  <div class="ablow2"  v-if="listIndex == Idx && show2">
                    <div style="display:flex;flex-direction:column;justify-content:center;min-height:100%;">
                      <b-row>
                        <b-col cols="2" sm="2" md="2" lg="2">
                          <div style="width:100%;height:90px;">
                            <img class="fpic" :src="'http://www.smart-hox.com:8081/upFiles/' + teampic.ficon" style="width:30px;height:30px;margin-left:10px">
                          </div>
                        </b-col>
                        <b-col cols="8" sm="7" md="7" lg="7" style="padding-right:0px">
                          <div style="width:100%;height:90px;">
                            <p style="font-size:16px;margin-bottom:0px;">{{teampic.ftitle}}<p>
                            <p style="line-height:20px;margin-top:-10px;overflow:hidden;font-size:14px">{{teampic.fcontent}}</p>
                          </div>
                        </b-col>
                        <b-col cols="2" sm="3" md="3" lg="3" style="padding-left:-10px">
                          <div style="width:100%;height:90px;padding-left:0px" active @click="changeushow(Idx)">
                            <img class="CursorPointer" style="width: 30px; height: 30px;margin-right:10px" src="../../static/img/down.png">
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </div>
              </b-col>
              <!-- <b-col cols="12" sm="12" md="6" lg="4">
                <div style="width:100%;height:370px;background-color:pink;position:relative;">
                  <div class="ablow">
                    <div style="">
                      <p style="font-size:16px;margin-bottom:0px;">哈哈或<p>
                      <p style="line-height:20px;margin-top:-10px">kakakakkajidfkjdjdjgjgggg</p>
                    </div>
                  </div>
                </div>
              </b-col> -->
            </b-row>
            <b-row style="margin-top:30px">
            <b-col cols="6" sm="6" md="3" lg="2">
              <div style="width:100%;height:90px">
                <img class="fpic" :src="'http://www.smart-hox.com:8081/upFiles/' + photolist.photo1" style="width:100%;height:100%">
              </div>
            </b-col>
            <b-col cols="6" sm="6" md="3" lg="2">
              <div style="width:100%;height:90px">
                <img class="fpic" :src="'http://www.smart-hox.com:8081/upFiles/' + photolist.photo2" style="width:100%;height:100%">
              </div>
            </b-col>
            <b-col cols="6" sm="6" md="3" lg="2">
              <div style="width:100%;height:90px">
                <img class="fpic" :src="'http://www.smart-hox.com:8081/upFiles/' + photolist.photo3" style="width:100%;height:100%">
              </div>
            </b-col>
            <b-col cols="6" sm="6" md="3" lg="2">
              <div style="width:100%;height:90px">
                <img class="fpic" :src="'http://www.smart-hox.com:8081/upFiles/' + photolist.photo4" style="width:100%;height:100%">
              </div>
            </b-col>
            <b-col cols="6" sm="6" md="3" lg="2">
              <div style="width:100%;height:90px">
                <img class="fpic" :src="'http://www.smart-hox.com:8081/upFiles/' + photolist.photo5" style="width:100%;height:100%">
              </div>
            </b-col>
            <b-col cols="6" sm="6" md="3" lg="2">
              <div style="width:100%;height:90px">
                <img class="fpic" :src="'http://www.smart-hox.com:8081/upFiles/' + photolist.photo6" style="width:100%;height:100%">
              </div>
            </b-col>
          </b-row>
          </div>
        </div>
      </b-col>
    </div>
    <div class="LineBlock" style="margin-top:40px;margin-bottom:40px"></div>
    <div style="margin-top:50px;margin-left:20px">
      <b-col>
        <div style="position:relative;text-align:left;">
          <div>
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="9">
                <h2>管理团队</h2>
                <p class="smallSize" style="font-size:16px">{{newlist2.fcontent2}}</p>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="3">
                <div class="pic">
                  <img class="fpic" :src="'http://www.smart-hox.com:8081/upFiles/' + newlist2.image2" style="width:100%;height:100%">
                </div>
              </b-col>
            </b-row>
            <b-row v-for="(teampic,Idx) in teamlist" :key="Idx" style="margin-top:20px">
              <b-col cols="12" sm="12" md="12" lg="2">
                <div style="width:100%;height:100%;">
                  <img class="fpic" style="max-width:130px;max-height:200px;min-height:180px" :src="'http://www.smart-hox.com:8081/upFiles/' + teampic.head_pic">
                </div>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="7">
                <div style="width:100%;height:100%;" class="leader">{{teampic.introduce}}</div>
              </b-col>
            </b-row>
            <!-- <b-row style="margin-top:20px">
              <b-col cols="12" sm="12" md="12" lg="2">
                <div style="width:100%;height:100%;background-color:pink"></div>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="7">
                <div style="width:100%;height:100%;background-color:pink" class="leader">何赛灵（Sailing He）教授1999年归国受聘教育部“长江学者奖励计划”首批特聘教授而创立浙江大学光及电磁波研究中心，是中瑞(浙江大学-瑞典皇家工学院-瑞典隆德大学)光子联合研究中心主任，国家“海外高层次人才引进计划”（千人计划）入选者，国际电气电子工程师协会(IEEE）会士(Fellow)，美国光学学会(OSA)会士，国际光学工程学会(SPIE)会士和位于美国的电磁科学院Fellow。</div>
              </b-col>
            </b-row> -->
          </div>
        </div>
      </b-col>
    </div>
    <div class="LineBlock" style="margin-top:40px;margin-bottom:40px"></div>
    <div style="margin-top:50px;margin-left:20px">
      <b-col>
        <div style="position:relative;text-align:left;">
          <div>
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="10">
                <h2>典型客户</h2>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="2">
              </b-col>
            </b-row>
            <b-row style="margin-top:30px">
              <b-col cols="6" sm="6" md="3" lg="2" v-for="(cuspic,Idx) in customerlist" :key="Idx">
                <div style="width:100%;height:90px;">
                  <img class="fpic" :src="'http://www.smart-hox.com:8081/upFiles/' + cuspic.fpic">
                </div>
              </b-col>
              <!-- <b-col cols="6" sm="6" md="3" lg="2">
                <div style="width:100%;height:90px;background-color:green"></div>
              </b-col> -->
            </b-row>
          </div>
        </div>
      </b-col>
    </div>
    <div class="LineBlock" style="margin-top:40px;margin-bottom:40px"></div>
    <div style="margin-top:50px;margin-left:20px">
      <b-col>
        <div style="position:relative;text-align:left;">
          <div>
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="10">
                <h2>加入我们</h2>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="2">
              </b-col>
            </b-row>
            <b-row style="margin-top:30px">
              <b-col cols="12" sm="12" md="6" lg="6" v-for="(joinpic,Idx) in joinuslist" :key="Idx">
                <div style="width:100%;height:370px;">
                  <div style="width:100%;height:370px;position:relative;" :style="{backgroundImage: 'url(http://www.smart-hox.com:8081/upFiles/' + joinpic.join_pic + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center',backgroundSize:'cover'}">
                    <!-- <div class="ablow">
                      <div style="display:flex;flex-direction:column;justify-content:center;min-height:100%">
                        <p style="font-size:16px;margin-bottom:0px;">{{joinpic.join_title}}<p>
                        <p style="line-height:20px;margin-top:-10px">{{joinpic.join_content}}</p>
                      </div>
                    </div>
                    <div class="ablow2">
                      <div style="display:flex;flex-direction:column;justify-content:center;min-height:100%">
                        <p style="font-size:16px;margin-bottom:0px;">{{joinpic.join_title}}<p>
                        <p style="line-height:20px;margin-top:-10px">{{joinpic.join_content}}</p>
                      </div>
                    </div> -->
                    <div class="ablow" v-if="joinIndex != Idx && shows">
                      <div style="display:flex;flex-direction:column;justify-content:center;min-height:100%;">
                        <b-row>
                          <b-col cols="2" sm="2" md="2" lg="2">
                            <div style="width:100%;height:90px;">
                              <img :src="'http://www.smart-hox.com:8081/upFiles/' + joinpic.join_icon" style="width:30px;height:30px;margin-left:10px">
                            </div>
                          </b-col>
                          <b-col cols="8" sm="8" md="8" lg="8">
                            <div style="width:100%;height:90px;">
                              <p style="font-size:16px;margin-bottom:0px;">{{joinpic.join_title}}<p>
                              <p style="line-height:20px;margin-top:-10px;overflow:hidden;font-size:14px">{{joinpic.join_content}}</p>
                            </div>
                          </b-col>
                          <b-col cols="2" sm="2" md="2" lg="2">
                            <div style="width:100%;height:90px;" active @click="changejoin(Idx)">
                              <img class="CursorPointer" style="width: 30px; height: 30px;" src="../../static/img/up.png">
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div class="ablow2"  v-if="joinIndex == Idx && show3">
                      <div style="display:flex;flex-direction:column;justify-content:center;min-height:100%;">
                        <b-row>
                          <b-col cols="2" sm="2" md="2" lg="2">
                            <div style="width:100%;height:90px;">
                              <img class="fpic" :src="'http://www.smart-hox.com:8081/upFiles/' + joinpic.join_icon" style="width:30px;height:30px;margin-left:10px">
                            </div>
                          </b-col>
                          <b-col cols="8" sm="8" md="8" lg="8">
                            <div style="width:100%;height:90px;">
                              <p style="font-size:16px;margin-bottom:0px;">{{joinpic.join_title}}<p>
                              <p style="line-height:20px;margin-top:-10px;overflow:hidden;font-size:14px">{{joinpic.join_content}}</p>
                            </div>
                          </b-col>
                          <b-col cols="2" sm="2" md="2" lg="2">
                            <div style="width:100%;height:90px;" active @click="changeujoin(Idx)">
                              <img class="CursorPointer" style="width: 30px; height: 30px;" src="../../static/img/down.png">
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                  </div>
                </div>
              </b-col>
              <!-- <b-col cols="12" sm="12" md="6" lg="6">
                <div style="width:100%;height:370px;background-color:green">
                  <div style="width:100%;height:370px;background-color:pink;position:relative;">
                  <div class="ablow">
                    <div style="">
                      <p style="font-size:16px;margin-bottom:0px;">哈哈或<p>
                      <p style="line-height:20px;margin-top:-10px">kakakakkajidfkjdjdjgjgggg</p>
                    </div>
                  </div>
                </div>
                </div>
              </b-col> -->
            </b-row>
          </div>
        </div>
      </b-col>
    </div>
    <div class="LineBlock" style="margin-top:40px;margin-bottom:40px"></div>
    <div style="margin-top:50px;margin-left:20px;color:white;margin-right: 20px" class="news">
      <b-col>
        <div style="position:relative;text-align:left;margin-top:30px;overflow:hidden;">
          <div style="overflow:hidden;">
            <b-row style="padding-top:30px;min-height:540px;overflow:auto">
              <b-col cols="12" sm="12" md="6" lg="6">
                <b-row >
                  <b-col cols="12" sm="12" md="12" lg="12">
                    <h3>新闻</h3>
                  </b-col>
                  <b-col cols="12" sm="12" md="12" lg="12" style="margin-top:30px;width:100%" v-for="(newspic,Idx) in newslist" :key="Idx" >
                    <div class="mewslist" v-if="newsIndex != Idx && shown">
                      <div style="float:left;margin-left:30px;margin-right:20px;margin-top:40px">
                        <img class="fpic" style="width:40px;height:40px;margin-top:-10px"  :src="'http://www.smart-hox.com:8081/upFiles/' + newspic.news_icon">
                      </div>
                      <div style="float:left;margin-top:20px;min-width:100px;height:80px;overflow:hidden">
                        <p>{{newspic.createtime}}</p>
                        <p style="width:100%">{{newspic.news_title}}</p>
                      </div>
                      <div style="float:right;position: absolute;right: 30px;top: 30px;" @click="changenews(Idx)">
                        <img class="CursorPointer" style="width: 30px; height: 30px;" src="../../static/img/down.png">
                      </div>
                      <div style="height:40px;clear:both"></div>
                    </div>
                    <div class="mewslist1" v-if="newsIndex == Idx && show4">
                      <div style="float:left;margin-left:30px;margin-right:20px;margin-top:40px">
                        <img class="fpic" style="width:40px;height:40px;margin-top:-10px"  :src="'http://www.smart-hox.com:8081/upFiles/' + newspic.news_icon">
                      </div>
                      <div style="float:left;margin-top:20px;min-width:100px;height:80px;">
                        <p>{{newspic.createtime}}</p>
                        <p style="width:100%">{{newspic.news_title}}</p>
                        <p style="width:100%">{{newspic.news_detail}}</p>
                      </div>
                      <div style="float:right;position: absolute;right: 30px;top: 30px;" @click="changeunews(Idx)">
                        <img class="CursorPointer" style="width: 30px; height: 30px;" src="../../static/img/up.png">
                      </div>
                      <div style="height:40px;clear:both"></div>
                    </div>
                  </b-col>
                  <!-- <b-col cols="12" sm="12" md="12" lg="12" style="margin-top:30px">
                    <div class="mewslist">
                      <div style="float:left;margin-left:30px;margin-right:30px;margin-top:40px">icon</div>
                      <div style="float:left;margin-top:20px">
                        <p>2018年 10月10日</p>
                        <p>就安静安静就安静安静安静</p>
                      </div>
                    </div>
                  </b-col> -->
                </b-row>
                <!-- <div style="width:100%;height:50px;text-align:center;margin-top:30px">查看所有新闻</div>      -->
              </b-col>
              <b-col cols="12" sm="12" md="6" lg="6">
                <b-row>
                  <b-col cols="12" sm="12" md="12" lg="12">
                    <h3>活动</h3>
                  </b-col>
                   <b-col cols="12" sm="12" md="12" lg="12" style="margin-top:30px" v-for="(actpic,Idx) in activitylist" :key="Idx">
                    <div class="mewslist" v-if="actIndex != Idx && show6">
                      <div style="float:left;margin-left:30px;margin-right:20px;margin-top:40px">
                        <img class="fpic" style="width:40px;height:40px;margin-top:-10px" :src="'http://www.smart-hox.com:8081/upFiles/' + actpic.activity_icon">
                      </div>
                      <div style="float:left;margin-top:20px;min-width:100px;height:80px;overflow:hidden">
                        <p style="width:100%">{{actpic.createtime}}</p>
                        <p style="width:100%">{{actpic.activity_title}}</p>
                      </div>
                      <div style="float:right;position: absolute;right: 30px;top: 30px;" @click="changeact(Idx)">
                        <img class="CursorPointer" style="width: 30px; height: 30px;" src="../../static/img/down.png">
                      </div>
                      <div style="height:40px;clear:both"></div>
                    </div>
                    <div class="mewslist1" v-if="actIndex == Idx && show5">
                      <div style="float:left;margin-left:30px;margin-right:20px;margin-top:40px">
                        <img class="fpic" style="width:40px;height:40px;margin-top:-10px"  :src="'http://www.smart-hox.com:8081/upFiles/' + actpic.activity_icon">
                      </div>
                      <div style="float:left;margin-top:20px;min-width:100px;height:80px;">
                        <p>{{actpic.createtime}}</p>
                        <p style="width:100%">{{actpic.activity_title}}</p>
                        <p style="width:100%">{{actpic.activity_detail}}</p>
                      </div>
                      <div style="float:right;position: absolute;right: 30px;top: 30px;"  @click="changeuact(Idx)">
                        <img class="CursorPointer" style="width: 30px; height: 30px;" src="../../static/img/up.png">
                      </div>
                      <div style="height:40px;clear:both"></div>
                    </div>
                  </b-col>
                  <!-- <b-col cols="12" sm="12" md="12" lg="12" style="margin-top:30px">
                    <div class="mewslist">
                      <div style="float:left;margin-left:30px;margin-right:30px;margin-top:40px">icon</div>
                      <div style="float:left;margin-top:20px">
                        <p>2018年 10月10日</p>
                        <p>就安静安静就安静安静安静</p>
                      </div>
                    </div>
                  </b-col> -->
                </b-row>
                <!-- <div style="width:100%;height:50px;text-align:center;margin-top:30px">查看所有活动</div>      -->
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </div>
     <div class="LineBlock" style="margin-top:40px;margin-bottom:40px"></div>
    <div style="margin-top:50px;margin-left:20px">
      <b-col>
        <div style="position:relative;text-align:left;">
          <div>
            <b-row>
              <b-col cols="12" sm="12" md="12" lg="10">
                <h2>{{companylist.company_name}}</h2>
                <p class="smallSize" style="font-size:16px">地址:{{companylist.company_address}}</p>
                <p class="smallSize" style="font-size:16px">电话:{{companylist.company_tel}}</p>
                <p class="smallSize" style="font-size:16px">Mail:{{companylist.company_email}}</p>
              </b-col>
              <b-col cols="12" sm="12" md="12" lg="2">
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </div>
    <!-- <div v-html="thishtml"></div> -->
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Company',
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
.mudleImg{
  width:100%;
  height:500px;
  background-color: pink
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
