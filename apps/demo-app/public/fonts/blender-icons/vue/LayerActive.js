import { defineComponent, h } from 'vue';

export const LayerActive = defineComponent({
  name: 'LayerActive',
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
        h('path', {"d": "M400 100c-165.093 0-300 134.907-300 300s134.907 300 300 300 300-134.907 300-300-134.907-300-300-300", "fillRule": "evenodd"})
      ]
    );
  }
});
