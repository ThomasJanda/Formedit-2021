<template>
    <div>
        <atomsButton fetype="button" v-bind:feclass="feclass" v-on:click="click"><slot/></atomsButton>
    </div>
</template>
<script>
import atomsButton from '@/app/ui/atoms/Button.vue'

export default {
    props: {
        feid: String,
        feclass: String
    },
    data: function() {
        return {
            feid: Vue.util.extend({}, this.feid)
        }
    },
    methods: {
        click: function(event) {
            this.$emit('change', this.feid);
        }
    },
    components: {
        atomsButton
    }
}
</script>
<style lang="scss" scoped>

</style>