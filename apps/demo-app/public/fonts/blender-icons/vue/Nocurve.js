import { defineComponent, h } from 'vue';

export const Nocurve = defineComponent({
  name: 'Nocurve',
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
        h('path', {"d": "M150 99.644a50.005 50.005 0 0 0-50 50v400a50.005 50.005 0 1 0 100 0v-350h1200v350a50.005 50.005 0 1 0 100 0v-400a50.005 50.005 0 0 0-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
