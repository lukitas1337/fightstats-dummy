import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '../../../libs/db.js'; 
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise), // Pass the refined clientPromise here
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'database', // Store sessions in MongoDB
  },

  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
