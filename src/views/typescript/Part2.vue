<template>
<div class="">
    <p>父组件变量 {{ parentData }} </p>
    <p>字符串反转： {{ reversedMessage }}</p>

    <div>
        <date-range class="date-select"
            :startDate="startDate"
            :endDate="endDate"
            @dateQuery="dateQuery"
        ></date-range>

        <zg-pagination
            :currentPage="params.pageNo"
            :total="params.total"
            @pageSize="getPageSize($event)"
            @pageNo="getPageNo($event)"
        ></zg-pagination>

        <h1 v-color-directive="{color: 'red', backgroundColor: 'blue'}">TS 局部自定义指令示范 value</h1>
        <h1 v-color-directive.color="'red'">TS 局部自定义指令示范 modifiers</h1>

        <h1 v-global-color-directive="{color: 'yellow', backgroundColor: 'skyblue'}">TS 全局自定义指令示范 value</h1>
    </div>

    <transition name="fade">
        <div class="t-filter">
            <h2>自定义全局过滤器（管道）{{ testFilter | globalStrToUpper }}</h2>
            <h2>自定义局部过滤器（管道）{{ testFilter | str-to-upper }}</h2>
        </div>
    </transition>

    <div class="t-mixin">
        <h2>混合（mixin）的属性值：{{ listTotle }}</h2>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    Watch,
} from 'vue-property-decorator';
import { Route } from 'vue-router';
import moment from 'moment';
import { mixins } from 'vue-class-component';
import {
    RangePickerObj,
    PaginationObj,
} from '../../domain/Entity';
import Pagination from '../../components/Pagination.vue';
import DateRangePicker from '../../components/DateRangePicker.vue';

import ColorDirective from "../../directives/ColorDirective";
import MyFilter from "../../filters/UpperCase";
import MyMixin from "../../mixins/MyMixin";

@Component({
    name: 'ts-show-main',
    components: {
        'date-range': DateRangePicker,
        'zg-pagination': Pagination,
    },

    directives: {
        "color-directive": ColorDirective,
    },

    filters: {
        "str-to-upper": MyFilter.strToUpper,
    },

    // 这种 mixins 方法不建议使用，编译器的语法检验不通过
    // mixins: [
    //     MyMixin,
    // ]
})
/**
 * 注：mixin 的使用有三种形式
 * 1、类直接继承 Vue ，在 @Component 装饰器的 mixins 属性添加即可。
 *  例：export default class TsShow extends Vue {}
 *  缺点：编译器无法识别ts属性来源，即：使用this引用 mixin 的属性会报错。不建议使用！！！
 * 
 * 2、类直接继承 mixins()，原因：自定义本身实现了 Vue 的继承，混用时实际上已经使用了 Vue 对象
 *  例：export default class TsShow extends mixins(MyMixin, ...)
 * 
 * 3、类直接继承 MyMixin （自定义的混合），原因：混合其实就是将对象的“公共”部分抽离出来的（面向对象）
 * 
 */
export default class TsShow extends mixins(MyMixin) {
    // data 对象
    private parentData: string | number | boolean = 45;
    public startDate: string = moment().subtract(3, 'months').add(1, 'days').format('YYYY-MM-DD');
    public endDate: string = moment().format('YYYY-MM-DD');
    public asOperate?: number;
    public params = new PaginationObj(1, 10, 500);    // 创建对象

    public testFilter = "Hello World!";

    public dateQuery(obj: RangePickerObj) {
        this.startDate = obj.startDate;
        this.endDate = obj.endDate;
        // this.asOperate = <number>obj.otherAttr;     // 断言
        
        // console.log(obj, "Promise 返回");
        console.log(this.startDate, this.endDate);
    }

    getPageSize(pageSize: number) {
        this.params.pageSize = pageSize;
        // 页码重置为 1
        this.params.pageNo = 1;
        console.log("当前分页对象：", this.params);
    }

    getPageNo(pageNo: number) {
        this.params.pageNo = pageNo;
        console.log("当前分页对象：", this.params);
    }

    public created() {
        console.log("执行 created 周期函数", this);
    }

    public mounted(): void {
        console.log("执行 mounted 周期函数");
        setTimeout(() => {
            this.parentData = Math.random() * 100;
        }, 3000);
    }

    public updated() {
        console.log("执行 updated 周期函数", this);
    }

    public get reversedMessage() {
        return this.parentData.toString().split('').reverse().join('');
    }

    @Watch("$route", { immediate: true, deep: true })
    onRouteChange(route: Route) {
        this.params.pageNo = Number(route.query.pageNo) || 1;
        this.params.total = Number(route.query.total) || 500;
        console.log(this.params, "监听路由参数");
    }
}
</script>

<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
