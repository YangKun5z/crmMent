<template>
    <div class="head">
        <div class="logo">
            <p>LOGO</p>
            <div class="login">{{loginName.realname}}</div>
        </div>
        
    </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
		loginName: { //价格日历数组
			type: [Array, Object],
			default: function() {
				return []
			}
		},
	},
    data(){
        return{
            
        }
    },
    mounted(){
        console.log(this.loginName)
    }
  }
</script>

<style scoped>
.head{
    width: 100%;
    height: 50px;
    background: #324057;
}
.logo{
    width: 90%;
    padding: 0 5%;
}
.logo p{
  float: left;
  line-height: 50px;
  font-size: 22px;
  color: #fff;
  width: 100px;
  text-align: center;
  font-weight: 700;
}
.login{
    line-height: 50px;
    font-size: 14px;
    color: #fff;
    width: 100px;
    text-align: center;
    float: right;
}
</style>

