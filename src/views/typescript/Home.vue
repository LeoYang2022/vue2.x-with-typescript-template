<template>
<div class="ts-home">
    <h1>Vue项目 typescript 的使用</h1>

    <!-- <div class="catalogue-list">
        <ul>
            <li><router-link to="/part1">1、typescript 介绍</router-link></li>
            <li><router-link to="/part2">2、typescript 介绍</router-link></li>
            <li><router-link to="/part3">3、typescript 介绍</router-link></li>
            <li><router-link to="/part4">4、typescript 介绍</router-link></li>
            <li><router-link to="/part5">5、typescript 介绍</router-link></li>
        </ul>
    </div> -->
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="less" scoped>
ul {
    li{
        list-style-type: none;
        height: 30px;

        a{
            text-decoration: none;

            &:visited {
                color: rgba(0, 0, 238, 1);
            }
        }
    }
}
</style>