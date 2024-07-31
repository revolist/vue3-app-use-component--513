<template>
    <div ref="cell"
         class="flex justify-center w-full">
        <div @click="customCellClickEvent">{{ value }}{{ rowIndex }}</div>
        <el-switch :model-value='value'
                   active-value="ENABLE"
                   inactive-value="DISABLE">
        </el-switch>
    </div>
</template>

<script lang="ts" setup>
    import { ref, inject } from "vue";
    import { ElSwitch } from "element-plus";
    const props = defineProps<
        {
            prop: any;
            model: any;
            column: any;
            rowIndex: number;
            colIndex: number;
            colType: any;
            type: any;
            data: any[];
            value: any;
        }>();
    const cell = ref<HTMLElement>();

    // const message = inject("sample");
    function customCellClickEvent() {
        console.log("Custom cell click > Injected message:", props);
        const event = new CustomEvent("cell-custom-action", {
            bubbles: true,
            detail: { row: props.model },
        });
        cell.value?.dispatchEvent(event);
    }
</script>