<template>
    <div>
        <flow-model :code="code" :type="type" @onSave="onSave"></flow-model>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();

const getQuerys = () => {
  return route.query;
};

let codeData = {
    "bpmn": {
        "nodes": [
            {
                "id": "Event_3m8r8f6",
                "type": "start-node",
                "x": 260,
                "y": 260,
                "text": "开始",
                "properties": {}
            },
        ],
        "edges": [
        ]
    },
    "nodeRed": {
      "nodes": [
        {
          "id": "node_1",
          "type": "start-node",
          "x": 240,
          "y": 200,
          "properties": {},
          "text": {
            "x": 250,
            "y": 200,
            "value": "start"
          }
        }
      ],
      "edges": []
    }
}

const code = ref(getQuerys().type == "bpmn" ? codeData.bpmn : codeData.nodeRed)
const type = ref(getQuerys().type)

const onSave = (newCode:any) => {
  console.log(newCode)
}

</script>

<style scoped>

</style>
