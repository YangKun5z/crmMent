<template>
    <div>
      Hello World!
    </div>
</template>

<script>
  export default {
    name: 'AppIndex',
    data(){
        return{
            
        }
    },
    mounted(){
        console.log(this.$store.state.userInfo.userId)
    }
  }
</script>

<style scoped>

</style>

