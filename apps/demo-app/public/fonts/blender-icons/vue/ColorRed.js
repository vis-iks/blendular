import { defineComponent, h } from 'vue';

export const ColorRed = defineComponent({
  name: 'ColorRed',
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
        h('path', {"d": "M150.512 99.644a50.005 50.005 0 0 0-50 50v591.992a50 50 0 0 0 0 16.21v491.798a50.005 50.005 0 1 0 100 0v-450h325.586l384.961 481.25a50.024 50.024 0 1 0 78.124-62.5L639.769 781.48c148.603-40.423 260.743-170.768 260.743-331.836 0-192.707-157.293-350-350-350zm50 100h350c138.662 0 250 111.337 250 250s-111.338 250-250 250H200.503z", "fillRule": "evenodd"})
      ]
    );
  }
});
