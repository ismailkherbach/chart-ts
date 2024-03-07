import { TInfo } from "../common/types/common";

export const assertNotEmpty = (...args: TInfo[]) => {
  args.forEach((val) => {
    if (!val) throw new Error("filed must be not empty");
  });
};
