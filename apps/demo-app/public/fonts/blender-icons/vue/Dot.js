import { defineComponent, h } from 'vue';

export const Dot = defineComponent({
  name: 'Dot',
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
        h('path', {"d": "M300.012 100c-109.865 0-200 90.135-200 200s90.135 200 200 200 200-90.135 200-200-90.135-200-200-200", "fillRule": "evenodd"})
      ]
    );
  }
});
