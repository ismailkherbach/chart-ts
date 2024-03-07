export type RemoveAwaitType<T> = T extends Promise<infer U> ? U : T;
export type EmptyType<T> = T | undefined | null;
export type TInfo = EmptyType<string | number | boolean>;
