import { defineComponent, h } from 'vue';

export const StickyUvsDisable = defineComponent({
  name: 'StickyUvsDisable',
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
        h('path', {"d": "M450 100a50.005 50.005 0 0 0-50 50v300a50.005 50.005 0 0 0 50 50h300a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50zm50 100h200v200H500zm450 500a50.005 50.005 0 0 0-50 50v300a50.005 50.005 0 0 0 50 50h300a50.005 50.005 0 0 0 50-50V750a50.005 50.005 0 0 0-50-50zm50 100h200v200h-200zm-850 200a50.005 50.005 0 0 0-50 50v300a50.005 50.005 0 0 0 50 50h300a50.005 50.005 0 0 0 50-50v-300a50.005 50.005 0 0 0-50-50zm50 100h200v200H200z", "fillRule": "evenodd"})
      ]
    );
  }
});
