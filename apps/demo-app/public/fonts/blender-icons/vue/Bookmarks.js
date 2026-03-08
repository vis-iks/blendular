import { defineComponent, h } from 'vue';

export const Bookmarks = defineComponent({
  name: 'Bookmarks',
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
        h('path', {"d": "M150 99.957c-27.613.003-49.997 22.387-50 50v1300c.017 44.532 53.852 66.83 85.352 35.352L550 1120.66l364.648 364.649c31.5 31.478 85.335 9.18 85.352-35.352v-1300c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
