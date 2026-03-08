import { defineComponent, h } from 'vue';

export const RestrictSelectOff = defineComponent({
  name: 'RestrictSelectOff',
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
        h('path', {"d": "M149.126 99.81c-34.97.6-58.488 36.077-45.507 68.555l400 1000.195c17.79 45.034 82.806 41.02 94.922-5.86l117.578-446.875 446.679-117.578c46.499-12.32 50.486-76.769 5.86-94.727l-1000-400.195a49.8 49.8 0 0 0-19.532-3.51z", "fillRule": "evenodd"})
      ]
    );
  }
});
