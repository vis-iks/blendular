import { defineComponent, h } from 'vue';

export const DisclosureTriRight = defineComponent({
  name: 'DisclosureTriRight',
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
        h('path', {"d": "M147.073 98.191c-26.463 1.56-47.113 23.492-47.07 50v401.528c.017 35.718 36.395 59.902 69.336 46.094l498.472-198.62c39.771-16.741 41.088-72.615 2.15-91.211L171.489 103.074a50 50 0 0 0-24.416-4.88z", "fillRule": "evenodd"})
      ]
    );
  }
});
