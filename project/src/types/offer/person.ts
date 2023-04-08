export type Person = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type User = Person & {
  email: string;
  token: string;
};
