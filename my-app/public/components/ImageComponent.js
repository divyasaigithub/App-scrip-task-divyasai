// components/ImageComponent.js
import Image from 'next/image';

const ImageComponent = () => {
  return (
    <div>
      <h1>Image Component</h1>
      <Image
        src="/Design Task - PLP.avif" // Path to image in the public folder
        alt="Design Task PLP"
        width={500} // Width of the image
        height={300} // Height of the image
      />
    </div>
  );
};

export default ImageComponent;
