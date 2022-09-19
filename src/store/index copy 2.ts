import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type HandleType = "add" | "jianshao";

interface InitialState {
  count: number;
  userInfo: { name?: String; age?: number };
  changeCount: (type: HandleType) => void;
  fetchData: (type: any) => void;
}

// TODO 为啥create<InitialState>()这里要加括号
const useGLobalStore = create<InitialState>()(
  persist(
    devtools((set, get, api) => ({
      count: 0,
      userInfo: {},
      changeCount: (type) => {
        if (type === "add") {
          // 对象写法通过get可以获取到store中的数据
          set({ count: get().count + 1 });
        } else {
          // 也可以通过函数写法获取到store中的数据
          set((state) => ({ count: state.count - 1 }), false, "global/change");
        }
      },
      fetchData: async (params: any) => {
        const res: any = await requestData(params);
        set((state) => ({ userInfo: res.data.userInfo }), false);
        // set((state) => ({ userInfo: res.data.userInfo }), true);
        // set({ userInfo: res.data.userInfo });
      },
    })),
    { name: "jianjian" }
  )
);

export { useGLobalStore };

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

// useGLobalStore 返回了几个方法 setState getState subscribe destroy 用于监听啥的，但在react组件中我们通常结合 useeffet来实现
// 在非react组件中才一半作用上
