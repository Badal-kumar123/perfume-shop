import { useState, useEffect } from 'react';

export default function Profile() {
  const [image, setImage] = useState(null);

  // ✅ Load from localStorage when component mounts
  useEffect(() => {
    const savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) {
      setImage(savedAvatar);
    }
  }, []);

  // ✅ Save image to localStorage on upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // preview
        localStorage.setItem('avatar', reader.result); // save to localStorage
      };
      reader.readAsDataURL(file); // convert image to base64
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      <div className="flex flex-col items-center gap-4">
        <div className="w-40 h-40 rounded-full border-4 border-blue-500 overflow-hidden shadow-md">
          {image ? (
            <img
              src={image}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
              No Photo
            </div>
          )}
        </div>

        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Upload Profile Picture
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block mt-1 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                       file:text-sm file:font-semibold file:bg-blue-600 file:text-white
                       hover:file:bg-blue-700 transition"
          />
        </label>
      </div>
    </div>
  );
}
