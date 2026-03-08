import { defineComponent, h } from 'vue';

export const HoldoutOff = defineComponent({
  name: 'HoldoutOff',
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
        h('path', {"d": "M600 100c-275.55 0-500 224.45-500 500s224.45 500 500 500 500-224.45 500-500-224.45-500-500-500m0 100c221.506 0 400 178.494 400 400s-178.494 400-400 400-400-178.494-400-400 178.494-400 400-400m-52.148 100a50 50 0 0 0-8.4 1.17c-120.99 24.373-215.796 118.7-238.476 238.867a50.005 50.005 0 1 0 98.242 18.555c15.048-79.727 77.874-142.839 159.961-159.375A50.005 50.005 0 0 0 547.852 300", "fillRule": "evenodd"})
      ]
    );
  }
});
