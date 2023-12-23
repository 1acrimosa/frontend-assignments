<template>
  <table class="custom-table">
    <thead>
    <tr>
      <th v-for="header in headers" :key="header">{{ header }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in rows" :key="row.id">
      <td v-for="header in headers" :key="header">{{ row[header.toLowerCase()] }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
