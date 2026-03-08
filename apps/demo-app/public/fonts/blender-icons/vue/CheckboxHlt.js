import { defineComponent, h } from 'vue';

export const CheckboxHlt = defineComponent({
  name: 'CheckboxHlt',
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
        h('path', {"d": "M203.125 100C146.859 100 100 146.859 100 203.125v793.75C100 1053.141 146.859 1100 203.125 1100h793.75c56.266 0 103.125-46.859 103.125-103.125v-793.75C1100 146.859 1053.141 100 996.875 100zm694.922 199.023a100.01 100.01 0 0 1 72.656 171.68l-400 400a100.01 100.01 0 0 1-141.406 0l-200-200a100.01 100.01 0 1 1 141.406-141.406L500 658.594l329.297-329.297a100 100 0 0 1 68.75-30.274", "fillRule": "evenodd"})
      ]
    );
  }
});
