<template>
  <div class="card">
    <div class="card-image">
      <img :src="image" alt="Card Image">
      <span class="heart-icon" @click="toggleFavorite">&#x2764;</span>
    </div>
    <div class="card-body">
      <p class="creator">by {{ creator }}</p>
      <div class="card-info">
        <div class="bid">
          <span class="label">Current Bid</span>
          <span class="value">{{ currentBid }} ETH</span>
        </div>
        <div class="time">
          <span class="label">Auction Time</span>
          <span class="value">{{ auctionTime }}</span>
        </div>
      </div>
      <h3>{{ title }}</h3>
      <div class="actions">
        <button class="details-btn">Details</button>
        <button class="bid-btn">Place a Bid</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardComponent',
  props: {
    image: String,
    title: String,
    creator: String,
    currentBid: Number,
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
<style scoped>
.card {
  width: 250px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 10px;
  font-family: Arial, sans-serif;
  background-color: ghostwhite;
}

.card-image {
  position: relative;
}

.card-image img {
  width: 100%;
  display: block;
}

.heart-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.card-body {
  padding: 15px;
  color: #333;
}

.card-info {
  display: flex;
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

.details-btn, .bid-btn {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.bid-btn {
  background-color: #55d3c9;
  color: white;
}
</style>
