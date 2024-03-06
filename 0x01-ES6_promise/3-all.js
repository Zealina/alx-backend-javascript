import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const photo = uploadPhoto();

  Promise.all([user, photo])
    .then((values) => console.log(`${values[1].body} ${values[0].firstName} ${values[0].lastName}`))
    .catch(() => {
      console.log('Signup system offline');
    });
}
