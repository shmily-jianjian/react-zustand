import { useGLobalStore } from "./index";

const getData = () => {
  useGLobalStore.subscribe(() => {
    console.log(1111);
  });
  return useGLobalStore.getState().count;
};

export { getData };
