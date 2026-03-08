import { defineComponent, h } from 'vue';

export const LayerUsed = defineComponent({
  name: 'LayerUsed',
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
        h('path', {"d": "M400 100c-165.093 0-300 134.907-300 300s134.907 300 300 300 300-134.907 300-300-134.907-300-300-300m0 100c111.049 0 200 88.951 200 200s-88.951 200-200 200-200-88.951-200-200 88.951-200 200-200", "fillRule": "evenodd"})
      ]
    );
  }
});
