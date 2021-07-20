<template>
    <div>
      <Header :loginName="userInfo"></Header>
      <div style="width: 100%;">
        <Menu style="width: 20%;float: left;"></Menu>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../common/header.vue'
  import Menu from '../common/menu.vue'
  import M from '../common/menu.vue'
  export default {
    name: 'AppIndex',
    components:{
      Header,
      Menu
    },
    data(){
        return{
          userInfo:{},
        }
    },
    created(){
      this.userInfo = this.$store.state.userInfo
      console.log(this.userInfo)
    },
    mounted(){
      
    }
  }
</script>

<style scoped>
.content{
  width: 80%;
  float: right;
}
</style>

