import { defineComponent, h } from 'vue';

export const Locked = defineComponent({
  name: 'Locked',
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
        h('path', {"d": "M550 300c-192.707 0-350 157.293-350 350v150h-50c-27.613.003-49.997 22.387-50 50v500c.003 27.613 22.387 49.997 50 50h800c27.613 0 49.997-22.387 50-50V850c-.003-27.613-22.387-49.997-50-50h-50V650c0-192.707-157.293-350-350-350m0 100c138.663 0 250 111.337 250 250v150H300V650c0-138.663 111.337-250 250-250m-50 600h100v200H500v-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
