import { defineComponent, h } from 'vue';

export const Home = defineComponent({
  name: 'Home',
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
        h('path', {"d": "M798.433 100.006c-25.978.4-50.774 10.921-69.141 29.297l-600 600c-20.558 20.572-29.48 45.907-29.297 70.703v50c.003 27.613 22.387 49.997 50 50h50v550c.003 27.613 22.387 49.997 50 50h350v-550c.003-27.613 22.387-49.997 50-50h300c27.613.003 49.997 22.387 50 50v550h350c27.613-.003 49.997-22.387 50-50v-550h50c27.613-.003 49.997-22.387 50-50v-50c.4-25.043-8.52-49.916-29.297-70.703l-600-600a100.01 100.01 0 0 0-72.265-29.297", "fillRule": "evenodd"})
      ]
    );
  }
});
