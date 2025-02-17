"use client";

import React, { useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setImage(imgUrl);
    }
    if (predictions.length > 0) {
      setPredictions([]);
    }
  };

  const classifyImage = async () => {
    try {
      setLoading(true);
      const imgElement = document.getElementById("uploaded-image");
      const model = await mobilenet.load();
      const predictions = await model.classify(imgElement);
      setPredictions(predictions);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-indigo-400 w-full h-screen flex flex-col gap-2 justify-center items-center">
      <label htmlFor="choose-image">
        <div className="border-2 border-dotted border-black rounded-lg px-5 py-2 cursor-pointer  hover:text-white hover:border-white">
          {image ? "Change image" : "Choose an Image"}
        </div>
        <input
          id="choose-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />
      </label>
      {image && (
        <div>
          <img
            id="uploaded-image"
            className="w-[300px] rounded-xl mb-2"
            src={image}
            alt="Uploaded"
            width="300"
          />
          <button
            className={`px-4 py-2 border-2 border-dotted rounded-lg transition-all 
              ${
                loading
                  ? "border-white text-white cursor-not-allowed"
                  : "border-black text-black bg-gray-300/10 hover:text-white hover:border-white"
              }`}
            onClick={classifyImage}
          >
            {loading ? "Analyzing..." : "Classify Image"}
          </button>
        </div>
      )}
      {predictions.length > 0 && !loading && (
        <div>
          <ul>
            {predictions.map((prediction) => (
              <li key={prediction.className}>
                {prediction.className}:{" "}
                {(prediction.probability * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default ImageUploader;
