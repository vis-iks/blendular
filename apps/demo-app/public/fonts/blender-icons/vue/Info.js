import { defineComponent, h } from 'vue';

export const Info = defineComponent({
  name: 'Info',
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
        h('path', {"d": "M350 99.902c-137.64 0-250 112.36-250 250v700c0 137.64 112.36 250 250 250h50v250c-.08 46.86 58.55 68.09 88.48 32.03l234.96-282.03H1250c137.64 0 250-112.36 250-250v-700c0-137.64-112.36-250-250-250zm350 200h200v200H700zm-100 300h300v400h100v100H600v-100h100v-300H600z", "fillRule": "evenodd"})
      ]
    );
  }
});
