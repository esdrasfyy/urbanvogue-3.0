import { ImageProviders } from "@/app/services/images.service";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ folder, handleImages }: { folder: string; onProgress: ((progress: number) => void) | null; handleImages: (image: string) => void }) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const processFiles = async () => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      for (let i = 0; i < acceptedFiles.length; i++) {
        try {
          const images = await new ImageProviders().upload({
            file: acceptedFiles[i],
            folder: folder,
            onProgress: (progress: number) => console.log(` ${acceptedFiles[i].name}: ${progress.toFixed(2)}%`),
          });
          if (images) handleImages(images);
          console.log(`File uploaded to: ${images}`);
        } catch (error) {
          console.log(error);
        }
      }
    };
    processFiles();
  }, [folder]);
  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 6,
    maxSize: 100 * 1024 * 1024,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #cccccc",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? <p>Solte os arquivos aqui...</p> : <p>Arraste e solte os arquivos aqui ou clique para selecionar</p>}
      </div>
      <div style={{ marginTop: "10px" }} className="flex gap-6">
        {files.map((file, index) => (
          <div key={index} style={{ margin: "5px 0" }}>
            <img src={URL.createObjectURL(file)} alt={file.name} style={{ maxWidth: "100px", maxHeight: "100px" }} />
            <p>{file.name}</p>
            <button
              onClick={() => removeFile(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropzone;
