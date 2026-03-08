import { defineComponent, h } from 'vue';

export const IpoEaseIn = defineComponent({
  name: 'IpoEaseIn',
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
        h('path', {"d": "M1350 100a50 50 0 0 0-40.039 19.922c-154.8 206.4-285.356 480.197-458.594 699.023S470.216 1200 150 1200a50.005 50.005 0 1 0 0 100c354.784 0 596.871-187.772 779.883-418.945 177.81-224.603 306.678-488.493 447.07-681.055H1450a50.005 50.005 0 1 0 0-100z", "fillRule": "evenodd"})
      ]
    );
  }
});
