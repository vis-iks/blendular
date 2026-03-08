import { defineComponent, h } from 'vue';

export const ModThickness = defineComponent({
  name: 'ModThickness',
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
        h('path', {"d": "M1344.125 395.775a150 150 0 0 0-10.36 1c-493.48 53.258-885.25 444.095-939.25 937.5a150.02 150.02 0 1 0 298.24 32.812c38.87-355.095 317.89-633.741 673.04-672.07a150.015 150.015 0 0 0-21.67-299.219z", "fillRule": "evenodd"}),
        h('path', {"d": "M1447.045 99.291c-744.98 0-1350 605.01-1350 1350a50.005 50.005 0 1 0 100 0c0-690.946 559.06-1250 1250-1250a50.005 50.005 0 1 0 0-100", "fillRule": "evenodd"})
      ]
    );
  }
});
