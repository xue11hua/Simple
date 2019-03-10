<template>
    <div>
        组件
     {{count}}
     {{list}}
     {{listconut}}
    </div>
</template>
<script>
export default {
    name:'fooler',
    data(){
        return{
            
        }
    },
     computed: {
         count () {
        return this.$store.state.count
    },
    list(){
        return this.$store.getters.filteredlist
    },
    listconut(){
        return this.$store.getters.listconut
    }
    }

}
</script>

