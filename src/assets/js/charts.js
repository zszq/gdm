import echarts from 'echarts'
import 'echarts/map/js/china.js';

var charts = {
  // 饼图
  pie(dom, data) {
    var myChart = echarts.init(dom);
    var option = {
      title: {
        text: data.title,
        subtext: '',
        textStyle: {
          color: '#ccc',
          fontSize: 20
        },
        left: "center"
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: '60',
        data: data.legend,
        textStyle: {
          color: "rgba(156,179,228,1)"
        }
      },
      color: ['#d53a35', '#9fdabf', '#334b5c', '#7fae90', '#6ab0b8', '#e98f6f'],
      series: [{
        name: data.s_name,
        type: 'pie',
        radius: '55%',
        center: ['60%', '50%'],
        label: {
          show: true,
          formatter: "{b}({d}%)"
        },
        labelLine: {
          length: 8,
          length2: 8
        },
        data: data.data,
        roseType: data.roseType,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function() {
      myChart.resize();
    })
  },

  // 环形图
  annulus(dom, data) {
    var myChart = echarts.init(dom);
    var option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      color: ['#8ec641', '#8129dd', '#2756ca', '#ffc100', '#f46722'],
      series: [{
        name: data.s_name,
        type: 'pie',
        radius: ['30%', '50%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'outside',
          formatter: "{b}{d}%"
        },
        data: data.details
      }]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function() {
      myChart.resize();
    });
  },

  // 柱状图
  bar(dom, data) {
    var myChart = echarts.init(dom);
    var option = {
      title: {
        text: data.title,
        subtext: '',
        textStyle: {
          color: '#ccc',
          fontSize: 20
        },
        left: "center"
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
      },
      xAxis: {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "rgba(156,179,228,1)",
        },
        data: data.xAxis
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "rgba(156,179,228,1)",
          formatter: (value, index) => {
            return value;
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#2d3f63"
          }
        }
      },
      grid: {
        top: 50,
        bottom: 20,
        right: 10
      },
      series: [{
        name: data.s_name,
        type: 'bar',
        label: {
          show: true,
          position: "top"
        },
        itemStyle: {
          color: (params) => {
            if(params.value > 0) {
              return data.barColor;
            }else{
              return "#9fdabf";
            }
          },
          emphasis: {
            color: '#45bfff',
          }
        },
        data: data.data
      }]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function() {
      myChart.resize();
    });
  },

  // 折线图
  line(dom, data) {
    var myChart = echarts.init(dom);
    var option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}点 : {c}人"
      },
      xAxis: {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "rgba(156,179,228,1)"
        },
        data: data.hour
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "rgba(156,179,228,1)",
          formatter: (value, index) => {
            return value / 1000 + 'k';
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#2d3f63"
          }
        }
      },
      grid: {
        top: 20,
        bottom: 20,
        right: 10
      },
      series: [{
        type: 'line',
        name: data.s_name,
        itemStyle: {
          color: '#43beff',
          lineStyle: {
            color: '#43beff'
          }
        },
        symbolSize: 5,
        data: data.num
      }]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function() {
      myChart.resize();
    });
  },

  // 地图散点图
  map(dom, data) {
    var myChart = echarts.init(dom);
    var option = {
      // backgroundColor: '#404a59',//整个画布背景
      //标题组件
      title: {
        text: '地质灾害监测点',
        // subtext: '',
        // sublink: '',
        left: '20',
        textStyle: {
          color: '#ccc',
          fontSize: 20,
          fontFamily: 'AlibabaPuHuiTiM'
        }
      },
      //提示框组件
      tooltip: {
        trigger: 'item',
        "confine": true,
        "formatter": (value) => { //自定义提示信息
          let dataCon = value.data;
          let txtCon = '监测点：' + dataCon.name + "<br />" + "设备数量: " + dataCon.value[2];
          return txtCon;
        },
        textStyle: {
          color: '#9cb3e6'
        }
      },
      //左下lengend
      visualMap: {
        show: false,
        min: 0, //最小
        max: 200, //最大
        splitNumber: 5, //共分5层
        left: 20,
        bottom: 20,
        // color: ['#50a3ba', '#eac736', '#d94e5d'], //颜色按值大小从高到低依次渐变
        color: ["#d53a35"],
        textStyle: {
          color: '#fff'
        }
      },
      //地图区域样式
      geo: {
        map: 'china',
        label: {
          show: true,
          color: "#9cb3e4",
          emphasis: {
            show: true,
            color: '#fff'
          }
        },
        itemStyle: {
          //未激活样式
          normal: {
            areaColor: 'rgba(0,0,0,0)',
            borderColor: '#75aad4'
          },
          //激活样式
          emphasis: {
            areaColor: '#184072',
          }
        }
      },
      //数据
      series: [{
        name: data.s_name,
        type: 'scatter',
        coordinateSystem: 'geo',
        data: data.data,
        symbolSize: 12,
        //直接在点上显示标签
        // label: {
          // show: true,
          // normal: {
          //   show: true
          // },
          // emphasis: {
          //   show: true
          // },
          // formatter: '{b}',
          // offset: [15, -15], //文字的相对偏移
        // },
        //标签的样式
        itemStyle: {
          emphasis: {
            borderColor: '#fff',
            borderWidth: 1,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    }
    myChart.setOption(option);
    window.addEventListener("resize",function() {
      myChart.resize();
    });
  },

  // 漏斗图
  funnel(dom, data) {
    var myChart = echarts.init(dom);
    var option = {
      title: {
        text: data.title,
        subtext: '',
        textStyle: {
          color: '#ccc',
          fontSize: 20
        },
        left: "center"
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
      },
      legend: {
        left: 'left',
        top: '30',
        textStyle: {
          color: "rgba(156,179,228,1)"
        },
        data: ""
      },
      calculable: true,
      series: [{
        name: data.s_name,
        type: 'funnel',
        bottom: 10,
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 5,
        label: {
          show: true,
          position: 'inside'
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid'
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        emphasis: {
          label: {
            fontSize: 20
          }
        },
        data: data.data
      }]
    }
    myChart.setOption(option);
    window.addEventListener("resize",function() {
      myChart.resize();
    });
  }
}

export default charts;
