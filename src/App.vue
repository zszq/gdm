<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
}
body {
  min-width: 1440px;
  background: url(./assets/images/background_c.jpg) no-repeat;
  background-size: cover;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
