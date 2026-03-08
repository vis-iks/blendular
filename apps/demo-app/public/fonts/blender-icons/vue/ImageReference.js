import { defineComponent, h } from 'vue';

export const ImageReference = defineComponent({
  name: 'ImageReference',
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
        h('path', {"d": "M449.219 99.256A50.005 50.005 0 0 0 400 150.037v979.297l-285.352 285.351a50.005 50.005 0 1 0 70.704 70.704l285.351-285.352H1450a50.005 50.005 0 1 0 0-100H500v-950a50.005 50.005 0 0 0-50.781-50.781", "fillRule": "evenodd"}),
        h('path', {"d": "M1450 100.037a50.005 50.005 0 0 1 50 50v850h-100v-800H600v-100h50z", "fillRule": "evenodd"}),
        h('path', {"d": "M1200 300.037c-54.636 0-100 45.364-100 100s45.364 100 100 100 100-45.364 100-100-45.364-100-100-100M851.953 505.115c-16.946-.8-32.881 8.08-41.211 22.852l-225 400c-17.018 30.04 4.73 67.264 39.258 67.187h450c34.528.077 56.276-37.147 39.258-67.187l-225-400c-7.65-13.552-21.755-22.152-37.305-22.852", "fillRule": "evenodd"})
      ]
    );
  }
});
