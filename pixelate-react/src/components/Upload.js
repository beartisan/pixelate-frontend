import React, { useState } from 'react';

function Upload() {
  const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <section id="upload">
      <h3>Upload your image</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={handleFileUpload} />
        <button type="submit" id="uploadImg">Pixelize!</button>
      </form>
    </section>
  );
}

export default Upload;


// Resource Notes:
// https://www.youtube.com/watch?v=wIOpe8S2Mk8