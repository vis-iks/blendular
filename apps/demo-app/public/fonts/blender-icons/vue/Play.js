import { defineComponent, h } from 'vue';

export const Play = defineComponent({
  name: 'Play',
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
        h('path', {"d": "M195.961 99.998c-53.618 2.2-95.938 46.34-95.898 100v1000c.072 78.47 86.35 126.29 152.93 84.77l800-500c62.591-39.18 62.591-130.36 0-169.54l-800-500a100 100 0 0 0-57.032-15.23", "fillRule": "evenodd"})
      ]
    );
  }
});
