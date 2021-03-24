<template>

    <div class="panels">
        <div v-for="fetab of fetabs" class="panels-panel">
            <atomsTabPanel v-bind:feid="fetab.id" v-bind:feclass="feselectedId==fetab.id?'selected':''">{{fetab.content}}</atomsTabPanel>
        </div>
    </div>

</template>

<script>
import atomsTabPanel from '@/app/ui/atoms/TabPanel.vue'

export default {
    props: {
        fetabs: Array,
        feselectedId: Number
    },
    data: function() {
        return {
            //feselectedId:""
        }
    },
    components: {
        atomsTabPanel
    }
}
</script>

<style lang="scss" scoped>
    .panels, .panels .panels-panel
    {
        position:absolute;
        left:0px;
        right:0px;
        top:0px;
        bottom:0px;
    }
</style>
