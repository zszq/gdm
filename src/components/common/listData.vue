<template>
  <div class="door-container">
    <div class="door-title">
      <img src="../../assets/images/shuju.png" :alt="title">
      <span class="fcf">{{title}}</span>
    </div>
    <div id="door_real" class="door-real-wrap" v-if="listData.length > 0">
      <transition-group name="list" tag="ul">
        <li v-for="item in listData" :key="item.id" class="item flex_m">
          <span>{{item.communityName}}</span>
          <span v-if="!item.plate">{{item.type | doorType}}</span>
          <span v-if="item.plate">{{item.plate}}</span>
          <span>{{item.time}}</span>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "listData",
  data() {
    return {
      
    };
  },
  props: ["title", "listData"],
  filters: {
    doorType(types) {
      let type;
      switch (types) {
        case 0:
          type = 'APP开门';
          break
        case 1:
          type = '刷卡开门';
          break
        case 2:
          type = '电话开门';
          break
        case 3:
          type = '人脸识别开门';
          break
        case 4:
          type = '二维码开门';
          break
      }
      return type;
    }
  },
  methods: {
    
  }
};
</script>

<style scoped>
.door-container {
  height: 30%;
  padding: 15px 0;
  border: none;
  border-radius: 20px;
  box-shadow: inset 0px 0px 8px 5px #245888;
}
.door-title {
  padding:  0 15px 5px;
  border-bottom: 2px solid #076197;
}
.door-title img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  vertical-align: middle;
}
.door-title span {
  font-size: 14px;
  vertical-align: middle;
}
.door-real-wrap {
  height: 92%;
  overflow: hidden;
}
.item {
  padding: 10px 15px;
  border-bottom: 1px solid #2f4167;
  color: rgba(204, 204, 204, 1);
}
.item:last-child {
  border-bottom: none;
}
.item span{
  display: inline-block;
  width: 100%;
  /* text-align: center; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list-enter-active {
  transition: all 0.6s;
}
.list-enter{
  opacity: 0;
  transform: translateY(-50px);
}
.list-move {
  transition: all 0.5s;
}

</style>
