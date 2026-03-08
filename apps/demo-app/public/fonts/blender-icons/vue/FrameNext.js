import { defineComponent, h } from 'vue';

export const FrameNext = defineComponent({
  name: 'FrameNext',
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
        h('path', {"d": "M550.527 99.926c-27.842 0-50.585 22.16-50.586 50v700c-.06 40.51 45.544 64.27 78.711 41.02l500-350c28.542-19.9 28.542-62.14 0-82.04l-500-350c-8.26-5.8-18.06-8.9-28.125-9zm-450.586 0v800h200v-800z", "fillRule": "evenodd"})
      ]
    );
  }
});
