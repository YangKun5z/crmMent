<template>
  <div style="width: 90%;padding: 20px 5%;">
    <div class="search">
      <el-input placeholder="请输入手机号" v-model="input1" clearable></el-input>
      <el-input placeholder="请输入订单号" v-model="input2" clearable></el-input>
      <el-input placeholder="请输入车牌号" v-model="input3" clearable></el-input>
      <el-button type="primary">查询</el-button>
    </div>
    <Commontable :data="tableData" :columns="columns" :operation="operation" @operate="dataOperation"/>
  </div>
</template>

<script>
  import { carList } from '../../assets/js/api'
  import Commontable from '../common/table.vue'
  export default {
    name: 'Cars',
    components: {
      Commontable
    },
    data() {
      return {

        input1: '',
        input2: '',
        input3: '',
        tableData: [{
          id:1,
          date: '2016-05-02',
          name: '王小虎',
          projectName: '平安保险1',
          toBug:'需派驻场员工现场调试'
        }, {
          id:2,
          date: '2016-05-04',
          name: '王小虎',
          projectName: '中国人寿2',
          toBug:'线上调整'
        }, {
          id:3,
          date: '2016-05-01',
          name: '王小虎',
          projectName: '合众人寿3',
          toBug:'需求变更'
        }, {
          id:4,
          date: '2016-05-03',
          name: '王小虎',
          projectName: '太平洋保险',
          toBug:'版本迭代'
        }],
        columns: [{
          label: '项目',
          attrName: 'projectName'
        },{
          label:'子项目',
          attrName:'date'
        },{
          label:'负责人',
          attrName:'name'
        },{
          label:'BUG',
          attrName:'toBug',
        }],
        operation:[
          {
            operateName:"编辑",
            opreatetype:"edit",
            icon:"el-icon-edit-outline",
            type:"small"
          },
          {
            operateName:"详情",
            opreatetype:"more",
            icon:"el-icon-document",
            type:"small"
          }
        ]
      }
    },
    created() {
      this.menu = JSON.parse(this.$store.state.userInfo.enterprise.menu)
      console.log(this.menu)
    },
    mounted() {
      let data = {
        page: 1,
        pagesize: 100,
        frameKeyWord: "",
        modelKeyWord: "",
        plateKeyWord: "",
        status: "",
        t: new Date()
      }
      carList(data).then(res => console.log(res)).catch(err => console.log(err))
    },
    methods:{
      dataOperation(event){
        console.log(event)
        // if(event.opreatetype == 'edit'){
        //       this.userPopTitle = '编辑项目',
        //       this.showDelDialog = true;
        //       this.searchPeopleList(event.value.id,event.value.projectName)
        // }else if(opreatetype == 'more'){
        //       console.log('查看详情')
        // }
      }
    }
  }
</script>

<style scoped>
  .search {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
  }

  .search .el-input {
    float: left !important;
    width: 200px !important;
    margin-right: 10px;
  }
</style>