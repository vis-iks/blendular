import { defineComponent, h } from 'vue';

export const Rew = defineComponent({
  name: 'Rew',
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
        h('path', {"d": "M949.414 200c27.842 0 50.585 22.16 50.586 50v700c.061 40.51-45.544 64.27-78.711 41.02l-500-350c-28.542-19.9-28.542-62.14 0-82.04l500-350c8.26-5.8 18.06-8.9 28.125-9zM300 100v1000H100V100z", "fillRule": "evenodd"})
      ]
    );
  }
});
