import { defineComponent, h } from 'vue';

export const ArrowLeftright = defineComponent({
  name: 'ArrowLeftright',
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
        h('path', {"d": "M1149.609 99.414a50.005 50.005 0 0 0-34.961 85.938L1329.297 400H270.703l214.649-214.648a50.005 50.005 0 1 0-70.704-70.704l-300 300a50.005 50.005 0 0 0 0 70.704l300 300a50.005 50.005 0 1 0 70.704-70.704L270.703 500h1058.594l-214.649 214.648a50.005 50.005 0 1 0 70.704 70.704l300-300a50.005 50.005 0 0 0 0-70.704l-300-300a50 50 0 0 0-35.743-15.234", "fillRule": "evenodd"})
      ]
    );
  }
});
