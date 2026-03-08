import { defineComponent, h } from 'vue';

export const ConSamevol = defineComponent({
  name: 'ConSamevol',
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
        h('path', {"d": "M150 800a50.005 50.005 0 0 0-50 50v600a50.005 50.005 0 0 0 50 50h700a50.005 50.005 0 0 0 50-50V850a50.005 50.005 0 0 0-50-50zm50 100h600v500H200z", "fillRule": "evenodd"}),
        h('path', {"d": "M1150 100a50.005 50.005 0 0 0-50 50v1300a50.005 50.005 0 0 0 50 50h300a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50zm50 100h200v1200h-200z", "fillRule": "evenodd"})
      ]
    );
  }
});
