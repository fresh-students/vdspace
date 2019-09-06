<template>
    <div class="all">
        <div>
        <mt-header>
            <router-link to="/mine" slot="left">
            <mt-button icon="back"><i class="icon iconaxiangxia"></i></mt-button>
            </router-link>
            <router-link to="/index" slot="right">
            <mt-button icon="back"><i class="icon iconagood"></i></mt-button>
            </router-link>
        </mt-header>
        </div>
        
        <Foot/>
    </div>
</template>
<script>
import Foot from './commoncss/common.vue' 
export default {
    name:'minecom',
    components:{
        Foot
    }
}
</script>
<style scoped>
.all {
    width:100%;
    height:100%;
    background-color: #333
}
</style>
