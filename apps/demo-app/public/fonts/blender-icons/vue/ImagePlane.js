import { defineComponent, h } from 'vue';

export const ImagePlane = defineComponent({
  name: 'ImagePlane',
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
        h('path', {"d": "M350 300a50.005 50.005 0 0 0-50 50v900a50.005 50.005 0 0 0 50 50h900a50.005 50.005 0 0 0 50-50V350a50.005 50.005 0 0 0-50-50zm50 100h800v800H999.971a49.5 49.5 0 0 0-6.026-23.828l-300-550C685.138 609.93 668.088 599.9 649.609 600a50 50 0 0 0-44.336 27.734L400 1038.281zm600 100c-54.636 0-100 45.364-100 100s45.364 100 100 100 100-45.364 100-100-45.364-100-100-100", "fillRule": "evenodd"}),
        h('path', {"d": "M150 100a50.005 50.005 0 0 0-50 50v350h100V200h300V100zm950 0v100h300v300h100V150a50.005 50.005 0 0 0-50-50zM100 1100v350a50.005 50.005 0 0 0 50 50h350v-100H200v-300zm1300 0v300h-300v100h350a50.005 50.005 0 0 0 50-50v-350z", "fillRule": "evenodd"})
      ]
    );
  }
});
