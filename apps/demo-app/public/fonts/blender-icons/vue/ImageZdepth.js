import { defineComponent, h } from 'vue';

export const ImageZdepth = defineComponent({
  name: 'ImageZdepth',
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
        h('path', {"d": "M1450 100c27.613.003 49.997 22.387 50 50v1300c-.003 27.613-22.387 49.997-50 50H150c-27.613-.003-49.997-22.387-50-50V150c.003-27.613 22.387-49.997 50-50zm-150 200H700v400H300v600h600V900h400z", "fillRule": "evenodd"}),
        h('path', {"d": "M1300 300H700v400h200v200h400z", "fillRule": "evenodd"})
      ]
    );
  }
});
