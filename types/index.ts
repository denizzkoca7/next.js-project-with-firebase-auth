export type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

export type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}[];

export type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
