<script>
import { gsap } from "gsap";
import { eventBus } from "/main.js";

// import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);
import SplitText from './SplitText.vue';

export default {
    components: {
    SplitText
  },
  data() {
    return {
      title: 'Growing businesses by building relationships'
    };
  },
  mounted() {
    const fullScreen = window.matchMedia("(min-width: 1366px)");
    if (fullScreen.matches) {
      this.$nextTick(() => {
        eventBus.on("loader-up", () => {
          gsap.to(".main-container", { y: -100, duration: 1.5 });
        });
        // const splitText = new SplitText(".title", { type: "chars" });
       
        // gsap.from(splitText.chars, {
        //     duration: 1,
        //     y: 100,
        //     autoAlpha: 0,
        //     stagger: 0.05
        //     });
        gsap.to('.main-container',{
            scrollTrigger: {
                trigger: ".hero",
                start: "0 bottom",
            },
            duration: 1,
            autoAlpha: 1,
            ease: "back.out(1.7)"
        })         
        gsap.from('.title span', {
            scrollTrigger: {
                trigger: ".title",
                start: "100 bottom",
            },
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05
            }, "+=0.5");
      });
    }
  },
};
</script>

<template>
  <div class="main-container">
    <nav class="navigation">
      <div class="logo">
        <img src="../public/logo.svg" alt="Logo" />
      </div>
      <ul class="nav-links">
        <li><a href="/services">Services</a></li>
        <li><a href="/case-studies">Case Studies</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
      <ul>
        <li><a href="/careers">We're hiring</a></li>
        <li><a href="/contact">Contacts</a></li>
      </ul>
      <button class="book-call">
        <img src="../public/arrow-right.svg" alt="Arrow" />
        Book a call
      </button>
    </nav>

    <div class="hero">
      <h1 class="title">
        <split-text :text="title"></split-text>
      </h1>
      <p class="subtitle">
        B2B Marketing & LinkedIn Lead <br />
        Generation agency
      </p>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  background-color: #e63e3a;
  color: #101820;
  height: 100vh;
  padding: 20px;
  z-index: 15;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
}

ul {
  list-style-type: none;
  display: flex;
  gap: 80px;
}

li a {
  text-decoration: none;
  color: #101820;
  font-size: 22px;
  line-height: 1.1;
}

.book-call {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #101820;
  color: #e63e3a;
  width: 330px;
  display: flex;
  gap: 50px;
  height: 44px;
  align-items: center;
  justify-content: flex-end;
}

.hero {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.title {
  font-size: 135px;
  text-align: right;
  width: 800px;
  line-height: 1.1;
  font-weight: 400;
}

.subtitle {
  font-size: 22px;
  width: 100%;
  text-align: left;
  font-weight: 400;
  line-height: 1.2;
}
</style>
