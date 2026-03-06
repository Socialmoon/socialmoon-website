import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import bcrypt from 'bcryptjs';

const firebaseConfig = {
  apiKey: "AIzaSyDwS5eqBNPZDy1Tk4vVcOj7fyoJwdnLxdw",
  authDomain: "socialmoon-new-website.firebaseapp.com",
  projectId: "socialmoon-new-website",
  storageBucket: "socialmoon-new-website.firebasestorage.app",
  messagingSenderId: "824834733733",
  appId: "1:824834733733:web:41b4d7f04913950fa6e3ce",
  measurementId: "G-V6N5E3ZJDG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function createSuperAdmin() {
  try {
    // Create superadmin with hashed password
    const hashedPassword = await bcrypt.hash('Admin@123', 10);
    
    const superAdmin = {
      username: 'superadmin',
      password: hashedPassword,
      role: 'superadmin',
      createdAt: new Date().toISOString()
    };

    const docRef = await addDoc(collection(db, 'admins'), superAdmin);
    console.log('✅ Superadmin created successfully!');
    console.log('Username: superadmin');
    console.log('Password: Admin@123');
    console.log('Document ID:', docRef.id);
    console.log('\n⚠️  Please change the password after first login!');
  } catch (error) {
    console.error('❌ Error creating superadmin:', error);
  }
}

createSuperAdmin();
