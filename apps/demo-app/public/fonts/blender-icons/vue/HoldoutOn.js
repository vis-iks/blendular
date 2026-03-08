import { defineComponent, h } from 'vue';

export const HoldoutOn = defineComponent({
  name: 'HoldoutOn',
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
        h('path', {"d": "M200 100c-55.226.006-99.994 44.774-100 100v800c.006 55.226 44.774 99.994 100 100h1200c55.226-.006 99.994-44.774 100-100V200c-.006-55.226-44.774-99.994-100-100zm600 100a400 400 0 0 1 400 400 400 400 0 0 1-400 400 400 400 0 0 1-400-400 400 400 0 0 1 400-400", "fillRule": "evenodd"})
      ]
    );
  }
});
