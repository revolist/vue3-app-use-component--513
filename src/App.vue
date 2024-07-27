<template>
    <Wrap v-model:data="rows" />
</template>

<script setup>
    import { ref } from "vue";
    import VGrid, {
        VGridVueTemplate,
    } from "@revolist/vue3-datagrid";
    import Wrap from "./components/Wrap.vue";

    function generateData(count) {
        const keys = "abcdefghijklmnopqrstuvwxyz".split("");
        const data = [];

        for (let i = 0; i < count; i++) {
            const item = {};
            keys.forEach((key) => {
                item[key] = `${key}${i + 1}`;
            });
            data.push(item);
        }

        return data;
    }
    const rows = ref(generateData(10000));
    function click() { }
</script>
