<template lang="pug">
.centerize-container
    svg#logo(
        :class="isActiveClass",
        version="1.1",
        x="0px",
        y="0px",
        viewBox="0 0 160 140",
        style="enable-background: new 0 0 160 140",
        width="160",
        height="140"
    )
        g
            path.st0.svg-elem-1(
                d='M14.5,92.8v-72c0-1.8,1.5-3.3,3.3-3.3h124.9c1.8,0,3.3,1.5,3.3,3.3v72H158V13c0-4.6-3.7-8.3-8.3-8.3H10.3\
                   5.7,4.7,2,8.4,2,13v79.8H14.5'
            )
            polygon.st0.svg-elem-2(
                points="64.5,64.5 64.5,78.9 80,69.8 146.1,106.8 146.1,92.8 79.8,55.8"
            )
            polygon.st0.svg-elem-3(
                points="39.9,78.2 39.9,92.6 55.3,83.5 121.4,120.6 121.4,106.6 55.1,69.6"
            )
            polygon.st0.svg-elem-4(
                points="14.5,92.6 14.5,107 29.9,97.8 96,134.9 96,120.9 29.7,83.9"
            )
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

    data: () => ({
        isActiveClass: null,
    }),

    /**
     * Mounted
     */
    mounted() {
        setTimeout(() => this.startFill(), 500);
    },

    /**
     * Methods
     */
    methods: {
        /**
         * start logo filling
         */
        startFill() {
            Vue.set(this, "isActiveClass", "active");
        },
    },
});
</script>

<style scoped>
svg .svg-elem-1 {
    stroke-dashoffset: 630.8416748046875px;
    stroke-dasharray: 630.8416748046875px;
    fill: transparent;
    -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
            0s,
        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s;
}

svg.active .svg-elem-1 {
    stroke-dashoffset: 0;
    fill: rgb(199, 6, 0);
}

svg .svg-elem-2 {
    stroke-dashoffset: 217.65098571777344px;
    stroke-dasharray: 217.65098571777344px;
    fill: transparent;
    -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
            0.12s,
        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s;
}

svg.active .svg-elem-2 {
    stroke-dashoffset: 0;
    fill: rgb(199, 6, 0);
}

svg .svg-elem-3 {
    stroke-dashoffset: 217.47738647460938px;
    stroke-dasharray: 217.47738647460938px;
    fill: transparent;
    -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
            0.24s,
        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7s;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7s;
}

svg.active .svg-elem-3 {
    stroke-dashoffset: 0;
    fill: rgb(199, 6, 0);
}

svg .svg-elem-4 {
    stroke-dashoffset: 217.57791137695312px;
    stroke-dasharray: 217.57791137695312px;
    fill: transparent;
    -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715)
            0.36s,
        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s;
    transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
        fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s;
}

svg.active .svg-elem-4 {
    stroke-dashoffset: 0;
    fill: rgb(199, 6, 0);
}
.st0 {
    fill: #c70600;
    stroke: #c70600;
    stroke-miterlimit: 10;
}

#logo {
    width: 105px;
    height: 85px;
}
</style>
