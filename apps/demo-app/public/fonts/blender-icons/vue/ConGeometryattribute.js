import { defineComponent, h } from 'vue';

export const ConGeometryattribute = defineComponent({
  name: 'ConGeometryattribute',
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
        h('path', {"d": "M539.305-349.005a1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8 1.8 1.8 0 0 1 1.8 1.8M544.305-340.005a1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8 1.8 1.8 0 0 1 1.8 1.8M534.305-340.005a1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8 1.8 1.8 0 0 1 1.8 1.8M541.805-344.255a1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8 1.8 1.8 0 0 1 1.8 1.8", "fillRule": "evenodd"}),
        h('path', {"d": "M536.805-344.255a1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8 1.8 1.8 0 0 1 1.8 1.8", "fillRule": "evenodd"})
      ]
    );
  }
});
