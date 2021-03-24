<template>
    
    <div class="tab-buttons">
        <div v-for="fetab in fetabs" class="tab-buttons-button">
            <atomsTabButton 
                feid="fetab.id" 
                v-bind:feclass="feselectedId==fetab.id ? 'selected':''"
                v-on:change="change"
                >{{fetab.text}}</atomsTabButton>   
        </div>
    </div>

</template>

<script>
import atomsTabButton from '@/app/ui/atoms/TabButton.vue'

export default {
    props: {
        fetabs: Array,
        feselectedId: String,
    },
    data: function() {
        return {
            feselectedId: Vue.util.extend({}, this.feselectedId)
        }
    },
    methods: {
        change: function(feselectedId) {
            this.$emit('change', feselectedId);
        }
    },
    components: {
        atomsTabButton
    }
}
</script>

<style lang="scss" scoped>
    div.tab-buttons 
    {
        display: flex;
        flex-direction: row;

    }
</style>
