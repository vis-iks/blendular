import { defineComponent, h } from 'vue';

export const IpoCirc = defineComponent({
  name: 'IpoCirc',
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
        h('path', {"d": "M1350.475 99.899a50.005 50.005 0 0 0-50 50c0 343.021-119.149 579.03-321.68 745.898-202.53 166.869-493.239 263.003-834.375 304.493a50.005 50.005 0 1 0 12.11 99.218c352.614-42.885 661.905-141.978 885.937-326.562 213.154-175.622 341.037-432.825 353.32-773.047h54.688a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
