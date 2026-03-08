import { defineComponent, h } from 'vue';

export const Image = defineComponent({
  name: 'Image',
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
        h('path', {"d": "M149.998 100.003a50.005 50.005 0 0 0-50 50v1300a50.005 50.005 0 0 0 50 50h1300a50.005 50.005 0 0 0 50-50v-800a50.005 50.005 0 1 0-100 0v750h-1200v-1200h150a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"}),
        h('path', {"d": "M549.998 100.003c-25 0-50 25-50 50v550c0 50 25 100 100 100s100-50 100-100v-100c0-50 53.412-100 100-100 55.229 0 100 44.772 100 100v350c0 82.843 67.157 150 150 150s150-67.157 150-150v-350c0-55.228 44.772-100 100-100h50c85.547 0 150-66.406 150-150v-200c0-25-25-50-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
