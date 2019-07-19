<template>
  <div class="monitor">
    <div class="top w100 flex_lr">
      <div class="map" id="map" style="width: 58%;"></div>
      
      <div class="top-wrap w40 flex_m">
        <div class="top-monitor w100">
          <!-- <div class="video-sum">共覆盖<span>58</span>个摄像机</div> -->
          <!-- <v-video ref="videoPlayer0"></v-video> -->
          <video id="video1" src="http://192.168.0.57:9002" poster="../../assets/images/timg.gif" autoplay loop controls>您的浏览器不支持视频播放，请换用最新版现代浏览器！</video>
        </div>
      </div>
    </div>

    <div class="bottom w100 flex_lr_m">
      <div class="bottom-monitor">
        <!-- <v-video ref="videoPlayer2"></v-video> -->
        <video id="video2" src="http://192.168.0.57:9001" poster="../../assets/images/timg.gif" autoplay loop controls>您的浏览器不支持视频播放，请换用最新版现代浏览器！</video>
      </div>
      <div class="bottom-monitor">
        <!-- <v-video ref="videoPlayer2"></v-video> -->
        <video id="video3" src="http://192.168.0.57:9002" poster="../../assets/images/timg.gif" autoplay loop controls>您的浏览器不支持视频播放，请换用最新版现代浏览器！</video>
      </div>
      <div class="bottom-monitor">
        <!-- <v-video ref="videoPlayer3"></v-video> -->
        <video id="video4" src="http://192.168.0.57:9001" poster="../../assets/images/timg.gif" autoplay loop controls>您的浏览器不支持视频播放，请换用最新版现代浏览器！</video>
      </div>

      <div class="more flex_tb">
        <div class="btn"><img src="../../assets/images/gengduo.png" alt=""><a href="#">更多</a></div>
        <div class="flex_tb">
          <div class="btn"><img src="../../assets/images/jiankong.png" alt=""><a href="#">监控</a></div>
          <div class="btn"><img src="../../assets/images/baojing.png" alt=""><a href="#">报警</a></div>
          <div class="btn"><img src="../../assets/images/huifang.png" alt=""><a href="#">回放</a></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import charts from "../../assets/js/charts.js"
import videoPlayer from '../common/videoPlayer'

export default {
  name: 'monitor',
  components: {
    'v-video': videoPlayer
  },
  data () {
    return {
      
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.get_monitor();
      // this.playVideo();
    })
    
  },
  activated() {
    this.get_monitor();
    this.playControl();
  },
  deactivated() {

  },
  methods: {
    // 请求监控数据
    get_monitor() {
      this.axios.post(process.env.API_HOST + '/monitor/list', this.$qs.stringify({limit: 100, page: 1})).then((res) => {
        // console.log(res);
        if(res.data.code == 200) {
          let data = res.data.data;
          let mapData = [];
          for (let i = 0; i < data.length; i++) {
            let name = data[i].communityName;
            let position = data[i].addr;
            let num = data[i].num;
            let coordinate = data[i].coordinate;
            let value = JSON.parse(coordinate).concat(num);
            mapData.push({name, position, value});
          }
          // console.log(mapData);
          charts.map('map', mapData);
        }
      }).catch((err) => {
        console.log(err);
      })
    },
    playControl() {
      var video1 = document.getElementById("video1");
      var video2 = document.getElementById("video2");
      var video3 = document.getElementById("video3");
      var video4 = document.getElementById("video4");
      video1.play();
      // video2.play();
      // video3.play();
      // video4.play();
    }
    // 设置地址播放监控
    // playVideo() {
    //   this.$refs.videoPlayer0.playerOptions.sources[0].src = "rtmp://mobliestream.c3tv.com:554/live/goodtv.sdp";
    //   this.$refs.videoPlayer1.playerOptions.sources[0].src = "rtmp://58.200.131.2:1935/livetv/hunantv";
    //   this.$refs.videoPlayer2.playerOptions.sources[0].src = "http://vjs.zencdn.net/v/oceans.mp4";
    //   this.$refs.videoPlayer3.playerOptions.sources[0].src = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
    //   this.$refs.videoPlayer3.playerOptions.sources[0].src = "http://192.168.0.57:9001/live17";
    // },
    
  }
}
</script>

<style scoped>
  .monitor {
    color: #fff;
  }
  .monitor .top {
    height: 50%;
  }
  .monitor .top .map {
    box-shadow: inset 0 0 8px 5px #245888;
    border-radius: 20px;
  }
  
  .monitor .top .top-wrap {
    margin-left: 5px;
    box-shadow: inset 0 0 8px 5px #245888;
    border-radius: 20px;
    overflow: hidden;
  }
  .top-monitor {
    height: 95%;
    margin: 10px;
    overflow: hidden;
    border-radius: 10px;
  }
  .monitor .bottom {
    height: 40%;
    margin-top: 2%;
    box-shadow: inset 0 0 8px 5px #245888;
    border-radius: 20px;
    overflow: hidden;
  }
  .monitor .bottom-monitor {
    width: 30%;
    height: 95%;
    margin: 10px;
    overflow: hidden;
    border-radius: 10px;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .more {
    min-width: 6%;
    padding: 10px 5px;
    align-self: stretch;
    background: rgba(19, 63, 150, 0.6);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .more img{
    width: 14px;
    height: 14px;
    margin-right: 5px;
    vertical-align: middle;
  }
  .more a{
    cursor: pointer;
    font-size:14px;
    font-family:AlibabaPuHuiTiM;
    font-weight:500;
    text-decoration:underline;
    color:rgba(215, 224, 243, 0.8);
    vertical-align: middle;
  }
  .more .btn {
    padding: 10px 0;
  }
</style>
