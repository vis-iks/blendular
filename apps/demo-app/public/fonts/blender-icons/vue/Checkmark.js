import { defineComponent, h } from 'vue';

export const Checkmark = defineComponent({
  name: 'Checkmark',
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
        h('path', {"d": "M998.272 99.543a100 100 0 0 0-68.75 30.274L500.225 559.114 270.928 329.817a100.01 100.01 0 1 0-141.406 141.406l300 300a100.01 100.01 0 0 0 141.406 0l500-500a100.01 100.01 0 0 0-72.656-171.68", "fillRule": "evenodd"})
      ]
    );
  }
});
