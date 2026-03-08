import { defineComponent, h } from 'vue';

export const UvVertexsel = defineComponent({
  name: 'UvVertexsel',
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
        h('path', {"d": "M149.986 100.007c-27.613.003-49.997 22.387-50 50v300c.003 27.613 22.387 49.997 50 50h300c27.613-.003 49.997-22.387 50-50v-300c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M596.303 199.989v100h203.71v500h-500V600.77h-100v849.219a50.005 50.005 0 0 0 50 50h600a50.005 50.005 0 0 0 50-50v-550h550a50.005 50.005 0 0 0 50-50v-600a50.005 50.005 0 0 0-50-50zm303.71 100h500v500h-500zm-600 600h500v500h-500z", "fillRule": "evenodd"})
      ]
    );
  }
});
