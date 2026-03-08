import { defineComponent, h } from 'vue';

export const ModEdgesplit = defineComponent({
  name: 'ModEdgesplit',
  props: {
    class: {
      type: String,
      default: ''
    }
  },
  setup(props, { attrs }) {
    return () => h(
      'svg',
      {
        viewBox: '0 0 20 20',
        
        class: `bl-icons ${props.class}`,
        ...attrs
      },
      [
        h('path', {"d": "m449.613 399.307 1000.781.8a50.005 50.005 0 0 1 50 50v1000a50.005 50.005 0 0 1-50 50h-1000a50.005 50.005 0 0 1-50-50l-.781-1000.8a50.005 50.005 0 0 1 50-50m50 100 .8 900.781h900V499.893z", "fillRule": "evenodd"}),
        h('path', {"d": "M1449.613 99.307a50.005 50.005 0 1 1 0 100h-1000a50.005 50.005 0 1 1 0-100zM150.394 398.526a50.005 50.005 0 0 1 49.219 50.781l.8 1000.586a50.005 50.005 0 1 1-100 .2l-.8-1000.786a50.005 50.005 0 0 1 50.781-50.781", "fillRule": "evenodd"})
      ]
    );
  }
});
