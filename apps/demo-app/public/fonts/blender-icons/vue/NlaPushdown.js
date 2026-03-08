import { defineComponent, h } from 'vue';

export const NlaPushdown = defineComponent({
  name: 'NlaPushdown',
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
        h('path', {"d": "M150 1500a50.005 50.005 0 0 1-50-50v-300a50.005 50.005 0 0 1 50-50h1000a50.005 50.005 0 0 1 50 50v300a50.005 50.005 0 0 1-50 50zm50-100h900v-200H200z", "fillRule": "evenodd"}),
        h('path', {"d": "M550 1200a50.005 50.005 0 0 1-50-50V850a50.005 50.005 0 0 1 50-50h900a50.005 50.005 0 0 1 50 50v300a50.005 50.005 0 0 1-50 50zm50-100h800V900H600z", "fillRule": "evenodd"}),
        h('path', {"d": "M450 100c-41.287-.072-64.87 47.092-40.04 80.078l300 400c20 26.732 60.08 26.732 80.08 0l300-400c24.829-32.986 1.247-80.15-40.04-80.078z", "fillRule": "evenodd"})
      ]
    );
  }
});
