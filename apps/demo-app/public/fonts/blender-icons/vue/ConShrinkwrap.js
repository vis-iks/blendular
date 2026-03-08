import { defineComponent, h } from 'vue';

export const ConShrinkwrap = defineComponent({
  name: 'ConShrinkwrap',
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
        h('path', {"d": "M150.278 399.729a50.005 50.005 0 0 0-50 50l-.781 900.781a50.005 50.005 0 0 0 50 50l900.781-.8a50.005 50.005 0 0 0 50-50c0-524.079-425.921-950-950-950zm50 110.156c427.858 26.151 763.693 361.986 789.844 789.844l-790.625.781z", "fillRule": "evenodd"}),
        h('path', {"d": "M1297.544 99.533a100 100 0 0 0-68.75 30.274l-300 300A100.01 100.01 0 1 0 1070.2 571.213l300-300a100.01 100.01 0 0 0-72.656-171.68", "fillRule": "evenodd"})
      ]
    );
  }
});
