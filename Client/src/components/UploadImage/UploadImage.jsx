import React from "react";
import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./UploadImage.css";
import { useRef } from "react";
import { useEffect } from "react";
import { Group, Button } from "@mantine/core";

const UploadImage = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const [imageUrl, setImageUrl] = useState(propertyDetails.image);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const handlenext = () => {
    setPropertyDetails((prev) => ({ ...prev, image: imageUrl }));
    nextStep();
  };

  useEffect(() => {
    cloudinaryRef.current = Window.cloudinary;
    widgetRef.current = window.cloudinary.createUploadWidget(
      {
        cloudName: "dmehjky7w",
        uploadPreset: "w5mvpfpr",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setImageUrl(result.info.secure_url);
        }
      }
    );
  }, []);

  return (
    <div className="flexColCenter uploadWrapper">
      {!imageUrl ? (
        <div
          className="flexColCenter uploadZone"
          onClick={() => widgetRef.current?.open()}
        >
          <AiOutlineCloudUpload size={50} color="grey" />
          <span>Upload Image</span>
        </div>
      ) : (
        <div className="uploadImage" onClick={() => widgetRef.current?.open()}>
          <img src={imageUrl} alt="" />
        </div>
      )}

      <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>
          Prev Step
        </Button>
        <Button onClick={handlenext} disabled={!imageUrl}>
          Next Step
        </Button>
      </Group>
    </div>
  );
};

export default UploadImage;
