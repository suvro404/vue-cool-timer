## vue-cool-timer
##### A count down timer made with vue js

#### Install
```
npm install vue-cool-timer --save
```

### Usage
```
import VueCoolTimer from 'vue-cool-timer'

new Vue({
  template: '<VueCoolTimer :config="config"></VueCoolTimer>',
  data () {
    return {
        config: {
                endTime: "Aug 14, 2019 21:00:00",
                textColor: '#ffffff',
                background: 'linear-gradient(to right, #545454, #3f3f3f, #2a2a2a)',
                showHeader: true,
                format:"dd-hh-mm-ss"
        }
    }
  }
});
```

### Configuration
| Property  | Details |
| ------------- | ------------- |
| endTime  | the end time of the count down  |
| textColor  | color of the timer texts  |
| background  | background of the timer texts  |
| showHeader  | boolean, determines to show/hide headers  |
| format  | format of the timer. Use only what you need. Like if you want to get only days and hours, use 'dd-hh'  |

### License
MIT