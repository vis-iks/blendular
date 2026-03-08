import { defineComponent, h } from 'vue';

export const Sortsize = defineComponent({
  name: 'Sortsize',
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
        h('path', {"d": "M150 100a50.005 50.005 0 1 0 0 100h1300a50.005 50.005 0 1 0 0-100zm0 300a50.005 50.005 0 1 0 0 100h1000a50.005 50.005 0 1 0 0-100zm0 300a50.005 50.005 0 1 0 0 100h700a50.005 50.005 0 1 0 0-100zm0 300a50.005 50.005 0 1 0 0 100h400a50.005 50.005 0 1 0 0-100zm0 300a50.005 50.005 0 1 0 0 100h100a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
