import { mount, createLocalVue } from "@vue/test-utils";
import TreeCard from "@/components/TreeCard";
import Card from "ant-design-vue/lib/card";
import Button from "ant-design-vue/lib/button";

const localVue = createLocalVue();
localVue.component(Button.name, Button);
localVue.component(Card.name, Card);

describe("TreeCard.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TreeCard, {
      localVue,
      propsData: {
        tree: {
          name: "sample tree",
          species_name: "sample species",
          image: "www.image.com",
        },
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("displays props", () => {
    expect(wrapper.find(".tree-card__name").text()).toBe("sample tree");
    expect(wrapper.find("p").text()).toBe("sample species");
  });
});
