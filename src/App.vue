<template>
  <img src="./assets/logo.png">
  <div>
  </div>
  <visa />
</template>

<script>
import Visa from './components/Visa'

export default {
  name: 'App',
  components: {
    Visa
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
