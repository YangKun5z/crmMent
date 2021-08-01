<template>
    <div class="table-container">
        <el-table :data="data" style="width: 100%" :header-cell-style="tableHeaderColor" border>
            <el-table-column type="selection" align="center" width="50"></el-table-column>
            <el-table-column type="index" align="center" label="序号" :width="numWidth"></el-table-column>
            <el-table-column align="center" v-for="(item, index) in columns" :key="index" :sortable="item.sort"
                :prop="item.attrName" :label="item.label" :width="item.width">
                <template slot-scope="scope">
                    <div class="table-item-group">
                        <!-- 用户状态 -->
                        <span v-if="item.isType === 'status'"
                            :class="[scope.row[item.attrName] ===1? 'status-dot-grean': 'status-dot-red',]">
                        </span>
                        <!-- bug状态 -->
                        <span v-if="item.isType === 'bugstatus'"
                            :class="[scope.row[item.attrName] === 1? 'status-dot-grean': 'status-dot-red',]">
                        </span>
                        <!--  bug图片 -->
                        <el-popover v-if="item.isBug === 'bug'" placement="left-end" trigger="hover">
                            <!--trigger属性值：hover、click、focus 和 manual-->
                            <a :href="scope.row[item.attrName]" target="_blank" title="查看最大化图片">
                                <img :src="scope.row[item.attrName]" style="width: 300px; height: 300px" />
                            </a>
                            <img slot="reference" :src="scope.row[item.attrName]"
                                style="width: 50px; height: 50px; cursor: pointer" />
                        </el-popover>
                        <span class="btn-type" v-else-if="item.eventType === 'toBug'"
                            @click="operateType(item.eventType, scope.row)">{{ checkType(item.isType,
                            scope.row[item.attrName])}}</span>
                        <span class="normal-text" v-else>{{
                            checkType(item.isType, scope.row[item.attrName])
                            }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column v-if="operation.length > 0" align="center" label="操作" :width="operationWidth">
                <template slot-scope="scope">
                    <!-- <el-button-group> -->
                        <el-button size="mini" style="margin-right: 5px;" v-for="(item, index) in operation" :key="index" :type="item.type"
                            :icon="item.icon" :title="item.operateName"
                            @click="operateType(item.opreatetype, scope.row, scope.$index)" circle></el-button>
                    <!-- </el-button-group> -->
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: "commontable",
        props: {
            columns: {
                type: Array,
                default: () => [],
            },
            data: {
                type: Array,
                default: () => [],
            },
            operation: {
                type: Array,
                default: () => [],
            },

            operationWidth: {
                type: Number,
                default: () => 0,
            },
            numWidth: {
                type: Number,
                default: () => 0,
            },
        },
        data() {
            return {};
        },
        components: {},
        mounted() { },
        methods: {
            // 修改table header的背景色
            tableHeaderColor() {
                return "background-color: #F4F4F4;";
            },
            operateType(type, value, index) {
                this.$emit("operate", { type: type, value: value, index: index });
            },

            checkType(type, value) {
                let label = "";
                switch (type) {
                    case "status": //状态：是否启用
                        if (value == 1) {
                            label = "启用";
                        } else {
                            label = "禁用";
                        }
                        break;
                    case "bugstatus": //BUG 的状态
                        if (value == 1) {
                            label = "未关闭";
                        } else {
                            label = "关闭";
                        }
                        break;
                    default:
                        label = value;
                }
                return label;
            },
        },
    };
</script>

<style scoped lang="scss">
    .table-container {
        position: relative;
        width: 100%;
    }

    .btn-type {
        cursor: pointer;
    }

    /* .normal-text {
        color: $title_color;
    } */

    .opreate-btn {
        cursor: pointer;
        font-size: 18px;
        margin-right: 10px;
    }

    .status-dot-grean {
        background: #6dd400;
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border-radius: 5px;
    }

    .status-dot-red {
        background: #e02020;
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border-radius: 5px;
    }

    .table-item-group {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>