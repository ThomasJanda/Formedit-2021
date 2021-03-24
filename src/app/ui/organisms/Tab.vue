<template>
    <div class="tab">
        <div class="tab-header">
            <moleculesTabButtons
                v-bind:fetabs="fetabs"
                v-bind:feselectedId="feselectedId"
                v-on:change="change"
                ></moleculesTabButtons>
        </div>
        <div class="tab-content">
            <moleculesTabPanels v-bind:fetabs="fetabs" v-bind:feselectedId="feselectedId"></moleculesTabPanels>
        </div>
    </div>
</template>

<script>
import moleculesTabButtons from '@/app/ui/molecules/TabButtons.vue'
import moleculesTabPanels from '@/app/ui/molecules/TabPanels.vue'

export default {
    props: {
        fetabs: Array,
        feselectedId: Number
    },
    methods: {
        change: function(feselectedId) {
            this.feselectedId = feselectedId;
        }
    },
    data: function() {
        return {};
    },
    components: {
        moleculesTabButtons,moleculesTabPanels
    }
}
</script>

<style lang="scss" scoped>
    .tab
    {
        position:absolute;
        left:0px;
        right:0px;
        top:0px;
        bottom:0px;

        .tab-header
        {
            position:absolute;
            left:0px;
            right:0px;
            top:0px;
            height:30px;
        }
        .tab-content
        {
            position:absolute;
            left:0px;
            right:0px;
            top:30px;
            bottom:0px;
        }
    }
</style>
