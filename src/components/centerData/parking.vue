<template>
  <div class="listTable">
    <ul class="t-header flex_m">
      <li v-for="(item, index) in title" :key="index" class="w100 tac">{{item}}</li>
    </ul>
    <div class="t-body">
      <transition-group name="list" tag="ul">
        <li v-for="item in data" :key="item.id" class="item flex_m">
          <span>{{item.communityName}}</span>
          <span>{{item.plate}}</span>
          <span>{{item.type | type}}</span>
          <span>{{item.locked | locked}}</span>
          <span>{{item.time}}</span>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "parking",
  data() {
    return {

    };
  },
  props:['title', 'data'],
  filters: {
    type(types) {
      let type;
      switch (types) {
        case 0:
          type = '出场';
          break
        case 1:
          type = '进场';
          break
      }
      return type;
    },
    locked(locks) {
      let lock;
      switch (locks) {
        case 0:
          lock = '未锁定';
          break
        case 1:
          lock = '锁定';
          break
      }
      return lock;
    }
  },
};
</script>

<style scoped>
.listTable {
  height: 100%;
  overflow: hidden;
  border: none;
  box-shadow: inset 0 0 8px 5px #245888;
  color: #fff;
  border-radius: 20px;
}
.listTable .t-header {
  height: 42px;
  padding: 5px 20px;
  color: rgb(223, 219, 219);
  background:rgba(12, 54, 133, 0.5);
  box-shadow: inset 0 5px 8px 0px #245888;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 1px solid rgba(44, 63, 107, 1);
}
.listTable .t-body .item {
  color: #96acdd;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(44, 63, 107, 1);
}
.listTable .t-body .item span{
  display: inline-block;
  width: 100%;
  text-align: center;
}

.list-enter-active {
  transition: all 0.6s;
}
.list-enter {
  opacity: 0;
  transform: translateX(50%);
}
.list-move {
  transition: all 0.6s;
}

</style>
