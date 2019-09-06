<template>
    <mt-search v-model="value" :cancel-text="message" :placeholder="title" :result="filterResult"></mt-search>
</template>
<script>
export default {
    name:'searchcom',
    props:{
        message:{
            type:String,
            require:true
        },
        title:{
            type:String,
            require:true
        }
    },
    data(){
        return {
            value:'',
            defaultResult:[
                "aaaa",
                "ddddd",
                "dddaad",
                "wwqq"
            ]
        }
    },
    computed:{
        filterResult(){
            return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
        }
    }
}
</script>
<style scoped>
.mint-search[data-v-f5a648ee]{
    background-color: transparent
}
</style>
