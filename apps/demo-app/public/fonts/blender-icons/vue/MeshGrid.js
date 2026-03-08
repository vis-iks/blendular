import { defineComponent, h } from 'vue';

export const MeshGrid = defineComponent({
  name: 'MeshGrid',
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
        h('path', {"d": "M148.34 95.215a50.005 50.005 0 0 0-50 50v1309.57a50.005 50.005 0 0 0 50 50h1303.32a50.005 50.005 0 0 0 50-50V145.215a50.005 50.005 0 0 0-50-50zm50 100h1203.32v1209.57H198.34z", "fillRule": "evenodd"}),
        h('path', {"d": "M550.879 294.434a50.005 50.005 0 0 0-49.219 50.781v150h-150a50.005 50.005 0 1 0 0 100h150v400h-150a50.005 50.005 0 1 0 0 100h150v150a50.005 50.005 0 1 0 100 0v-150h400v150a50.005 50.005 0 1 0 100 0v-150h150a50.005 50.005 0 1 0 0-100h-150v-400h150a50.005 50.005 0 1 0 0-100h-150v-150a50.005 50.005 0 1 0-100 0v150h-400v-150a50.005 50.005 0 0 0-50.781-50.781m50.781 300.781h400v400h-400z", "fillRule": "evenodd"})
      ]
    );
  }
});
