import { defineComponent, h } from 'vue';

export const LinenumbersOff = defineComponent({
  name: 'LinenumbersOff',
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
        h('path', {"d": "M150 100a50.005 50.005 0 1 0 0 100h1099.219a50.005 50.005 0 1 0 0-100zm0 200a50.005 50.005 0 1 0 0 100h1099.219a50.005 50.005 0 1 0 0-100zm0 200a50.005 50.005 0 1 0 0 100h1099.219a50.005 50.005 0 1 0 0-100zm0 500a50.005 50.005 0 1 0 0 100h1099.219a50.005 50.005 0 1 0 0-100zm0 200a50.005 50.005 0 1 0 0 100h1099.219a50.005 50.005 0 1 0 0-100zm0 200a50.005 50.005 0 1 0 0 100h1100a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
