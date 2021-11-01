<template>
  <div>
      <h2>cyyyyyyyyy</h2>
      <button v-on:click='count++'>cy今天帅了{{count}}次</button>
  </div>
</template>

<script>
export default {
    name:"",
    data(){
        return{
            count:0
        }
    }
}
</script>

<style>
h2{
    color: pink;
}
</style>