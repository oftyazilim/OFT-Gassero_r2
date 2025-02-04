<template>
  <DxDataGrid
    :data-source="tasksStore"
    :height="440"
    :show-borders="true"
    :filter-value="filterExpr"
  >
    <DxRowDragging :data="status" :on-add="onAdd" group="tasksGroup" />
    <DxScrolling mode="virtual" />
    <DxColumn data-field="Subject" data-type="string" />
    <DxColumn :width="80" data-field="Priority" data-type="number">
      <DxLookup :data-source="priorities" value-expr="id" display-expr="text" />
    </DxColumn>
    <DxColumn :visible="false" data-field="Status" data-type="number" />
  </DxDataGrid>
</template>

<script setup lang="ts">
import {
  DxDataGrid,
  DxColumn,
  DxRowDragging,
  DxScrolling,
  DxLookup,
  DxDataGridTypes,
} from "devextreme-vue/data-grid";
import DataSource from "devextreme/data/data_source";

interface Task {
  ID: number;
  Subject: string;
  Status: number;
  Owner: number;
  AssignedEmployee: number;
  OrderIndex: number;
  Priority: number;
}

const props = defineProps<{
  status: number;
}>();

const priorities = [
  { id: 1, text: "Low" },
  { id: 2, text: "Normal" },
  { id: 3, text: "High" },
  { id: 4, text: "Urgent" },
];

const tasks = [
  { ID: 1, Subject: "Prepare 2013 Financial", Status: 5, Owner: 1, AssignedEmployee: 7, OrderIndex: 0, Priority: 3 },
  { ID: 2, Subject: "Prepare 2013 Marketing Plan", Status: 5, Owner: 1, AssignedEmployee: 4, OrderIndex: 1, Priority: 4 },
  { ID: 3, Subject: "Update Personnel Files", Status: 5, Owner: 1, AssignedEmployee: 2, OrderIndex: 2, Priority: 1 },
  { ID: 4, Subject: "Review Health Insurance Options Under the Affordable Care Act", Status: 1, Owner: 1, AssignedEmployee: 2, OrderIndex: 3, Priority: 4 },
  { ID: 5, Subject: "Choose between PPO and HMO Health Plan", Status: 4, Owner: 2, AssignedEmployee: 1, OrderIndex: 4, Priority: 3 },
  { ID: 6, Subject: "Google AdWords Strategy", Status: 1, Owner: 4, AssignedEmployee: 1, OrderIndex: 5, Priority: 2 },
  { ID: 7, Subject: "New Brochures", Status: 1, Owner: 4, AssignedEmployee: 1, OrderIndex: 6, Priority: 1 },
  { ID: 8, Subject: "2013 Brochure Designs", Status: 1, Owner: 1, AssignedEmployee: 28, OrderIndex: 7, Priority: 1 },
  { ID: 9, Subject: "Brochure Design Review", Status: 1, Owner: 28, AssignedEmployee: 29, OrderIndex: 8, Priority: 1 },
  { ID: 10, Subject: "Website Re-Design Plan", Status: 5, Owner: 28, AssignedEmployee: 29, OrderIndex: 9, Priority: 2 },
];

const tasksStore = new DataSource({
  store: {
    type: "array",
    data: tasks,
    key: "ID",
  },
});

const filterExpr = ["Status", "=", props.status];

const onAdd = (e: DxDataGridTypes.RowDraggingAddEvent) => {
  const key = e.itemData.ID;
  const newStatus = e.toData;

  // Veriyi güncelle
  const task = tasks.find((t) => t.ID === key);
  if (task) {
    task.Status = newStatus; // Yeni durumu ata
    tasksStore.reload(); // DataSource'u yenile
  }
};
</script>
