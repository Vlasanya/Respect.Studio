<script>
import { gsap } from "gsap";
import SplitText from "./SplitText.vue";

export default {
  components: {
    SplitText,
  },
  data() {
    return {
      barValues: [
        { label: "27" },
        { label: "44" },
        { label: "65" },
        { label: "53" },
        { label: "27" },
        { label: "61" },
        { label: "77" },
        { label: "98" },
        { label: "107" },
        { label: "131" },
        { label: "158" },
        { label: "125" },
        { label: "176" },
        { label: "200" },
      ],
      statsData: [
        { label: "Revenue generated for clients", value: "1570" },
        { label: "Conversations opened", value: "1200" },
        { label: "Leads generated", value: "378" },
        { label: "Calls scheduled for clients", value: "197" },
      ],
      title1: "Consistent leads flow to streamline",
      title2: "Your business growth.",
      description1: "We combine disruptive marketing techniques with proven",
      description2: "tech solutions to provide maximum business value.",
    };
  },
  mounted() {
    const fullScreen = window.matchMedia("(min-width: 1366px)");
    if (fullScreen.matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".lead-section",
          start: "0 50%",
        },
      });
      tl.from(".title span", {
        opacity: 0,
        stagger: 0.05,
        duration: 1,
      });
      tl.from(".description span", {
        opacity: 0,
        stagger: 0.05,
        duration: 1,
      });
      tl.from(
        ".bar",
        {
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          yPercent: 100,
        },
        "<"
      );
      gsap.from(
        ".stats-block",
        {
          scrollTrigger: {
            trigger: '.stats-block',
            start: "0 70%",
          },
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          xPercent: -100,
        },
        "<"
      );
    }
  },
};
</script>

<template>
  <section class="lead-section">
    <div class="content">
      <h2 class="title">
        <split-text :text="title1"></split-text>
        <br />
        <split-text :text="title2"></split-text>
      </h2>
      <p class="description">
        <split-text :text="description1"></split-text>
        <br />
        <split-text :text="description2"></split-text>
      </p>
      <div class="bars">
        <div
          class="bar"
          v-for="value in barValues"
          :key="value"
          :style="{ height: value.label + '%' }"
        >
          <div class="bar-value">{{ value.label }}</div>
        </div>
      </div>
      <div class="statistics">
        <div
          class="stats-block"
          v-for="stat in statsData"
          :key="stat.label"
          :style="{
            width: (stat.value % 100) + '%',
            paddingLeft: (stat.value % 30) + '%',
          }"
        >
          <div class="stats-label">{{ stat.label }}</div>
          <div class="stats-value">{{ stat.value }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lead-section {
  color:  var(--dark-color);
  padding: 20px;
  overflow: hidden;
  background-color: var(--white-color);
  position: relative;
  z-index: 7;
}

.title {
  font-size: 82px;
  margin-bottom: 16px;
  font-weight: 400;
}

.description {
  font-size: 22px;
  margin-bottom: 100px;
}

.bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 32px;
  gap: 4px;
}

.bar {
  width: 100%;
  background-color: var(--red-color);
  text-align: center;
  position: relative;
}
.bar-value {
  position: absolute;
  top: -20px;
  left: 45%;
  color: var(--red-color);
  font-size: 15px;
  line-height: 1.1;
}
.statistics {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1px;
  align-items: flex-end;
}

.stats-block {
  background-color: var(--dark-color);
  padding: 16px;
  color: var(--white-color);
  min-width: 30%;
  display: flex;
  gap: 20px;
  align-items: center;
  padding-left: 170px;
}

.stats-label {
  font-size: 22px;
  color: var(--red-color);
  max-width: 200px;
  text-align: right;
}

.stats-value {
  font-size: 50px;
  font-weight: bold;
  color: var(--red-color);
}
</style>
