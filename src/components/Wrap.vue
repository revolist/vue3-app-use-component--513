<template>
  <span style="display: flex; margin: 20px" @click="click"
    >Click on me and move the scroll bar to look at the first item in the
    table</span
  >
  <VGrid :columns="columns" :source="rows" />
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import VGrid, {
  VGridVueTemplate,
  ColumnRegular,
} from "@revolist/vue3-datagrid";
import Cell from "./Cell.vue";
const props = defineProps({
  data: {
    type: Array,
  },
});
const rows = ref([]);
let dataOriginal = [];
const columns = ref([]);

watch(
  () => props.data,
  (val) => {
    dataOriginal = JSON.parse(JSON.stringify(val));
    rows.value = JSON.parse(JSON.stringify(val));
    let col = generateAlphabetArray().map((item, index) => {
      if (index === 0) {
        item.cellTemplate = VGridVueTemplate(Cell);
      }
      return item;
    });
    columns.value = col;
  },
  {
    immediate: true,
  }
);
function generateAlphabetArray() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return Array.from(alphabet, (char, index) => ({
    name: char,
    prop: char,
  }));
}

const emit = defineEmits(["update:data"]);
function click() {
  emit("update:data", dataOriginal.reverse());
}
</script>
