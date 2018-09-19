<template>


    <v-select :options="options" v-model="selected" :placeholder="placeholder">
		
    </v-select>


</template>

<script>
    import $ from 'jquery'

    export default {
        data() {
            return {
                selected: null,
                placeholder: 'Choose one city'
            }
        },
        props: ['options', 'value'],
        watch: {
            selected() {
                this.$emit("input", this.selected);
            }
        }
    }
</script>

<style>

</style>
