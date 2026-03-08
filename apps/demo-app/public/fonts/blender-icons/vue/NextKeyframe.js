import { defineComponent, h } from 'vue';

export const NextKeyframe = defineComponent({
  name: 'NextKeyframe',
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
        h('path', {"d": "M151.019 200.082c-27.994-1-50.979 22-50.977 50v700c-.1 43.07 50.65 66.13 83.008 37.7l400-350c22.872-19.93 22.872-55.47 0-75.4l-400-350c-8.89-7.8-20.238-12.11-32.031-12.3m996.289-100c-13.302 1-25.746 6.8-34.571 16.8l-400 450c-16.816 18.94-16.816 47.46 0 66.4l400 450c19.883 22.27 54.727 22.27 74.61 0l400-450c16.816-18.94 16.816-47.46 0-66.4l-400-450a50.02 50.02 0 0 0-40.039-16.8", "fillRule": "evenodd"})
      ]
    );
  }
});
