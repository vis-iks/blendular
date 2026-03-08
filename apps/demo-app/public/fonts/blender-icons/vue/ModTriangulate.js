import { defineComponent, h } from 'vue';

export const ModTriangulate = defineComponent({
  name: 'ModTriangulate',
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
        h('path', {"d": "M849.569 99.615a50.005 50.005 0 0 0-50 50l.781 1300.781a50.005 50.005 0 0 0 50 50h600a50.005 50.005 0 0 0 50-50V149.615a50.005 50.005 0 0 0-50-50zm50 100h472.656l-472.07 1022.852zm500.781 177.344v1023.437H928.084z", "fillRule": "evenodd"}),
        h('path', {"d": "M700.431 99.605v100H199.65l.8 1200.781 499.805-.8.2 100-550 .8a50.005 50.005 0 0 1-50-50L99.65 149.605a50.005 50.005 0 0 1 50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
