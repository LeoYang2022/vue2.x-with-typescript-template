import {
    Component,
    Prop,
    Vue,
    Watch,
} from 'vue-property-decorator';

@Component({
    name: "my-mixin",
})
export default class MyMixin extends Vue {
    public listTotle: number = 100;
    public currentPage: number = 1;
    public currentPageSize: number = 20;

    public resetPage() {
        this.listTotle = Math.floor((Math.random() * 1000));
        this.currentPage = Math.floor((Math.random() * 100));
        this.currentPageSize = Math.floor((Math.random() * 100));

        console.log("当前总数：", this.listTotle);
        console.log("当前页码：", this.currentPage);
        console.log("当前展示数量：", this.currentPageSize);
    }

    public created() {
        console.log("mixin 初始化");
        this.resetPage();
    }

    public mounted() {
        console.log("父 mounted");
    }

    public dateQuery(obj: any) {
        console.log("父 public method");
    }
}
