import { defineComponent, h } from 'vue';

export const TriaDownBar = defineComponent({
  name: 'TriaDownBar',
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
        h('path', {"d": "M900.074 150.586c0-27.842-22.16-50.585-50-50.586h-700c-40.51-.061-64.27 45.544-41.02 78.711l350 500c19.9 28.542 62.14 28.542 82.04 0l350-500c5.8-8.26 8.9-18.06 9-28.125zm0 649.414h-800v200h800z", "fillRule": "evenodd"})
      ]
    );
  }
});
