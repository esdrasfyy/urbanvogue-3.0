import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import handleUnknownError from "../utils/handle-unknown-error.util";
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
  private credentials = {
    apiKey: process.env.NEXT_FIREBASE_API_KEY as string,
    authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAIN as string,
    projectId: process.env.NEXT_FIREBASE_PROJECT_ID as string,
    storageBucket: process.env.NEXT_FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID as string,
    appId: process.env.NEXT_FIREBASE_APP_ID as string,
  };

  private app;
  private storage;

  constructor() {
    this.app = initializeApp(this.credentials);
    this.storage = getStorage(this.app);
  }

  async upload({ file, folder, onProgress }: { file: File; folder: string; onProgress: ((progress: number) => void) | null }): Promise<string> {
    const fileId = uuidv4();
    const storageRef = ref(this.storage, `${folder}/${fileId}`);

    try {
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise<string>((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            onProgress && onProgress(progress);
          },
          (error) => {
            reject(new Error(`Upload failed: ${error.message}`));
          },
          async () => {
            try {
              const url = await getDownloadURL(storageRef);
              resolve(url);
            } catch (error: unknown) {
              reject(handleUnknownError(error, "Failed to get download URL."));
            }
          }
        );
      });
    } catch (error: unknown) {
      throw handleUnknownError(error, "Upload process failed.");
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
