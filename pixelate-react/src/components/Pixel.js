import React, { useState, useEffect, useRef } from 'react';
import photo from '../images/spider-man.jpeg';

function PixelPic() {
  const [pixelatedPhoto, setPixelatedPhoto] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const pixelatePhoto = async () => {
      try {
        const image = new Image();
        image.src = photo;

        image.onload = () => {
          const canvas = canvasRef.current;
          const contextBoard = canvas.getContext('2d');

          // Define the pixelation block size
          let blockSize = 12;

          // Calculate the number of blocks in each dimension
          const numBlocksX = Math.ceil(image.width / blockSize);
          const numBlocksY = Math.ceil(image.height / blockSize);

          // Set the canvas size based on the pixelation result
          const pixelatedWidth = numBlocksX * blockSize;
          const pixelatedHeight = numBlocksY * blockSize;
          canvas.width = pixelatedWidth;
          canvas.height = pixelatedHeight;

          // Draw the pixelated image
          contextBoard.drawImage(image, 0, 0, pixelatedWidth, pixelatedHeight);

          // Get the pixelated image data from the canvas
          const imageData = contextBoard.getImageData(0, 0, pixelatedWidth, pixelatedHeight);
          const data = imageData.data;

          // Loop through each block and calculate the average color
          for (let y = 0; y < numBlocksY; y++) {
            for (let x = 0; x < numBlocksX; x++) {
              const blockStartX = x * blockSize;
              const blockStartY = y * blockSize;

              let totalRed = 0;
              let totalGreen = 0;
              let totalBlue = 0;
              let totalPixels = 0;

              // Calculate the sum of RGB values within the block
              for (let i = blockStartY; i < blockStartY + blockSize; i++) {
                for (let j = blockStartX; j < blockStartX + blockSize; j++) {
                  const pixelIndex = (i * pixelatedWidth + j) * 4;
                  const red = data[pixelIndex];
                  const green = data[pixelIndex + 1];
                  const blue = data[pixelIndex + 2];

                  totalRed += red;
                  totalGreen += green;
                  totalBlue += blue;
                  totalPixels++;
                }
              }

              // Calculate the average RGB values
              const averageRed = Math.round(totalRed / totalPixels);
              const averageGreen = Math.round(totalGreen / totalPixels);
              const averageBlue = Math.round(totalBlue / totalPixels);

              // Set the average color for all pixels within the block
              for (let i = blockStartY; i < blockStartY + blockSize; i++) {
                for (let j = blockStartX; j < blockStartX + blockSize; j++) {
                  const pixelIndex = (i * pixelatedWidth + j) * 4;

                  data[pixelIndex] = averageRed;
                  data[pixelIndex + 1] = averageGreen;
                  data[pixelIndex + 2] = averageBlue;
                }
              }
            }
          }

          // Update the image data on the canvas
          contextBoard.putImageData(imageData, 0, 0);

          // Convert the canvas to a data URL (base64)
          const pixelatedPhotoData = canvas.toDataURL('image/jpeg');

          // Set the pixelated photo in state
          setPixelatedPhoto(pixelatedPhotoData);
        };
      } catch (error) {
        console.error(error);
      }
    };

    pixelatePhoto();
  }, []);

  return (
    <div className='photo-container'>
      <div className='normal'>
        <h3>Normal Photo</h3>
        <img src={photo} alt='' />
      </div>
      <div className='pixelated'>
        <h3>Pixelated Photo by 10</h3>
        {pixelatedPhoto ? (
          <img src={pixelatedPhoto} alt='' />
        ) : (
          <p>Loading...</p>
        )}
        <canvas
          ref={canvasRef}
          style={{ display: 'none' }}
        ></canvas> {/* Hidden canvas element */}
      </div>
    </div>
  );
}

export default PixelPic;

//FIRST CODE: 

// import React, { useState, useEffect, useRef } from 'react';
// import photo from '../images/pixelate-this.jpeg';

// function PixelPic() {
//   const [pixelizedPhoto, setPixelizedPhoto] = useState(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const pixelizePhoto = async () => {
//       try {
//         const image = new Image();
//         image.src = photo;

//         image.onload = () => {
//           const canvas = canvasRef.current;
//           const contextBoard = canvas.getContext('2d');

//           // Reduce the size of the image to create a pixelated effect
//           const scale = 1;
//           const scaledWidth = image.width * scale;
//           const scaledHeight = image.height * scale;
//           canvas.width = scaledWidth;
//           canvas.height = scaledHeight;

//           // Draw the image on the canvas with a pixelated effect
//           contextBoard.imageSmoothingEnabled = false;
//           contextBoard.drawImage(image, 0, 0, scaledWidth, scaledHeight);

//           // Get the image data from the canvas
//           const imageData = contextBoard.getImageData(0, 0, scaledWidth, scaledHeight);
//           const data = imageData.data;

//           // Loop through each pixel and convert it to LEGO shud colors
//           for (let i = 0; i < data.length; i += 4) {
//             const red = data[i];
//             const green = data[i + 1];
//             const blue = data[i + 2];
//             const rgbColor = `${red}, ${green}, ${blue}`;

//             // Map the RGB color value to LEGO shud colors
//             const legoColor = getLEGOShudColor(rgbColor); // This is where Lego Color API comes in

//             // Set the LEGO shud color for the pixel
//             data[i] = legoColor.red;
//             data[i + 1] = legoColor.green;
//             data[i + 2] = legoColor.blue;
//           }

//           // Update the image data on the canvas
//           contextBoard.putImageData(imageData, 0, 0);

//           // Convert the canvas to a data URL (base64)
//           const pixelizedPhotoData = canvas.toDataURL('image/jpeg');

//           // Set the pixelized photo in state
//           setPixelizedPhoto(pixelizedPhotoData);
//         };
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     pixelizePhoto();
//   }, []);

//   // Implement your own logic to map RGB color values to LEGO shud colors
//   const getLEGOShudColor = (rgbColor) => {
//     // Example implementation: Randomly assign LEGO shud colors based on RGB color values
//     const legoColors = {
//       '255, 255, 255': { red: 255, green: 255, blue: 255 }, // White
//       '0, 0, 0': { red: 0, green: 0, blue: 0 }, // Black
//       '255, 0, 0': { red: 255, green: 0, blue: 0 }, // Red
//       '0, 255, 0': { red: 0, green: 255, blue: 0 }, // Green
//       '0, 0, 255': { red: 0, green: 0, blue: 255 }, // Blue
//       // Add more color mappings as needed
//     };

//     return legoColors[rgbColor] || { red: 0, green: 0, blue: 0 }; // Default to black if no mapping found
//   };

//   return (
//     <div className='photo-container'>
//       <div className='normal'>
//         <h3>Normal Photo</h3>
//         <img src={photo} alt='' />
//       </div>
//       <div className='ten'>
//         <h3>Pixelized and LEGO Shud Photo</h3>
//         {pixelizedPhoto ? (
//           <img src={pixelizedPhoto} alt='' />
//         ) : (
//           <p>Loading...</p>
//         )}
//         <canvas
//           ref={canvasRef}
//           style={{ display: 'none' }}
//         ></canvas> {/* Hidden canvas element */}
//       </div>
//     </div>
//   );
// }

// export default PixelPic;

// // SOURCES:
// // https://www.npmjs.com/package/canvas