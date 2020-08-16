import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

const Dropzone = ({ onChange }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const [file] = acceptedFiles;
    Papa.parse(file, {
      header: true,
      fastMode: true,
      chunk: undefined,
      chunkSize: undefined,
      complete: ({ data }) => onChange(data),
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dropzone-container" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <>
          <p>Drag 'n' drop some files here</p>
          <p>or click to select files</p>
        </>
      )}
    </div>
  );
};

export default Dropzone;
