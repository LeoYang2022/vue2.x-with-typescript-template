<template>
<div class="page" id="page-comp" v-show="total>0">
    <el-pagination background 
        :layout="layout"
        :page-sizes="pageSizes"
        :page-size="pageSize"

        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="nowPage"
        :total="total">
    </el-pagination>
</div>
</template>

<script lang="ts">
import { 
    Component, 
    Prop, 
    Vue, 
    Emit, 
    Watch, 
} from 'vue-property-decorator';

@Component
export default class Pagination extends Vue {
    // 注：type 接受一个接口
    @Prop({ default: 1, type: Number }) private currentPage !: number;
    @Prop({ default: 0 }) total !: number;

    private layout: string = "prev, pager, next, total, jumper, sizes";
    // private pageSizes: Array<number> = [10, 20, 50];     // 数组定义方式一
    private pageSizes: number[] = [10, 20, 50];         // 数组定义方式二
    private pageSize: number = 10;
    private nowPage: number = this.currentPage;

    @Emit("pageSize")
    private handleSizeChange(pageVal: number) {
        // 页码重置为 1
        this.nowPage = 1;
        return pageVal;
    }

    @Emit("pageNo")
    private handleCurrentChange(pageVal: number) {
        // this.$emit("pageNo", pageVal);
    }
    
    @Watch("currentPage")
    getCurrentPage(val: number, oldVal: number) {   // handler: function(val, oldVal) {}
        console.log("val：", val, "oldVal：", oldVal);
        if (val === 1) {
            this.nowPage = 1;
        }
    }
}
</script>
