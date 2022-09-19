import create from "zustand";

type HandleType = "add" | "jianshao";

interface InitialState {
  count: number;
  userInfo: { name?: String; age?: number };
  changeCount: (type: HandleType) => void;
  fetchData: (type: any) => void;
}

const useGLobalStore = create<InitialState>((set, get) => ({
  count: 0,
  userInfo: {},
  changeCount: (type) => {
    if (type === "add") {
      // 对象写法通过get可以获取到store中的数据
      set({ count: get().count + 1 });
    } else {
      // 也可以通过函数写法获取到store中的数据
      set((state) => ({ count: state.count - 1 }));
    }
  },
  fetchData: async (params: any) => {
    const res: any = await requestData(params);
    set({ userInfo: res.data.userInfo });
  },
}));

export { useGLobalStore };

// 模拟异步请求
function requestData(params: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          userInfo: {
            name: "jianjian",
            age: 12,
          },
        },
      });
    }, 2000);
  });
}
