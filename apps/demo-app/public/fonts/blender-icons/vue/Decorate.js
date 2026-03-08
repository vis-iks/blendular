import { defineComponent, h } from 'vue';

export const Decorate = defineComponent({
  name: 'Decorate',
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
        h('path', {"d": "M101.318 322.534a199.928 200.052-35.076 0 0 221.328 176.204 199.928 200.052-35.076 0 0 176.037-221.272 199.928 200.052-35.076 0 0-221.328-176.204 199.928 200.052-35.076 0 0-176.037 221.272", "fillRule": "evenodd"})
      ]
    );
  }
});
