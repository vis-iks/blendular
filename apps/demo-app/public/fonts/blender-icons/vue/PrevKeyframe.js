import { defineComponent, h } from 'vue';

export const PrevKeyframe = defineComponent({
  name: 'PrevKeyframe',
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
        h('path', {"d": "M1548.981 200.082c27.994-1 50.98 22 50.977 50v700c.1 43.07-50.65 66.13-83.008 37.7l-400-350c-22.872-19.93-22.872-55.47 0-75.4l400-350c8.89-7.8 20.238-12.11 32.031-12.3m-996.289-100c13.302 1 25.746 6.8 34.571 16.8l400 450c16.816 18.94 16.816 47.46 0 66.4l-400 450c-19.883 22.27-54.727 22.27-74.61 0l-400-450c-16.816-18.94-16.816-47.46 0-66.4l400-450a50.02 50.02 0 0 1 40.04-16.8", "fillRule": "evenodd"})
      ]
    );
  }
});
