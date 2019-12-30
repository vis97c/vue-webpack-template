<template>
  <div class="wrapin">
    <h1>404</h1>
    <h2>We are sorry, the princess is in another castle</h2>
    <router-link to="/" rel="noopener">~ Go To Home ~</router-link>
  </div>
</template>

<script>
export default {
  name: '404',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  text-align: center;
  color: #2c3e50;
}
.wrapin{
  /* margin-top: 60px; */
  /* min-height: calc(100vh - 300px); */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
h1, h2 {
  font-weight: bold;
}
h1{
  margin: 0;
  font-size: 96px;
  color: #42b983;
}
h2 {
  margin: 40px 0 20px;
  font-size: 32px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
