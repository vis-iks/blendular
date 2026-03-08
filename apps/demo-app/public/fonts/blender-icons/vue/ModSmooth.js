import { defineComponent, h } from 'vue';

export const ModSmooth = defineComponent({
  name: 'ModSmooth',
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
        h('path', {"d": "M749.646 99.646a50.005 50.005 0 0 0-50 50v150h-350a50.005 50.005 0 0 0-50 50v350h-150a50.005 50.005 0 0 0-50 50v700a50.005 50.005 0 1 0 100 0v-650h150a50.005 50.005 0 0 0 50-50v-350h350a50.005 50.005 0 0 0 50-50v-150h650a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"}),
        h('path', {"d": "M1449.646 399.646c-579.307 0-1050 470.693-1050 1050a50.005 50.005 0 1 0 100 0c0-525.263 424.737-950 950-950a50.005 50.005 0 1 0 0-100", "fillRule": "evenodd"})
      ]
    );
  }
});
