import { defineComponent, h } from 'vue';

export const Rightarrow = defineComponent({
  name: 'Rightarrow',
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
        h('path', {"d": "M149.769 99.356a50.005 50.005 0 0 0-34.766 85.938l364.649 364.648L115.003 914.59a50.005 50.005 0 1 0 70.704 70.704l400-400a50.005 50.005 0 0 0 0-70.704l-400-400a50 50 0 0 0-35.938-15.234", "fillRule": "evenodd"})
      ]
    );
  }
});
