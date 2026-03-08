import { defineComponent, h } from 'vue';

export const UvIslandsel = defineComponent({
  name: 'UvIslandsel',
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
        h('path', {"d": "M149.995 199.977a50.005 50.005 0 0 0-50 50v1100.195a50.005 50.005 0 0 0 50 50l400-.2a50.005 50.005 0 0 0 50-50v-1100a50.005 50.005 0 0 0-50-50zm50 100h300v1000l-300 .2z", "fillRule": "evenodd"}),
        h('path', {"d": "M950.006 100c-27.614.003-49.998 22.387-50 50v1300c.002 27.613 22.386 49.997 50 50h500c27.613-.003 49.997-22.387 50-50V150c-.003-27.613-22.387-49.997-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
