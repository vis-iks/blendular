import { defineComponent, h } from 'vue';

export const GreasepencilLayerGroup = defineComponent({
  name: 'GreasepencilLayerGroup',
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
        h('path', {"d": "M150.017 1300c-27.614 0-50 22.386-50 50s22.386 50 50 50h1300c27.614 0 50-22.386 50-50s-22.386-50-50-50zm0 200c-27.614 0-50 22.386-50 50s22.386 50 50 50h1300c27.614 0 50-22.386 50-50s-22.386-50-50-50z", "fillRule": "evenodd"}),
        h('path', {"d": "M482.501 96c.303 0 .5.228.5.5l-.001 9c0 .272-.196.5-.5.5h-13a.5.5 0 0 1-.5-.5V102h5.5a.5.5 0 0 0 .5-.5V96zM474 96v4.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.353-.854l3.95-3.949a.5.5 0 0 1 .384-.197zm7 8h-2a.495.495 0 0 0-.5.493v.014c0 .273.223.493.5.493h2c.277 0 .5-.22.5-.493v-.014a.496.496 0 0 0-.5-.493m-4.439 0h-1.122c-.243 0-.439.223-.439.5s.196.5.439.5h1.122c.243 0 .44-.223.44-.5s-.197-.5-.44-.5M473 104h-2c-.667 0-.667 1 0 1h2c.667 0 .667-1 0-1", "fillRule": "evenodd"})
      ]
    );
  }
});
