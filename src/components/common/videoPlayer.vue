<template>
  <div class="video">
    <div v-if="!playerOptions.sources[0].src" class="no-video">视频地址无效</div>
    <video-player
      v-else
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
    ></video-player>
  </div>
</template>
 
<script>
// import videojs from "video.js";
import { videoPlayer } from "vue-video-player";
import "vue-video-player/src/custom-theme.css";
import "video.js/dist/video-js.css";
import 'videojs-flash'
// import SWF_URL from 'videojs-swf/dist/video-js.swf'
// videojs.options.flash.swf = SWF_URL // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件

export default {
  name: "player",
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        live: true,
        autoplay: true, // 如果true，浏览器准备好时开始播放
        muted: true, // 默认情况下将会消除任何音频
        loop: true, // 是否视频一结束就重新开始
        language: "zh-CN",
        preload: "auto", // 浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        aspectRatio: "1:1", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        poster: "https://file.digitaling.com/eImg/uimages/20150907/1441607120885946.gif", //你的封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        // playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
        controlBar: {
          timeDivider: false, //
          durationDisplay: false, // 总时长
          remainingTimeDisplay: false, // 剩余时长
          currentTimeDisplay: false, // 当前时间
          volumeControl: false, // 声音控制键
          playToggle: false, // 暂停和播放键
          progressControl: true, // 进度条
          fullscreenToggle: true // 全屏按钮
        },
        techOrder: ['flash', 'html5'], // 兼容顺序
        sourceOrder: true,
        // flash: {
        //   hls: {
        //     withCredentials: false
        //   },
        //   swf: SWF_URL
        // },
        sources: [
          {
            type: "rtmp/flv",
            src: ""
          },
          {
            type: "video/mp4",
            src: "" //你的视频地址（必填）
          }
        ]
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      
    })
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    onPlayerPlay(player) {
      // console.log("play");
    },
    onPlayerPause(player) {
      // console.log("pause");
    }
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
.video{
  width:100%;
  height:100%;
}
.video .no-video{
  height:100%;
  font-size: 14px;
  display:flex;
  justify-content: center;
  align-items:center;
}
</style>