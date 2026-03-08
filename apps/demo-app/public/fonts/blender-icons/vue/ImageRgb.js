import { defineComponent, h } from 'vue';

export const ImageRgb = defineComponent({
  name: 'ImageRgb',
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
        h('path', {"d": "m198.79 1400.57 1201.5-.001V199.08l-1201.25.005z", "fillRule": "evenodd"}),
        h('path', {"d": "M649.52 599.68c19.1-.1 36.61 10.63 45.12 27.734l300 600c16.52 33.223-7.6 72.231-44.73 72.266h-600c-37.1-.035-61.25-39.043-44.73-72.266l300-600c8.4-16.853 25.52-27.571 44.34-27.734M1149.91 399.68c82.25 0 150 67.749 150 150s-67.75 150-150 150-150-67.749-150-150 67.75-150 150-150", "fillRule": "evenodd"}),
        h('path', {"d": "M1449.91 99.68a50.005 50.005 0 0 1 50 50v1300a50.005 50.005 0 0 1-50 50H157.92a50 50 0 0 1-40.43-11.328v-.2a50 50 0 0 1-3.3-3.12v-.4a50 50 0 0 1-3.1-3.32v-.4a50 50 0 0 1-10.35-39.453V149.68a50.005 50.005 0 0 1 50-50zm-50 100h-1200v1200h1200z", "fillRule": "evenodd"})
      ]
    );
  }
});
