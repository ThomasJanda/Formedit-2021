<template>
    <div>
        <button v-bind:type="fetype" v-bind:class="feclass" v-on:click="click"><slot/></button>
    </div>
</template>
<script>
export default {
    props: {
        fetype: {
            default:"button"
        },
        feclass: String,
    },
    methods: {
        click: function(event) {
            this.$emit('click', event);
        }
    }
}
</script>
<style lang="scss" scoped>
    button
    {
        padding:0;
        margin:0;
    }
</style>