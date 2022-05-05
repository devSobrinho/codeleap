/* eslint-disable @typescript-eslint/explicit-function-return-type */
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const options = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
};

export default (req, res) => NextAuth(req, res, options);
