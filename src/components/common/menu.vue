<template>
    <div>
        <!-- <el-row>   -->
            <!-- <el-col> -->
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="#324057"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item v-for="(item,index) in menu" :key="index">
                  <template slot="title">
                      <i class="el-icon-menu"></i>
                      <router-link :to="item.index" style="width: 100%;color: #fff;text-decoration: none;">{{item.title}}</router-link>  
                    </template>
                </el-menu-item>
              </el-menu>
            <!-- </el-col> -->
          <!-- </el-row> -->
    </div>
</template>

<script>
  export default {
    name: 'Menu',
    data(){
        return{
           menu:[]
        }
    },
    created(){
      this.menu = JSON.parse(this.$store.state.userInfo.enterprise.menu)
      console.log(this.menu)
    },
    mounted(){
      
    }
  }
</script>

<style scoped>

</style>

