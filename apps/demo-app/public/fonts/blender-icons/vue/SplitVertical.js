import { defineComponent, h } from 'vue';

export const SplitVertical = defineComponent({
  name: 'SplitVertical',
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
        h('path', {"d": "M1500.001 150a50.005 50.005 0 0 0-50-50h-1300a50.005 50.005 0 0 0-50 50v1300a50.005 50.005 0 0 0 50 50h1300a50.005 50.005 0 0 0 50-50zm-100 50v1200h-1200V200z", "fillRule": "evenodd"}),
        h('path', {"d": "M866.626 199.982V1400.11H737.091V199.982z", "fillRule": "evenodd"})
      ]
    );
  }
});
