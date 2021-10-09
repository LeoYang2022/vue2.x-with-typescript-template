<template>
<div class="">
    <p>父组件变量 {{ parentData }} </p>
    <p>字符串反转： {{ reversedMessage }}</p>

    {{oneProduct.productConfig.showName ? oneProduct.productConfig.showName : '暂无数据'}}
    {{oneProduct.productConfig.otherAttr ? oneProduct.productConfig.otherAttr : '暂无数据'}}
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    Watch,
} from 'vue-property-decorator';
import Product from '../../domain/Product';

@Component({ name: 'ts-show-http' })
export default class TsShowHttp extends Vue {
    // data 对象
    private parentData: string | number | boolean = 45;

    public oneProduct: Product = new Product();

    public created() {
        console.log("执行 created 周期函数");
        this.getInitData();
    }

    public mounted(): void {
        console.log("执行 mounted 周期函数");
        setTimeout(() => {
            this.parentData = Math.random() * 100;
        }, 3000);
    }

    public updated() {
        console.log("执行 updated 周期函数");
    }

    // computed 计算属性
    public get reversedMessage() {
        return this.parentData.toString().split('').reverse().join('');
    }

    getInitData() {
        this.$request.getProduct({ pageNo: 1, pageSize: 100, recommendType: 1 }).then((res: any) => {
            [this.oneProduct] = res.data.list;
            console.log(res, "请求到的数据", this.oneProduct);
        });
    }
}
</script>
