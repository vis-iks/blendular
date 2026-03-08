import { defineComponent, h } from 'vue';

export const MeshData = defineComponent({
  name: 'MeshData',
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
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v300a50.005 50.005 0 0 0 50 50h94.922L600 1162.695V1450a50.005 50.005 0 0 0 50 50h300a50.005 50.005 0 0 0 50-50v-287.305L1355.078 500H1450a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50h-300a50.005 50.005 0 0 0-50 50v50H500v-50a50.005 50.005 0 0 0-50-50zm50 100h200v200H200zm1000 0h200v200h-200zM500 300h600v150a50.005 50.005 0 0 0 50 50h91.406l-321.484 600H680.078L358.594 500H450a50.005 50.005 0 0 0 50-50zm200 900h200v200H700z", "fillRule": "evenodd"})
      ]
    );
  }
});
