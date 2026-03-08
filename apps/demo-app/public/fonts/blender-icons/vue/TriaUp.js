import { defineComponent, h } from 'vue';

export const TriaUp = defineComponent({
  name: 'TriaUp',
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
        h('path', {"d": "M100 647.778c0 27.842 22.16 50.584 50 50.586h700c40.51.06 64.27-45.544 41.02-78.711l-350-500c-19.9-28.542-62.14-28.542-82.04 0l-350 500c-5.8 8.26-8.9 18.06-9 28.125z", "fillRule": "evenodd"})
      ]
    );
  }
});
