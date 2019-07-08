<template>
  <div id="main-contianer">
    <table v-if="!expired">
      <tr v-if="showHeader">
        <td class="header" v-if="showDays">Days</td>
        <td class="header" v-if="showHours">Hours</td>
        <td class="header" v-if="showMinutes">Minutes</td>
        <td class="header" v-if="showSeconds">Seconds</td>
      </tr>
      <tr>
        <td v-if="showDays">
          <div ref="days" class="values" :style="{ color: color, background: bgColor}"></div>
        </td>
        <td v-if="showHours">
          <div ref="hours" class="values" :style="{ color: color, background: bgColor}"></div>
        </td>
        <td v-if="showMinutes">
          <div ref="minutes" class="values" :style="{ color: color, background: bgColor}"></div>
        </td>
        <td v-if="showSeconds">
          <div ref="seconds" class="values" :style="{ color: color, background: bgColor}"></div>
        </td>
      </tr>
    </table>
    <div v-else>
      Count Down Completed
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueCoolTimer',
  props: ['config'],
  data() {
    return {
      showHeader: true,
      showDays: true,
      showHours: true,
      showMinutes: true,
      showSeconds: true,
      expired: false
    }
  },
  computed: {
    color: function() {
      return this.config.textColor;
    },
    bgColor: function() {
      return this.config.background;
    }
  },
  mounted() {
    this.setDataVisibility();
    this.setCountDown();
  },
  methods: {
    setDataVisibility() {
      let format = this.config.format;
      this.config.showHeader ? this.showHeader = true : this.showHeader = false;
      format.includes("dd") ? this.showDays = true : this.showDays = false;
      format.includes("hh") ? this.showHours = true : this.showHours = false;
      format.includes("mm") ? this.showMinutes = true : this.showMinutes = false;
      format.includes("ss") ? this.showSeconds = true : this.showSeconds = false;
    },
    setCountDown() {
      let that = this;
      // Set the date to count down
      let countDownDate = new Date(this.config.endTime).getTime();

      // Update the count down every 1 second
      let x = setInterval(function() {
        // Get todays date and time
        let now = new Date().getTime();

        // Find the time span between now an the count down date
        let timeSpan = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        that.$refs.days.innerHTML = Math.floor(timeSpan / (1000 * 60 * 60 * 24));
        that.$refs.hours.innerHTML = Math.floor((timeSpan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        that.$refs.minutes.innerHTML = Math.floor((timeSpan % (1000 * 60 * 60)) / (1000 * 60));
        that.$refs.seconds.innerHTML = Math.floor((timeSpan % (1000 * 60)) / 1000);

        // stop timer if count down is over
        if (timeSpan < 0) {
          clearInterval(x);
        }
      }, 1000);
    }
  }
}
</script>


<style scoped>
  #main-contianer {
    padding: 10px;
    color: black;
  }

  table {
    width: 100%;
    text-align: center;
    table-layout: fixed;
  }

  tr, td {
    text-align: center;
  }

  .values {
    border-radius: 5px;
    width: 40%;
    margin: 0 auto;
    padding: 5px;
    font-size:  20px;
    /*transition: transform 0.5s ease-in-out;*/
    /*background: #2a2a2a;*/
    /*color: #ffffff;*/
  }
</style>
