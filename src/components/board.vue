<template>
  <div class="board flex_tb">
    <!-- 顶部 -->
    <div class="header">
      <!-- <div class="search">
        <input type="text">
        <a href="#">
          <img src="../assets/images/search.png" alt="搜索">
        </a>
      </div> -->
      <div class="title">
        <img src="../assets/images/logo.png" alt="毅创空间">
        <span>地质灾害监测平台</span>
      </div>
      <div class="time_home flex_m">
        <span>{{currentTime}}</span>
        <a href="#">
          <img src="../assets/images/zhuye.png" alt>
        </a>
        <a href="#">
          <img src="../assets/images/shezhi.png" alt>
        </a>
      </div>

      <div class="info-wrap">
        <div class="mr30 fr">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button @click="findHistory">查询历史数据</el-button>
        </div>
      </div>
    </div>

    <!-- 中部 -->
    <div class="main flex_lr">
      <!-- 左边数据 -->
      <div class="main-left flex_tb">
        <div class="container">
          <v-chart ref="types">
        </v-chart></div>
        <div class="container">
          <v-chart ref="grade">
        </v-chart></div>
        <div class="container">
          <v-chart ref="stability"></v-chart>
        </div>
      </div>
      <!-- 中间数据 -->
      <div class="main-center flex_tb_a">
        <div class="flex_lr h50">
          <div class="wrap w100 mr20">
            <v-chart ref="distribute"></v-chart>
          </div>
          <div class="info fcf w40">
            <h1 class="annunciate tac">地灾点威胁情况</h1>
            <p class="pt10 pb10">地质灾害群测群防点：</p>
            <ul class="list">
              <li>威胁<span style="color: #FF7744 ;"> 114 </span>户</li>
              <li>人数<span style="color: yellow;"> 1411 </span>人</li>
              <li>房屋<span style="color: green;"> 2525 </span>间</li>
              <li>威胁财产<span style="color: red;"> 27772 </span>万元</li>
            </ul>
          </div>
        </div>
        <div class="flex_lr h40"> 
          <!-- TODO:更改高度适配中间 -->
          <div class="wrap w60 mr20">
            <v-chart ref="amount"></v-chart>
          </div>
          <div class="wrap w40">
            <v-chart ref="rank"></v-chart>
          </div>
        </div>
      </div>
      <!-- 右边数据 -->
      <div class="main-right flex_tb">
        <div class="container">
          <v-chart ref="add"></v-chart>
        </div>
        <div class="container">
          <v-chart ref="reduce"></v-chart>
        </div>
        <div class="container">
          <v-chart ref="dynamic"></v-chart>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer flex_c">
      <div class="msg-box">
        <p class="dib" style="padding-left:100%">
          <img src="../assets/images/laba.png" alt="消息">
          <span>9527号地灾隐患点已成功核销隐患9527号地灾隐患点已成功核销隐患9527号地灾隐患点已成功核销隐患！</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { time } from "../assets/js/utils.js"

import vcharts from "./common/charts"

