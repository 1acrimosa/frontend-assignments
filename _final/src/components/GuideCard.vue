<script>

</script>

<template>
  <div class="container">
    <h4>Need Guidence?</h4>
    <p>See the video, it can help you to understand the application.</p>
    <div class="play">
      <button>Play video
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  width: 200px;
  height: 200px;

  background-color: #ede1ff;

  border-radius: 20px;
}
h4 {
  color: rebeccapurple;
}
p {
  font-size: 12px;
  width: 150px;
  color: #777777;
}
button {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;

  display: flex;
  align-items: center;
  gap: 5px;
}

button:hover {
  background-color: lightgray;
}

button {
  background-color: ghostwhite;
  color: rebeccapurple;
}
</style>