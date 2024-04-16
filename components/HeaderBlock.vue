<script>
import { gsap } from "gsap";

// import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(SplitText);
import SplitText from "./SplitText.vue";

export default {
  components: {
    SplitText,
  },
  data() {
    return {
      title: "Growing businesses by building relationships",
    };
  },
  props: {
    handleLoaderUp: Function,
  },
  mounted() {
    const fullScreen = window.matchMedia("(min-width: 1366px)");
    if (fullScreen.matches) {
      gsap.to(".main-container", { y: 0 });
      this.handleLoaderUp;

      // const splitText = new SplitText(".title", { type: "chars" });

      // gsap.from(splitText.chars, {
      //     duration: 1,
      //     y: 100,
      //     autoAlpha: 0,
      //     stagger: 0.05
      //     });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".header",
          start: "0 100%",
          end: "+=100%",
          scrub: true,
          onLeave: () => tl.pause(),
        },
      });

      tl.from(".title__header span", {
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      });
    }
  },
};
</script>

<template>
  <section>
    <div class="main-container">
      <nav class="navigation">
        <div class="logo">
          <img src="../public/logo.svg" alt="Logo" />
        </div>
        <ul class="nav-links">
          <li><a href="#">Services</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <ul>
          <li><a href="#">We're hiring</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
        <button class="btn">
          <img src="../public/arrow-right.svg" alt="Arrow" />
          Book a call
        </button>
      </nav>

      <div class="header" ref="header">
        <h1 class="title__header">
          <split-text :text="title"></split-text>
        </h1>
        <p class="subtitle">
          B2B Marketing & LinkedIn Lead <br />
          Generation agency
        </p>
      </div>
    </div>
    <div class="empty-block"></div>
  </section>
</template>

<style scoped>
section {
  position: relative;
}
.main-container {
  display: flex;
  flex-direction: column;
  background-color: var(--red-color);
  color: var(--dark-color);
  height: 100%;
  padding: 1.25rem;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
}

ul {
  list-style-type: none;
  display: flex;
  gap: 5rem;
}

li a {
  text-decoration: none;
  color: var(--dark-color);
  font-size: 1.4rem;
  line-height: 1.1;
}

.btn {
  padding: 0.75rem 1.25rem;
  padding-left: 9rem;
  border: none;
  cursor: pointer;
  background-color: var(--dark-color);
  color: var(--red-color);
  width: 21rem;
  display: flex;
  gap: 3.1rem;
  height: 2.75rem;
  align-items: center;
}

.header {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.title__header {
  font-size: 8.5rem;
  text-align: right;
  width: 50rem;
  line-height: 1.1;
  font-weight: 400;
}

.subtitle {
  font-size: 1.4rem;
  width: 100%;
  text-align: left;
  font-weight: 400;
  line-height: 1.2;
}
.empty-block {
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 6.5rem;
  background-color: var(--red-color);
}
</style>
