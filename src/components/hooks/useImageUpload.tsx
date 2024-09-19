import { useEffect, useState } from "react";

interface ImageUpload {
    selectedFile: Blob | MediaSource | null,
    preview: | string | undefined ,
    //setSelectedFile: React.Dispatch<React.SetStateAction<Blob>>;
    setPreview: React.Dispatch<React.SetStateAction<string | undefined>>;
    onSelectedFile: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

const useImageUpload = function(file?: Blob): ImageUpload {
    
    const [selectedFile, setSelectedFile] = useState<Blob | MediaSource |null>(file ? file : null);
    const [preview, setPreview] = useState<string | undefined >('');

    useEffect(() => {
        
        // If there's no new selected image/file  still set the current preview state.
        if(!selectedFile ) {
            return;
        }

     

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    
    const onSelectedFile = function (e: React.ChangeEvent<HTMLInputElement>): void {
        e.stopPropagation();
       
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]; // Get the first selected file
            if (file instanceof Blob && file !== selectedFile ) {
              setSelectedFile(file); // Set the valid Blob (File) to selectedFile
            }
          } else {
            setSelectedFile(null); // Reset to null if no file is selected
          }
    }
    
    return {
        selectedFile,
        preview,
        onSelectedFile,
        setPreview
    }
}

export default useImageUpload;