<template>
    <div class="panel" v-bind:class="feclass">
        <atomsContainer ><slot/></atomsContainer>
    </div>
</template>
<script>
import atomsContainer from '@/app/ui/atoms/Container.vue'

export default {
    props: {
        feid: String,
        feclass: String
    },
    components: {
        atomsContainer
    }
}
</script>
<style lang="scss" scoped>
    div.panel
    {
        background-color:orange;
        position:absolute;
        left:0px;
        right:0px;
        top:0px;
        bottom:0px; 
        display:none;

        &.selected 
        {
            display:block;
        }
    }
</style>