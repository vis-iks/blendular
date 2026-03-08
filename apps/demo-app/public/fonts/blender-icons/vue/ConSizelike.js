import { defineComponent, h } from 'vue';

export const ConSizelike = defineComponent({
  name: 'ConSizelike',
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
        h('path', {"d": "M150.001 999.991c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50h300c27.613-.003 49.997-22.387 50-50v-300c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M152.149 499.991a50.005 50.005 0 0 0-50 49.609l-2.15 350 100 .8 1.76-300.391h698.242v700h-300v100h350a50.005 50.005 0 0 0 50-50v-800a50.005 50.005 0 0 0-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M552.149 99.991a50.005 50.005 0 0 0-50 49.609l-2.15 250 100 .8 1.76-200.391h698.242v700h-200v100h250a50.005 50.005 0 0 0 50-50v-800a50.005 50.005 0 0 0-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
