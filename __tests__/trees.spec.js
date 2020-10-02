import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Trees from "@/pages/Trees";
import TreeCard from "@/components/TreeCard";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Trees.vue", () => {
  let wrapper;
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      fetchTrees: jest.fn(),
    };
    getters = {
      getTrees: () => [
        {
          name: "sample tree",
          species_name: "sample species",
          image: "www.image.com",
        },
      ],
    };
    store = new Vuex.Store({
      actions,
      getters,
    });
    wrapper = shallowMount(Trees, {
      store,
      localVue,
    });
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("dispatches get trees as component is created", () => {
    expect(actions.fetchTrees).toHaveBeenCalled();
  });

  it("gets trees from store to display", () => {
    expect(wrapper.vm.trees).toStrictEqual(getters.getTrees());
  });

  it("mount tree cards", () => {
    expect(wrapper.findComponent(TreeCard).exists()).toBe(true);
  });
});
