import { defineComponent, h } from 'vue';

export const FileFolder = defineComponent({
  name: 'FileFolder',
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
        h('path', {"d": "M150 100c-27.613.003-49.997 22.387-50 50v350h1400V350c-.003-27.613-22.387-49.997-50-50H600V150c-.003-27.613-22.387-49.997-50-50zM150 600c-27.613.003-49.997 22.387-50 50v700c.003 27.613 22.387 49.997 50 50h1300c27.613-.003 49.997-22.387 50-50V650c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
