import { defineComponent, h } from 'vue';

export const ForceCharge = defineComponent({
  name: 'ForceCharge',
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
        h('path', {"d": "M1148.633 101.758a348.838 348.837 0 0 0-348.828 348.828 348.838 348.837 0 0 0 348.828 348.828 348.838 348.837 0 0 0 348.828-348.828 348.838 348.837 0 0 0-348.828-348.828m-248.047 300h500.586v101.367H900.586z", "fillRule": "evenodd"}),
        h('path', {"d": "M450.781 801.758A348.25 348.248 0 0 0 102.539 1150a348.25 348.248 0 0 0 348.242 348.242A348.25 348.248 0 0 0 799.024 1150a348.25 348.248 0 0 0-348.243-348.242m-50.586 98.633h101.368v198.633h199.609v101.367H501.563v198.633H400.195v-198.633H200.586v-101.367h199.609z", "fillRule": "evenodd"})
      ]
    );
  }
});
