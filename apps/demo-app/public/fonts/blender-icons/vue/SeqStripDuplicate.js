import { defineComponent, h } from 'vue';

export const SeqStripDuplicate = defineComponent({
  name: 'SeqStripDuplicate',
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
        h('path', {"d": "M450 100c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50h1000c27.613-.003 49.997-22.387 50-50V150c-.003-27.613-22.387-49.997-50-50zM150 700c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50h1000c27.613-.003 49.997-22.387 50-50V750c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
