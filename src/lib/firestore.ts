import { db } from './firebase';
import { doc, setDoc, getDoc, collection } from 'firebase/firestore';

// Collection references
const usersCollection = 'users';

// User profile type
interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: 'student' | 'staff';
  createdAt: Date;
}

export const createUserProfile = async (userData: Omit<UserProfile, 'createdAt'>) => {
  const userRef = doc(db, usersCollection, userData.uid);
  const profile: UserProfile = {
    ...userData,
    createdAt: new Date(),
  };
  
  await setDoc(userRef, profile);
  return profile;
};

export const getUserProfile = async (uid: string) => {
  const userRef = doc(db, usersCollection, uid);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    return userSnap.data() as UserProfile;
  }
  return null;
};
