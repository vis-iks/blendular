import { defineComponent, h } from 'vue';

export const Workspace = defineComponent({
  name: 'Workspace',
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
        h('path', {"d": "M149.61 99.997a50.005 50.005 0 0 0-50 50v900a50.005 50.005 0 0 0 50 50h1300a50.005 50.005 0 0 0 50-49.805l.781-349.414-100-.2-.59 299.414H199.61v-800h800v350c.003 27.613 22.387 49.997 50 50h400c44.533-.017 66.83-53.852 35.351-85.352l-400-400c-9.376-9.38-22.116-14.439-35.351-14.453v-.2h-.78zM900.39 1200.778l-200 .4v198.828H449.61c-67.616-1-67.616 100.956 0 100h700c67.616 1 67.616-100.956 0-100H900.39z", "fillRule": "evenodd"})
      ]
    );
  }
});
