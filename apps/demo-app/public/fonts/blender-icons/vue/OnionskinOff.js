import { defineComponent, h } from 'vue';

export const OnionskinOff = defineComponent({
  name: 'OnionskinOff',
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
        h('path', {"d": "M1049.576 103.151c-247.912 0-450 201.847-450 449.61s202.088 449.609 450 449.609 450-201.846 450-449.609-202.088-449.61-450-449.61m0 118.75c183.471 0 331.055 147.622 331.055 330.86S1233.047 883.62 1049.576 883.62c-183.47 0-331.055-147.621-331.055-330.859s147.585-330.86 331.055-330.86", "fillRule": "evenodd"})
      ]
    );
  }
});
