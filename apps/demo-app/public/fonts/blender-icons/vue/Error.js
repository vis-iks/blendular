import { defineComponent, h } from 'vue';

export const Error = defineComponent({
  name: 'Error',
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
        h('path', {"d": "M801.172 100c-68.995-.4-132.573 38.513-163.477 100.195l-518.75 1037.11c-59.425 118.749 29.31 262.623 162.11 262.695h1037.89c132.727-.072 221.337-143.788 162.11-262.5L962.305 200.195C931.775 139.258 869.333 100.46 801.172 100M700 400h200v600H700zm0 700h200v200H700z", "fillRule": "evenodd"})
      ]
    );
  }
});
