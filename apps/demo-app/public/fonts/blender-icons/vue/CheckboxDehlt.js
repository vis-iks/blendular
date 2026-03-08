import { defineComponent, h } from 'vue';

export const CheckboxDehlt = defineComponent({
  name: 'CheckboxDehlt',
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
        h('path', {"d": "M203.125 100C146.859 100 100 146.859 100 203.125v793.75C100 1053.141 146.859 1100 203.125 1100h793.75c56.266 0 103.125-46.859 103.125-103.125v-793.75C1100 146.859 1053.141 100 996.875 100zm0 100h793.75c2.6 0 3.12.5 3.12 3.12v793.75c0 2.6-.5 3.12-3.12 3.12h-793.75c-2.6 0-3.12-.5-3.12-3.12V203.12c0-2.6.5-3.12 3.12-3.12", "fillRule": "evenodd"})
      ]
    );
  }
});
