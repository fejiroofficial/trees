import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "../src/App.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("App", () => {
  it("is a vue instance", () => {
    const wrapper = shallowMount(App, {
      localVue,
      router,
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
