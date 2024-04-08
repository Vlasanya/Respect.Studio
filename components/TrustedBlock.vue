<script>
import { gsap } from "gsap";

import SplitText from "./SplitText.vue";

export default {
  components: {
    SplitText,
  },
  data() {
    return {
      activeCard: "marketing-section",
      title: "Trusted long-term partner",
      text: " We combine disruptive marketing techniques with proven tech solutions to provide maximum business value.",
    };
  },
  mounted() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trusted-container",
        start: "50% 100%",
        end: "+=100%",
      },
    });

    tl.from(".main-title span", {
      opacity: 0,
      stagger: 0.05,
      duration: 1,
    })
      .from(".text span", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.01,
      })
      .from(
        ".tagline",
        {
          opacity: 0,
          duration: 0.5,
        },
        "-=3"
      );
  },
  methods: {
    toggleCard(cardName) {
      if (this.activeCard === cardName) {
        return;
      }
      this.activeCard = cardName;
      this.applyCardStyles();
      console.log(this.activeCard === "marketing-section");
    },
    applyCardStyles() {
      const marketing = this.$refs.marketing;
      const generation = this.$refs.generation;

      if (this.activeCard === "marketing-section") {
        const tl = gsap.timeline();
        tl.to(generation, {
          flexBasis: "66%",
          opacity: 0.5,
          xPercent: 0,
          duration: 0.5,
        }).to(marketing, { opacity: 1, duration: 0.2 });
      } else {
        gsap.to(marketing, { opacity: 0.5, duration: 0.5 });
        gsap.to(generation, {
          flexBasis: "66%",
          opacity: 1,
          xPercent: -66,
          duration: 0.5,
        });
      }
    },
  },
};
</script>

<template>
  <section class="trusted-container">
    <div class="content-header">
      <h2 class="main-title">
        <split-text :text="title"></split-text>
      </h2>
      <p class="tagline">
        For leading B2B tech and
        <br />
        service companies
      </p>
    </div>
    <div class="content-body">
      <p class="text">
        <split-text :text="text"></split-text>
      </p>
      <div class="cards">
        <div
          ref="marketing"
          class="marketing-section card"
          @click="toggleCard('marketing-section')"
          :class="{ active: activeCard === 'marketing-section' }"
        >
          <p>1</p>
          <h3 class="cards-title">B2B Marketing</h3>
          <p class="cards-description">
            Your business is all set up and now feel ready to expand your client
            list? You understand your ideal client and how your products can
            solve their problems?
            Your business is all set up and now feel ready to expand your client
            list? You understand your ideal client and how your products can
            solve their problems?
          </p>
          <p class="cards-description">
            Your solution is of high value and great quality, but you have a
            hard time attracting the right audience? Wish to work with specific
            clients but can't cut through the noise of a saturated market? Or
            simply looking to advance your growth efforts?
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
        <div
          ref="generation"
          class="generation-section card"
          @click="toggleCard('generation-section')"
          :class="{ active: activeCard === 'generation-section' }"
        >
          <p>2</p>
          <h2 class="cards-title">LinkedIn Lead Generation</h2>
          <p class="cards-description">
            Your business is all set up and now feel ready to expand your client
            list? You understand your ideal client and how your products can
            solve their problems?
            Your business is all set up and now feel ready to expand your client
            list? You understand your ideal client and how your products can
            solve their problems?
          </p>
          <p class="cards-description">
            Your solution is of high value and great quality, but you have a
            hard time attracting the right audience? Wish to work with specific
            clients but can't cut through the noise of a saturated market? Or
            simply looking to advance your growth efforts?
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
  padding: 1.25rem;
  z-index: 15;
  background: var(--white-color);
}

.content-header {
  text-align: right;
  margin-bottom: 3.1rem;
  border-top: 1px solid var(--red-color);
  border-bottom: 1px solid var(--red-color);
}

.main-title {
  color: var(--red-color);
  text-align: right;
  font-size: 7rem;
  font-weight: 400;
  margin-bottom: 2rem;
}

.tagline {
  color: var(--red-color);
  text-align: right;
  font-size: 2.4rem;
}

.content-body p {
  color: var(--red-color);
}
.cards {
  display: flex;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
}
.marketing-section {
  background-color: var(--red-color);
}
.generation-section {
  background-color: var(--dark-color);
  opacity: 0.5;
}
.card {
  padding: 5rem 6.5rem 2.5rem 2.5rem;
  flex: 1;
  min-width: 66%;
}
.card p {
  color: var(--white-color);
}
.cards-title {
  color: var(--white-color);
  font-size: 3.75rem;
  margin: 0;
  margin-bottom: 2rem;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mt-100 {
  margin-top: 6.25rem;
}
.btns {
  width: 15rem;
  padding: 0.75rem 1.25rem;
  color: var(--white-color);
  border: none;
  cursor: pointer;
  margin-top: 1.25rem;
}
.btn-red {
  background-color: var(--red-color);
}
.btn-black {
  background-color: var(--dark-color);
}
.active {
  z-index: 15;
}
</style>
