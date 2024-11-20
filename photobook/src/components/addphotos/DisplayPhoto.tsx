import { useEffect } from "react";
import { useFileStore } from "../../core/useFileStore";

export default function DisplayFile() {
  const fileName = useFileStore((state) => state.fileName);
  const fileUrl = useFileStore((state) => state.fileUrl);

  useEffect(() => {
    console.log("file", fileName);
  }, [fileName]);

  return (
    <div>
      {fileName ? (
        <div>
          <p>Uploaded File: {fileName}</p>
          {fileUrl && (
            <img src={fileUrl} alt={fileName} style={{ maxWidth: "200px" }} />
          )}
        </div>
      ) : (
        <p>No file uploaded</p>
      )}
    </div>
  );
}
