<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      activeCard: 'marketing-section', // Set default active card
    };
  },
  mounted() {
    // Trigger the animation for the default active card on mount
    this.toggleCard(null, this.activeCard);
  },
  methods: {
    toggleCard(event, cardIdentifier) {
      let clickedCard;
      
      if (event) {
        clickedCard = event.currentTarget;
      } else {
        // If no event is provided (e.g., on mount), find the default active card
        clickedCard = this.$el.querySelector(`.${cardIdentifier}`);
      }

      if (this.activeCard === clickedCard) {
        this.resetCards();
        this.activeCard = null;
      } else {
        if (this.activeCard) {
          this.resetCards();
        }

        this.activeCard = clickedCard;

        const otherCard = clickedCard.classList.contains("marketing-section")
          ? this.$el.querySelector(".generation-section")
          : this.$el.querySelector(".marketing-section");

        // Animate the clicked card
        gsap.to(clickedCard, {
          xPercent: clickedCard.classList.contains("marketing-section")
            ? 10
            : -10,
          width: "75%",
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        });

        // Dim the non-clicked card
        gsap.to(otherCard, {
          opacity: 0.5,
          duration: 0.5,
          ease: "power1.out",
        });
      }
    },
    isActive(card) {
    return this.activeCard === card;
  },
    resetCards() {
      const cards = this.$el.querySelectorAll(".card");
      gsap.to(cards, {
        xPercent: 0,
        width: "50%",
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      });
    },
  },
};
</script>


<template>
  <section class="trusted-container">
    <div class="content-header">
      <h2 class="main-title">Trusted long-term partner</h2>
      <p class="tagline">
        For leading B2B tech and
        <br />
        service companies
      </p>
    </div>
    <div class="content-body">
      <p>
        We combine disruptive marketing techniques with proven tech solutions to
        provide maximum business value.
      </p>
      <div class="cards">
        <div class="marketing-section card" @click="toggleCard" 
        :class="{ 'active': activeCard === 'marketing-section' }">
          <p>1</p>
          <h3 class="cards-title">B2B Marketing</h3>
          <p class="cards-description">
            Your business is all set up and now feel ready to expand your client
            list? You understand your ideal client and how your products can
            solve their problems?
          </p>
          <p class="cards-description">
            Your solution is of high value and great quality, but you have a
            hard time attracting the right audience? Wish to work with specific
            clients but can't cut through the noise of a saturated market? Or
            simply looking to advance your growth efforts?
          </p>
          <div class="flex mt-100">
            <img src="../public/circles-white.svg" alt="Circles" />
            <button class="btns btn-black flex">
              <img src="../public/arrow-white.svg" alt="Arrow" />
              Learn more
            </button>
          </div>
        </div>
        <div class="generation-section card" @click="toggleCard" 
        :class="{ 'active': activeCard === 'generation-section' }">
          <p>2</p>
          <h2 class="cards-title">LinkedIn Lead Generation</h2>
          <p class="cards-description">
            Your business is all set up and now feel ready to expand your client
            list? You understand your ideal client and how your products can
            solve their problems?
          </p>
          <p class="cards-description">
            Your solution is of high value and great quality, but you have a
            hard time attracting the right audience? Wish to work with specific
            clients but can't cut through the noise of a saturated market? Or
            simply looking to advance your growth efforts?
          </p>
          <div class="flex mt-100">
            <img src="../public/circles-black.svg" alt="Circles" />
            <button class="btns btn-red flex">
              <img src="../public/arrow-white.svg" alt="Arrow" />
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trusted-container {
  position: relative;
  padding: 20px;
  z-index: 15;
  background: #fff;
}

.content-header {
  text-align: right;
  margin-bottom: 50px;
  border-top: 1px solid #e63e3a;
  border-bottom: 1px solid #e63e3a;
}

.main-title {
  color: #e63e3a;
  text-align: right;
  font-size: 112px;
  font-weight: 400;
  margin-bottom: 30px;
}

.tagline {
  color: #e63e3a;
  text-align: right;
  font-size: 38px;
}

.content-body p {
  color: #e63e3a;
}
.cards {
  display: flex;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
}
.marketing-section {
  background-color: #e63e3a;
}
.generation-section {
  background-color: #101820;
}
.card {
  padding: 80px 40px 40px 40px;
  flex: 1;
  min-width: 75%;
}
.card p {
  color: #fff;
}
.cards-title {
  color: #fff;
  font-size: 60px;
  margin: 0;
  margin-bottom: 30px;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mt-100 {
  margin-top: 100px;
}
.btns {
  width: 240px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}
.btn-red {
  background-color: #e63e3a;
}
.btn-black {
  background-color: #101820;
}
.marketing-section,
.generation-section {
  flex-basis: 50%; /* Adjust to 50% */
  transition: flex-basis 0.5s ease-out, opacity 0.5s ease-out;
}
.active {
    z-index: 15;
  }
</style>
