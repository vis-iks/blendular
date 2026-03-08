import { defineComponent, h } from 'vue';

export const FileImage = defineComponent({
  name: 'FileImage',
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
        h('path', {"d": "M552.345 700c17.08.8 32.55 10.335 41.02 25.195l400 700c19.03 33.312-5 74.758-43.36 74.805h-800c-38.36-.047-62.39-41.493-43.36-74.805l400-700a50 50 0 0 1 45.7-25.195M1050.005 400c82.25 0 150 67.749 150 150s-67.75 150-150 150-150-67.749-150-150 67.75-150 150-150", "fillRule": "evenodd"}),
        h('path', {"d": "M150.005 100a50.005 50.005 0 0 0-50 50v1085.156l100-175V200h1200v1200h-309.96c12.224 33.953 11.705 68.655.39 100h359.57a50.005 50.005 0 0 0 50-50V150a50.005 50.005 0 0 0-50-50z", "fillRule": "evenodd"})
      ]
    );
  }
});
