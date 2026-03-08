import { defineComponent, h } from 'vue';

export const NormalsVertexFace = defineComponent({
  name: 'NormalsVertexFace',
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
        h('path', {"d": "M898.126 99.173a100.01 100.01 0 0 0-98.438 101.367v483.203a100.01 100.01 0 0 0 28.906 88.477l.6.6a100 100 0 0 0 1.37 1.37 100.01 100.01 0 0 0 84.944 26.35h484.18a100.01 100.01 0 1 0 0-200h-400v-400A100.01 100.01 0 0 0 898.126 99.173", "fillRule": "evenodd"}),
        h('path', {"d": "M1098.888 1450.84a50.005 50.005 0 0 0-50 50h-900a50.005 50.005 0 0 0-50-50v-900a50.005 50.005 0 0 0 50-50l550.781-.6v100l-500.781.6v800h800V900.449h100z", "fillRule": "evenodd"})
      ]
    );
  }
});
