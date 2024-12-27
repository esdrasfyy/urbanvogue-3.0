import firebase from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL?: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export class Firebase {
  private credentials: FirebaseConfig;
  private app;
  private storage;
  constructor() {
    this.credentials = {
      apiKey: process.env.NEXT_FIREBASE_API_KEY as string,
      authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAIN as string,
      databaseURL: process.env.NEXT_FIREBASE_DATABASE_URL as string,
      projectId: process.env.NEXT_FIREBASE_PROJECT_ID as string,
      storageBucket: process.env.NEXT_FIREBASE_STORAGE_BUCKET as string,
      messagingSenderId: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID as string,
      appId: process.env.NEXT_FIREBASE_APP_ID as string,
    };
    this.app = firebase.initializeApp(this.credentials);
    this.storage = getStorage(this.app);
  }

  async upload(file: File[]) {
    try {
      const storageRef = ref(this.storage, `images/${file[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, file[0]);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            reject(new Error(error.message));
          },
          async () => {
            try {
              const url = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(url);
            } catch (error: unknown) {
              if (error instanceof Error) {
                reject(new Error(error.message));
              } else {
                reject(new Error("An unknown error occurred."));
              }
            }
          }
        );
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        new Error(error.message);
      } else {
        new Error("An unknown error occurred.");
      }
    }
  }
  
  async delete(imageName: string): Promise<void> {
    const storageRef = ref(this.storage, `images/${imageName}`);

    try {
      await deleteObject(storageRef);
      console.log(`Image ${imageName} deleted successfully.`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to delete image: ${error.message}`);
      } else {
        throw new Error("An unknown error occurred while deleting the image.");
      }
    }
  }
}
