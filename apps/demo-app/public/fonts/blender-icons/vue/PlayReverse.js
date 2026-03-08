import { defineComponent, h } from 'vue';

export const PlayReverse = defineComponent({
  name: 'PlayReverse',
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
        h('path', {"d": "M1004.039 99.998c53.618 2.2 95.938 46.34 95.898 100v1000c-.072 78.47-86.35 126.29-152.93 84.77l-800-500c-62.591-39.18-62.591-130.36 0-169.54l800-500a100 100 0 0 1 57.032-15.23", "fillRule": "evenodd"})
      ]
    );
  }
});
