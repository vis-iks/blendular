import { defineComponent, h } from 'vue';

export const File = defineComponent({
  name: 'File',
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
        h('path', {"d": "M648.09 100.002a50 50 0 0 0-38.477 19.727L114.691 614.65c-31.479 31.5-9.18 85.335 35.352 85.352h500c27.613-.003 49.997-22.387 50-50v-450h500v1200h-1000v-600h-100v650c.003 27.613 22.387 49.997 50 50h1100c27.613-.003 49.997-22.387 50-50v-1300c-.003-27.613-22.387-49.997-50-50h-600c-.5-.006-.9-.006-1.37 0-.067.002-.1-.002-.2 0-.1.004-.3-.005-.4 0z", "fillRule": "evenodd"})
      ]
    );
  }
});
