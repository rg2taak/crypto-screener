<template lang="pug">
section
    b-field
        b-upload(v-model="dropFiles", multiple="", drag-drop="")
            section.section
                .content.has-text-centered
                    p
                        b-icon(icon="upload", size="is-large")
                    p Drop your files here or click to upload
    .tags
        span.tag.is-primary(v-for="(file, index) in dropFiles", :key="index")
            | {{ file.name }}
            button.delete.is-small(
                type="button",
                @click="deleteDropFile(index)"
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
    name: "FileUpload",

    data: () => ({
        dropFiles: [],
    }),

    /**
     * Methods
     */
    methods: {
        /**
         * Delete Dropped File
         */
        deleteDropFile(index: any) {
            this.dropFiles.splice(index, 1);
        },
    },
});
</script>

<style scoped>
</style>
