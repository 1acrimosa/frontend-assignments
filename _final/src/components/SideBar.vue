<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

  <aside>
    <div class="head">
      <div class="logo">
        <img src="../media/2023-12-24%2019.06.25.jpg" alt="Logo">
      </div>
      <div class="right">
        <h1>Enfso</h1>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    </div>
    <slot name="head"></slot>
    <nav>
      <router-link to="/">
        <button class="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bounding-box-circles" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
          </svg>
          Dashboard
        </button>
      </router-link>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
          </svg>
          Bids
        </button>
      <router-link to="/saved">
        <button class="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
          Saved
        </button>
      </router-link>

      <router-link to="/creators">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"/>
          </svg>
          Creators
        </button>
      </router-link>

      <router-link to="/wallet">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
          </svg>
          Wallet
        </button>
      </router-link>
    </nav>
    <div class="container">
      <h4>Need Guidence?</h4>
      <p>See the video, it can help you to understand the application.</p>
      <button id="play">Play video
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5"/>
        </svg>
      </button>
    </div>


  </aside>
</template>

<script>

</script>

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
  margin-left: 20px;
  margin-top: 60%;
}

h4 {
  color: rebeccapurple;
}

p {
  font-size: 12px;
  width: 150px;
  color: #777777;
}

#play {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;

  display: flex;
  align-items: center;
  gap: 5px;

  background-color: ghostwhite;
  color: rebeccapurple;

  width: 120px;
}

#play:hover {
  background-color: lightgray;
}

.logo img {
  width: 45px;
  height: 45px;

  border-radius: 50%;
}

aside {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-y: scroll;
  width: 475px;
  height: calc(100vh - 16px);
  border-right: 0.5px solid #dedede;
  background-color: white;
}

aside::-webkit-scrollbar {
  display: none;
}

div.head {
  display: flex;
  align-items: center;
  align-self: center;
  gap: 20px;
}

div.head div.right h1, div.head {
  margin: 0;
}

div.head div.right h1 {
  font-size: 28px;
  color: rebeccapurple;
}

div.head, nav {
  font-family: 'Poppins', sans-serif;
  margin-bottom: 30px;
}

button {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 90%;
  padding: 15px 40px;
  margin: 6px 0;
  color: #869eaf;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 0;
  border-radius: 20px;
  background-color: transparent;
}

button svg {
  color: #869eaf;
}

button.selected {
  color: #886cbf;
  background-color: #ede1ff;
  border-radius: 20px;
}
button.selected::after {
  width: 10px;
  height: 100%;
}
</style>