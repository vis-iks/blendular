import { defineComponent, h } from 'vue';

export const ModTonemap = defineComponent({
  name: 'ModTonemap',
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
        h('path', {"d": "M1259.264-287.608a.5.5 0 0 0-.432.25l-3.236 5.605a.5.5 0 0 0 .434.75h6.47a.5.5 0 0 0 .434-.75l-3.236-5.605a.5.5 0 0 0-.434-.25", "fillRule": "evenodd"}),
        h('path', {"d": "M1254.42-290.461a.5.5 0 0 1 .399.25l2.25 3.899-.578 1-2.106-3.646-4.018 6.958h4.212l-.143.247a.5.5 0 0 0 .433.75l-5.37.003a.5.5 0 0 1-.433-.749l4.886-8.463a.5.5 0 0 1 .468-.249", "fillRule": "evenodd"})
      ]
    );
  }
});
