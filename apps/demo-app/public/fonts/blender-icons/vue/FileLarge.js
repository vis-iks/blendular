import { defineComponent, h } from 'vue';

export const FileLarge = defineComponent({
  name: 'FileLarge',
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
        h('path', {"d": "m127.667 21.25-50.286.004-41.137 41.128-.004 82.253c.025 3.623.91 4.58 4.58 4.572h86.854c3.658-.003 4.585-1.116 4.585-4.568V25.849c-.017-3.68-1.028-4.6-4.592-4.6", "fillRule": "evenodd"}),
        h('path', {"d": "M549.906 99.83 99.856 550.064l400.198-.099c37.87-.175 49.88-13.138 49.881-49.888z", "fillRule": "evenodd"})
      ]
    );
  }
});
