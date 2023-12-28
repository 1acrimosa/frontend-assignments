<script>

export default {
  name: 'TransferCardComponent',
  props: {
    image: String,
    title: String,
    creator: String,
    currentBid: String,
    auctionTime: String,
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    }
  }
};

</script>

<template>
  <div class="card">
    <div class="card-container">
    <div class="card-body">
      <p>Your balance:</p>
      <p class="creator">{{ creator }}</p>
      <div class="card-info">
        <div class="bid">
          <span class="label">June 1, 2020, 08:22pm</span>
          <span class="value">{{ currentBid }}</span>
        </div>
        <div class="time">
          <span class="label">This Month</span>
          <span class="value">{{ auctionTime }}</span>
        </div>
      </div>
      <h3>{{ title }}</h3>
      <div class="actions">

      </div>
    </div>
    <div class="card-image">
      <img :src="image" alt="Card Image">
    </div>
    </div>
  </div>
  <div class="second-card">
    <h1>Latest Transaction</h1>
    <img src="../media/cardinfo.png" alt="Info" />
  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
.card, .second-card {
  width: 1150px;
  height: 450px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 10px;
  font-family: 'Poppins', sans-serif;
  background-color: white;
}

.card-container {
  display: flex;
  align-items: end;
  justify-content: space-around;
}

.second-card img {
  width: 850px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image {
  width: 600px;
  height: 450px;
  position: relative;
  overflow: hidden;
}

.card-image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.card-body {
  padding: 15px;
  color: #333;
}

.card-body p {
  font-size: 40px;
}

.creator {
  font-size: 60px;
}

.card-info {
  display: block;
  justify-content: space-between;
  margin: 10px 0;
}

.label {
  font-size: 0.8em;
  color: #666;
}

.value {
  font-weight: bold;
}

.actions {
  text-align: center;
}
</style>