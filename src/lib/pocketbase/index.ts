import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_URL);

const authData = await pb
  .collection('users')
  .authWithPassword(
    process.env.NEXT_PUBLIC_PB_USERNAME!,
    process.env.NEXT_PUBLIC_PB_PASSWORD!,
);

export default pb;
