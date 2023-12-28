<script>

</script>

<template>
  <body>
  <h1>Simple CSS Bar Chart</h1>
  <div class="simple-bar-chart">

    <div class="item" style="--clr: #5EB344; --val: 80">
      <div class="label">Label 1</div>
      <div class="value">80%</div>
    </div>

    <div class="item" style="--clr: #FCB72A; --val: 50">
      <div class="label">Label 2</div>
      <div class="value">50%</div>
    </div>

    <div class="item" style="--clr: #F8821A; --val: 100">
      <div class="label">Label 3</div>
      <div class="value">100%</div>
    </div>

    <div class="item" style="--clr: #E0393E; --val: 15">
      <div class="label">Label 4</div>
      <div class="value">15%</div>
    </div>

    <div class="item" style="--clr: #963D97; --val: 1">
      <div class="label">Label 5</div>
      <div class="value">1%</div>
    </div>

    <div class="item" style="--clr: #069CDB; --val: 90">
      <div class="label">Label 6</div>
      <div class="value">90%</div>
    </div>
  </div>
  </body>
</template>

<style scoped>
body {
  margin: 0;
  padding: 2rem;
  color: #1D1E22;
  background-color: #f0f0f0;
  font-family: system-ui, sans-serif;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #1D1E22;
    color: #f0f0f0;
  }
}

body > * { max-width: 45rem; margin-inline: auto}
</style>