export default {
  name: "board",
  components: {
    'v-chart': vcharts
  },
  data() {
    return {
      currentTime: "",
      options: [],
      value: ''
    };
  },
  created() {
    this.dateOption();
  },
  mounted() {
    // 实时时间
    this.currentTime = time();
    setInterval(() => {
      this.currentTime = time();
    }, 1000);
    
    this.$nextTick(() => {
      this.get_chart_data();
    })
  },
  methods: {
    // 设置查询年月
    dateOption() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      this.value = month;
      for (let i = 1; i <= 12; i++) {
        this.options.push({
          value: i,
          label: `${year}年${i}月`
        })
      }
    },
    // 查询历史
    findHistory() {
      console.log(this.value);

    },
    // 图表数据
    get_chart_data() {
      // 灾害类型
      this.$refs.types.handleChart({
        type: "pie",
        title: "灾害类型",
        s_name: "灾害类型",
        legend: "",
        data: [
          {value:335, name:'崩塌'},
          {value:310, name:'滑坡'},
          {value:234, name:'泥石流'},
          {value:135, name:'地面塌陷'},
          {value:1548, name:'地裂缝'},
          {value:1548, name:'地面沉降'}
        ]
      });
      // 规模等级
      this.$refs.grade.handleChart({
        type: "pie",
        title: "规模等级",
        s_name: "规模等级",
        legend: "",
        data: [
          {value:335, name:'特大型'},
          {value:310, name:'大型'},
          {value:234, name:'中型'},
          {value:135, name:'小型'}
        ]
      });
      // 稳定性
      this.$refs.stability.handleChart({
        type: "funnel",
        title: "地灾点稳定性",
        s_name: "地灾点稳定性",
        legend: "",
        data: [
          {value: 100,name: '稳定性好'},
          {value: 80,name: '稳定性差'},
          {value: 60,name: '稳定性较差'}
        ]
      });
      // 增加
      this.$refs.add.handleChart({
        type: "bar",
        barColor: "#C63300",
        title: "地灾隐患点增加",
        s_name: "数量",
        xAxis: ['北京', '上海', '广州', '深圳', '重庆', '天津', '大连', '大连', '大连', '大连', '大连', '大连'],
        data: [1200, 2000, 1500, 8000, 7000, 1100, 1300, 1500, 5300, 1300, 1000, 1300]
      });
      // 核销
      this.$refs.reduce.handleChart({
        type: "bar",
        barColor: "#00AA00",
        title: "地灾隐患点核销",
        s_name: "数量",
        xAxis: ['北京', '上海', '广州', '深圳', '重庆', '天津', '大连', '大连', '大连', '大连', '大连', '大连'],
        data: [1200, 2000, 1500, 8000, 7000, 1100, 1300, 1320, 1000, 1300, 3100, 1300]
      });
      // 动态
      this.$refs.dynamic.handleChart({
        type: "bar",
        barColor: "#FF3333",
        title: "地灾隐患点动态",
        s_name: "数量",
        xAxis: ['北京', '上海', '广州', '深圳', '重庆', '天津', '大连', '大连', '大连', '大连', '大连', '大连'],
        data: [1200, -2000, 1500, 8000, -7000, -1100, 1300, 1800, 1300, 3300, 1300, 2300]
      });
      // 地图分布图
      this.$refs.distribute.handleChart({
        type: "map",
        title: "分布图",
        s_name: "分布点",
        data: [
          {name: "上海", value:[121.48, 31.22, 25]},
          {name: "鄂尔多斯", value:[109.781327, 39.608266, 12]},
          {name: "厦门", value:[118.1, 24.46, 26]},
          {name: "张家口", value:[114.87, 40.82, 31]},
          {name: "青岛", value:[120.33, 36.07, 18]},
        ]
      });
      // 地灾点总数
      this.$refs.amount.handleChart({
        type: "bar",
        barColor: "#3ff9ee",
        title: "地灾点总数",
        s_name: "数量",
        xAxis: ['北京', '上海', '广州', '深圳', '重庆', '天津', '大连', '大连', '大连', '大连', '大连', '大连'],
        data: [1200, 2000, 1500, 8000, 7000, 1100, 1300, 1900, 6300, 1800, 4300, 1300]
      });
      // 监测级别
      this.$refs.rank.handleChart({
        type: "pie",
        barColor: "#ccc",
        title: "地灾点监测级别",
        s_name: "数量",
        roseType: "radius",
        data: [
          {value:400, name:'省级'},
          {value:310, name:'市级'},
          {value:235, name:'县级'}
        ]
      });
      
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style/board.css";
</style>
<style>
  .el-input__inner {
    background-color: rgba(255,255,255,0);
    border: 1px solid #084d8c;
    color: #ccc;
  }
  .el-button {
    background-color: rgba(255,255,255,0);
    border: 1px solid #084d8c;
    color: #ccc;
  }
  .el-button:focus, .el-button:hover {
    background-color: rgba(8, 31, 85, 0);
    border: 1px solid #409EFF;
    color: #ccc;
  }
  .el-select-dropdown {
    background-color: rgba(8, 31, 85, 0.9);
    border: 1px solid #409EFF;
  }
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background-color: rgb(8, 95, 182);
    color: #ccc;
  }
  .el-select-dropdown__item {
    color: #ccc;
  }
  .el-select:hover .el-input__inner {
    border-color: #409EFF;
  }
  .popper__arrow {
    display: none!important;
  }
  .el-popper {
    margin-top: 5px!important;
  }
</style>

