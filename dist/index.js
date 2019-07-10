/*!
 * vue-cool-timer v0.1.0
 * (c) Suvro Debnath
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));
var __vue_create_injector__ = _interopDefault(require('vue-runtime-helpers/dist/inject-style/browser.js'));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'VueCoolTimer',
  props: ['config'],
  data: function data() {
    return {
      showHeader: true,
      showDays: true,
      showHours: true,
      showMinutes: true,
      showSeconds: true,
      expired: false
    };
  },
  computed: {
    color: function color() {
      return this.config.textColor;
    },
    bgColor: function bgColor() {
      return this.config.background;
    }
  },
  mounted: function mounted() {
    this.setDataVisibility();
    this.setCountDown();
  },
  methods: {
    setDataVisibility: function setDataVisibility() {
      var format = this.config.format;
      this.config.showHeader ? this.showHeader = true : this.showHeader = false;
      format.includes("dd") ? this.showDays = true : this.showDays = false;
      format.includes("hh") ? this.showHours = true : this.showHours = false;
      format.includes("mm") ? this.showMinutes = true : this.showMinutes = false;
      format.includes("ss") ? this.showSeconds = true : this.showSeconds = false;
    },
    setCountDown: function setCountDown() {
      var that = this; // Set the date to count down

      var countDownDate = new Date(this.config.endTime).getTime(); // Update the count down every 1 second

      var x = setInterval(function () {
        // Get todays date and time
        var now = new Date().getTime(); // Find the time span between now an the count down date

        var timeSpan = countDownDate - now; // Time calculations for days, hours, minutes and seconds

        that.$refs.days.innerHTML = Math.floor(timeSpan / (1000 * 60 * 60 * 24));
        that.$refs.hours.innerHTML = Math.floor(timeSpan % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        that.$refs.minutes.innerHTML = Math.floor(timeSpan % (1000 * 60 * 60) / (1000 * 60));
        that.$refs.seconds.innerHTML = Math.floor(timeSpan % (1000 * 60) / 1000); // stop timer if count down is over

        if (timeSpan < 0) {
          clearInterval(x);
        }
      }, 1000);
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    attrs: {
      "id": "main-contianer"
    }
  }, [!_vm.expired ? _c('table', [_vm.showHeader ? _c('tr', [_vm.showDays ? _c('td', {
    staticClass: "header"
  }, [_vm._v("Days")]) : _vm._e(), _vm._v(" "), _vm.showHours ? _c('td', {
    staticClass: "header"
  }, [_vm._v("Hours")]) : _vm._e(), _vm._v(" "), _vm.showMinutes ? _c('td', {
    staticClass: "header"
  }, [_vm._v("Minutes")]) : _vm._e(), _vm._v(" "), _vm.showSeconds ? _c('td', {
    staticClass: "header"
  }, [_vm._v("Seconds")]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('tr', [_vm.showDays ? _c('td', [_c('div', {
    ref: "days",
    staticClass: "values",
    style: {
      color: _vm.color,
      background: _vm.bgColor
    }
  })]) : _vm._e(), _vm._v(" "), _vm.showHours ? _c('td', [_c('div', {
    ref: "hours",
    staticClass: "values",
    style: {
      color: _vm.color,
      background: _vm.bgColor
    }
  })]) : _vm._e(), _vm._v(" "), _vm.showMinutes ? _c('td', [_c('div', {
    ref: "minutes",
    staticClass: "values",
    style: {
      color: _vm.color,
      background: _vm.bgColor
    }
  })]) : _vm._e(), _vm._v(" "), _vm.showSeconds ? _c('td', [_c('div', {
    ref: "seconds",
    staticClass: "values",
    style: {
      color: _vm.color,
      background: _vm.bgColor
    }
  })]) : _vm._e()])]) : _c('div', [_vm._v("\n    Count Down Completed\n  ")])]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-9ad433f2_0", {
    source: "#main-contianer[data-v-9ad433f2]{padding:10px;color:#000}table[data-v-9ad433f2]{width:100%;text-align:center;table-layout:fixed}td[data-v-9ad433f2],tr[data-v-9ad433f2]{text-align:center}.values[data-v-9ad433f2]{border-radius:5px;width:40%;margin:0 auto;padding:5px;font-size:20px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-9ad433f2";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var VueCoolTimer = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

var index = {
  install: function install(Vue, options) {
    Vue.component("vue-cool-timer", VueCoolTimer);
  }
};

module.exports = index;
