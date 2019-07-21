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
      <!-- 查询历史数据 -->
      <!-- <div class="info-wrap">
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
      </div> -->
    </div>

    <!-- 内容 -->
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
          <div class="wrap w90 mr20">
            <v-chart ref="distribute"></v-chart>
          </div>
          <div class="wrap w40">
            <v-chart ref="device"></v-chart>
          </div>
        </div>
        <div class="listWarn oh h40">
          <div class="h90 oh m10">
            <table class="w100 h100 fcc">
              <tr class="fwb">
                <th>预警时间</th>
                <th>预警原因</th>
              </tr>
              <tr v-for="(item, index) in listWarning" :key="index" class="">
                <td class="nowrap">{{item.time}}</td>
                <td>{{item.cause}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- 右边数据 -->
      <div class="main-right flex_tb">
        <div class="container">
          <v-chart ref="amount"></v-chart>
        </div>
        <div class="container">
          <v-chart ref="add"></v-chart>
        </div>
        <div class="container">
          <v-chart ref="reduce"></v-chart>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer flex_c">
      <div class="msg-box">
        <p class="dib" style="padding-left:100%">
          <img src="../assets/images/laba.png" alt="消息">
          <span>茂县石大关乡梯子槽滑坡监测点第9527号地灾隐患已成功核销！</span>
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
      value: '',
      listWarning: [
        {
          time: "07-22 07:45:10",
          cause: "红色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移2-01>每日变化速率(水平)高于预警值20.0mm/d到达71.2mm/d.",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 05:43:16",
          cause: "橙色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移2-01>每日变化速率(水平)高于预警10.0mm/d到达71.2mm/d",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 05:36:12",
          cause: "红色预警,纳雍骔岭左家营煤矿,监测点<地表位移1-03>每日变化速率(竖向)绝对值大于预20.0mm/d到达-324.0mm/d",
          location: "纳雍骔岭左家营煤矿"
        },
        {
          time: "07-22 03:22:14",
          cause: "黄色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移2-01>每日变化速率(水平)高于预警5.0mm/d到达71.2mm/d",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 02:45:08",
          cause: "红色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移1-07>每日变化速率(竖向)绝对值大预警值20.0mm/d到达-352.7mm/d",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 02:42:08",
          cause: "橙色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移1-07>每日变化速率(竖向)绝对值大预警值10.0mm/d到达-352.7mm/d",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 02:26:08",
          cause: "黄色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移1-07>每日变化速率(竖向)绝对值大预警值5.0mm/d到达-352.7mm/d",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 01:15:05",
          cause: "黄色预警,福建省福清市建新水库,监测点<建新水库表面位移>小时变化速率(竖向)绝对值大警值72.0mm/d到达-115.7mm/d",
          location: "福建省福清市建新水库"
        },
        {
          time: "07-22 01:10:32",
          cause: "红色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移2-05>每日变化速率(竖向)绝对值大预警值20.0mm/d到达-115到达224.8mm/d",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 01:08:07",
          cause: "黄色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移2-03>每日变化速率(水平)高于预警5.0mm/d到达9. 2mm/d",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 01:06:05",
          cause: "橙色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移2-05>每日变化速率(水平)高于预警10.0mm/到达41.2mm/d",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 01:05:06",
          cause: "黄色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移1-08>每日变化速率(竖向)绝对值大预警值5.0mm/d到达5.1mm/d",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 00:55:04",
          cause: "黄色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移2-05>每日变化速率(水平)高于预警5.0mm/d到达39.8mm/d.",
          location: "日喀则市聂拉木县樟木口岸"
        },
        {
          time: "07-22 00:50:08",
          cause: "橙色预警,纳雍骔岭左家营煤矿,监测点<地表位移1-03>每日变化速率(竖向)绝对值大于预10.0mm/d到达-324.0mm/d",
          location: "纳雍骔岭左家营煤矿"
        },
        {
          time: "07-22 00:43:11",
          cause: "红色预警,日喀则市聂拉木县樟木口岸,监测点<地表位移2-02>每日变化速率(竖向)绝对值大预警值20.0mm/d到达220.9mm/d",
          location: "日喀则市聂拉木县樟木口岸"
        }
      ]
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
      // 预警等级
      this.$refs.grade.handleChart({
        type: "pie",
        title: "预警等级",
        s_name: "预警等级",
        legend: "",
        color: ['#d53a35', '#f8b944', '#ffe600', '#585eaa', '#98bfaa', '#e98f6f'],
        data: [
          {value:10, name:'红色预警'},
          {value:40, name:'橙色预警'},
          {value:70, name:'黄色预警'},
          {value:10, name:'蓝色预警'},
		      {value:1120, name:'未预警设备'}
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
      // 设备状态比例
      this.$refs.device.handleChart({
        type: "pie",
        title: "设备状态",
        s_name: "设备状态",
        legend: "",
        data: [
          {value: 5,name: '离线设备'},
          {value: 98,name: '在线设备'}
        ]
      });
      // 总数
      this.$refs.amount.handleChart({
        type: "bar",
        barColor: "#9fdabf",
        title: "地灾点总数",
        s_name: "数量",
        xAxis: ["四川", "西藏", "福建", "广西", "贵州", "河南"],
        data: [80, 20, 38, 80, 70, 43]
      });
      // 增加
      this.$refs.add.handleChart({
        type: "bar",
        barColor: "#d53a35",
        title: "地灾隐患点增加",
        s_name: "数量",
        xAxis: ["四川", "西藏", "福建", "广西", "贵州", "河南"],
        data: [40, 10, 15, 20, 30, 11]
      });
      // 核销
      this.$refs.reduce.handleChart({
        type: "bar",
        barColor: "#74c1ca",
        title: "地灾隐患点核销",
        s_name: "数量",
        xAxis: ["四川", "西藏", "福建", "广西", "贵州", "河南"],
        data: [12, 5, 20, 8, 11, 12]
      });
      // 地图分布图
      this.$refs.distribute.handleChart({
        type: "map",
        title: "分布图",
        s_name: "分布点",
        data: [
          {name: "茂县石大关乡梯子槽滑坡", value:[103.676627,31.932229, 13]},
          {name: "茂县黑虎乡四村滑坡", value:[103.752608,31.877082, 12]},
          {name: "日喀则市聂拉木县樟木口岸", value:[185.972852,27.97483, 16]},
          {name: "福建省福清市建新水库", value:[119.241932,25.616386, 13]},
          {name: "河池市金城江区三中", value:[108.044396,24.693444, 14]},
          {name: "纳雍骔岭左家营煤矿", value:[105.24758,26.70901, 15]},
          {name: "拉萨墨竹工卡中学", value:[91.7419,29.842987, 18]},
          {name: "嵩县旧县镇西店村前河组滑坡自动化监测", value:[111.869549,34.002271, 10]},
          {name: "西峡县石灰岭村", value:[111.310566,33.627057, 15]},
          {name: "四川集美隧道", value:[105.68369,28.062823, 17]},
          {name: "纳雍县张家湾镇洒村老鹰岩", value:[105.444134,26.841475, 5]}
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

