interface User {
    name: string;
    phone: string;
    email: string;
    password: string;
    age?: number
}

type UserReadonly = Readonly<User>;
type UserRequired = Required<User>;
type UserPartial = Partial<User>;
type UserCredentials = Pick<User, 'email' | 'password'>;
type UserCredentialsOmit = Omit<User, 'phone' | 'age'>;


interface Post {
    title: string;
    subtitle: string;
}

type Props = 'sports' | 'nutrition' 
type PostsRecord = Record<Props, Post[]> 