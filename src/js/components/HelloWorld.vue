<template>
  <div class="wrapper">
    <h1>{{ msg }}</h1>
    <router-link to="/get_started" rel="noopener">~ Get Started ~</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
.wrapper{
  /* margin-top: 60px; */
}
h1, h3 {
  font-weight: bold;
}
h1{
  margin: 40px 0 20px;
  font-size: 32px;
}
h3 {
  margin: 40px 0 10px;
  font-size: 20px;
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
