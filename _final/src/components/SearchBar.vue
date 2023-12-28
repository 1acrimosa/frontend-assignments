<script>

</script>

<template>
  <div class="search">
    <label for="input">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
      <input id="input" type="text" placeholder="Search">
    </label>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 10px;
  width: 180px;
}

input {
  border: none;

  height: 35px;
  width: 200px;

  background-color: transparent;
  padding: 0 10px;
}

label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  border-radius: 20px;
  background-color: white;
}

input:focus {
  outline: none;
}
</style>