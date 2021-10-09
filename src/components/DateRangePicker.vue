<template>
<figure class="side-query-date" id="date-picker">
    <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="开始日期" prefix-icon="calendar-icon" 
        :clearable="false" 
        :editable="false"
        @change="dateCheck" 
        v-model="date1"
    >
    </el-date-picker>
    <span class="rang-to">-</span>
    <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="结束日期" prefix-icon="calendar-icon" 
        :clearable="false" 
        :editable="false"
        @change="dateCheck" 
        v-model="date2"
    ></el-date-picker>
    <el-button type="primary" @click="queryNetvalue($event)" :disabled="!queryState">查询</el-button>

    <p class="error-tips">{{errTips}}</p>
</figure>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    Emit,
} from 'vue-property-decorator';
import moment from 'moment';

@Component
export default class DateRangePicker extends Vue {
    @Prop({ default: null }) private startDate !: string;
    @Prop({ default: null }) private endDate !: string;

    private queryState: boolean = true;

    public date1 = this.startDate;  // 查询时间（开始）
    public date2 = this.endDate;    // 查询时间（结束）
    public timesLine: number = moment(this.endDate).subtract(12, 'months').valueOf();    // 时间期限（半年）
    public errTips: string = "";

    // 返回 void 类型
    private dateCheck(): void {
        const start: number = new Date(this.date1).getTime();
        const end: number = new Date(this.date2).getTime();

        this.timesLine = moment(this.date2).subtract(12, 'months').valueOf();
        
        if (end - start < 0) {
            this.errTips = "提示：开始时间不能晚于结束时间";
            this.queryState = false;
        } else if (start < this.timesLine) {
            this.errTips = "提示：查询时间跨度不能大于半年";
            this.queryState = false;
        } else {
            this.errTips = "";
            this.queryState = true;
        }
    }
    
    private queryNetvalue(event: any) {
        // console.log(this.startDate, this.endDate, "会根据韩国和个", this.date1, this.date2);
        
        if (this.queryState) {
            const outObj = {
                event,
                startDate: this.date1,
                endDate: this.date2,
            };
            // this.$emit('dateQuery', outObj);
            this.dateQuery(outObj);
        }
    }

    // 事件暴露
    @Emit("dateQuery")
    private dateQuery(obj: {}) {
        return obj;
        // return new Promise((resolve, reject) => {
        //     resolve(obj);
        // });
    }
}
</script>

<style lang="less" scoped>
.side-query-date {
    .el-date-editor.el-input {
        width: 135px !important;
        &:first-of-type {
            margin-right: 21px;
        }
    }
    .el-input__prefix {
        display: none !important;
    }
    .el-input__inner {
        border: 1px solid #4E6EF2;
        line-height: 29px !important;
        height: 29px !important;
        padding: 0 15px !important;
        padding-left: 5px !important;
        text-align: center;
        &:hover {
            border: 1px solid #4E6EF2;
        }
        &:focus {
            border: 1px solid #4E6EF2;
        }
    }
    .el-button--primary {
        width: 80px;
        height: 30px;
        margin-left: 10px;
        padding: 0;
        font-size: 14px;
        line-height: 30px;
        background: #4E6EF2;
        border-radius: 5px;
        text-align: center;
    }
}

#date-picker {
    /deep/ .el-input__inner {
        width: 140px;
        height: 36px !important;
        background: #F7F7F9;
        border-radius: 2px;
        border: 1px solid #D6D6D6;
        text-align: left;
        padding-left: 12px !important;
        cursor: pointer;

        &:focus {
            background: rgba(204, 166, 99, 0.1);
            border: 1px solid #CCA663;
        }
    }

    .el-date-editor.el-input:first-of-type {
        margin-right: 12px;
    }

    .rang-to {
        color: #D8D8D8;
        margin-right: 5px;
    }

    .el-button {
        width: 50px;
        height: 36px;
        border-radius: 2px;
        border: 1px solid #CCA663 !important;
        color: #CCA663;
        background-color: #ffffff !important;

        &:hover {
            background-color: rgba(204, 166, 99, 0.1) !important;
        }
    }

    /deep/ .el-input__prefix {
        display: block !important;
        .calendar-icon {
            height: 18px;
            width: 18px;
            display: block;
            position: absolute;
            right: -130px;
            top: 10px;
        }
    }
}

.error-tips {
    text-align: left;
    color: #EF5A3C;
    font-size: 12px;
    margin-top: 3px;
    height: 18px;
}
</style>
