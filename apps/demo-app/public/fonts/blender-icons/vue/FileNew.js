import { defineComponent, h } from 'vue';

export const FileNew = defineComponent({
  name: 'FileNew',
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
        h('path', {"d": "M1150.043 100.02c-193.3 0-350 156.7-350 350s156.7 350 350 350 350-156.7 350-350-156.7-350-350-350m-50 100h100v200h200v100h-200v200h-100v-200h-200v-100h200z", "fillRule": "evenodd"}),
        h('path', {"d": "M448.481 199.98c-12.718.4-24.8 5.64-33.79 14.648l-300 300c-31.479 31.5-9.18 85.335 35.352 85.352h300c27.613-.003 49.997-22.387 50-50v-250h150c67.616 1 67.616-100.956 0-100h-200v.2c-.5 0-1.01-.2-1.56-.2zm-348.438 500v750c.003 27.613 22.387 49.997 50 50h1000c27.613-.003 49.997-22.387 50-50v-500c1-67.616-100.956-67.616-100 0v450h-900v-700z", "fillRule": "evenodd"})
      ]
    );
  }
});
