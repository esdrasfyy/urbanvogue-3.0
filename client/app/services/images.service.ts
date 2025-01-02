import { Firebase } from "../libs/firebase.lib";

export class ImageProviders {
  private firebase;
  constructor() {
    this.firebase = new Firebase();
  }
  async upload({ file, folder, onProgress }: { file: File; folder: string; onProgress: ((progress: number) => void) | null }): Promise<string | null> {
    switch (process.env.NEXT_UPLOAD_IMAGE_PROVIDER) {
      case "firebase":
        return this.firebase.upload({ file, folder, onProgress });
      default:
        return null;
    }
  }
}
