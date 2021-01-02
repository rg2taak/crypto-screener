<template lang="pug">
.centerize-container
    .logo
</template>

<script lang="ts">
import Vue from "vue";
import Buefy from "buefy";
import Helper from "@Core/Helpers/frontend-global-helper";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Logo
 */
export default Vue.extend({
    name: "Logo",

});
</script>

<style scoped>
.logo {
    background: url("~@IMAGES/qeng.png") no-repeat;
    background-size: cover;
    width: 85px;
    height: 85px;
}
</style>
