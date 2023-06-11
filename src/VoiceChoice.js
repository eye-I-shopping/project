import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import BackgroundLogo from "./components/BackgroundLogo";

const VoiceChoice = () => {
  const [audioSource, setAudioSource] = useState("");
  const [speaker, setSpeaker] = useState(
    sessionStorage.getItem("speaker") || "nes_c_mikyung"
  );
  const audioRef = useRef();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = "/mp3/voiceChoice.mp3";
      audioRef.current.load();
      audioRef.current.oncanplaythrough = async () => {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("playback error", error);
        }
      };
    }
  }, []);

  const handleButtonClick = (audioFile, speaker) => {
    setAudioSource(audioFile);
    setSpeaker(speaker);
    if (audioRef.current) {
      audioRef.current.src = audioFile;
      audioRef.current.load();
      audioRef.current.oncanplaythrough = async () => {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("playback error", error);
        }
      };
    }
  };
  const handleSave = () => {
    sessionStorage.setItem("speaker", speaker);
  };

  const handleSkip = () => {
    setAudioSource("");
    setSpeaker("nes_c_mikyung");
    sessionStorage.setItem("speaker", "nes_c_mikyung");
  };

  return (
    <>
      <Header
        title="음성 선택"
        skipLink="/splashImage/custom/voiceChoice/speedChoice"
        skipOnClick={handleSkip}
        buttonLabel="건너뛰기"
      />
      <BackgroundLogo />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "89vh",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateAreas: `
              'a b'
              'c d'
              'e e'
            `,
            gridGap: "20px",
            padding: "30px",
            borderRadius: "40px 40px 0 0",
            width: "90%",
            marginBottom: "0px",
            height: "80.5vh",
            backgroundColor: "white",
          }}
        >
          <Button
            onClick={() => handleButtonClick("/mp3/Jinho.mp3", "jinho")}
            variant="Outlined"
            sx={{
              borderRadius: "55px",
              backgroundColor:
                speaker === "jinho" ? "#977CC9" : "rgba(151, 151, 151, 0.1)",
              color: speaker === "jinho" ? "#ffffff" : "#323232",
              gridArea: "a",
              fontSize: "calc(1.5vw + 1.5vh)",
              height: "26vh",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#977CC9",
                color: "white",
              },
              "&:active": {
                backgroundColor: "#977CC9",
                color: "white",
              },
            }}
          >
            성인 남성
          </Button>
          <Button
            onClick={() =>
              handleButtonClick("/mp3/Mikyung.mp3", "nes_c_mikyung")
            }
            variant="contained"
            sx={{
              borderRadius: "55px",
              backgroundColor:
                speaker === "nes_c_mikyung"
                  ? "#977CC9"
                  : "rgba(151, 151, 151, 0.1)",
              color: speaker === "nes_c_mikyung" ? "#ffffff" : "#323232",
              gridArea: "b",
              fontSize: "calc(1.5vw + 1.5vh)",
              height: "26vh",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#977CC9",
                color: "white",
              },
              "&:active": {
                backgroundColor: "#977CC9",
                color: "white",
              },
            }}
          >
            성인 여성
          </Button>
          <Button
            onClick={() => handleButtonClick("/mp3/Hajoon.mp3", "nhajun")}
            variant="Outlined"
            sx={{
              borderRadius: "55px",
              backgroundColor:
                speaker === "nhajun" ? "#977CC9" : "rgba(151, 151, 151, 0.1)",
              color: speaker === "nhajun" ? "#ffffff" : "#323232",
              gridArea: "c",
              fontSize: "calc(1.5vw + 1.5vh)",
              height: "26vh",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#977CC9",
                color: "white",
              },
              "&:active": {
                backgroundColor: "#977CC9",
                color: "white",
              },
            }}
          >
            남자 아이
          </Button>
          <Button
            onClick={() => handleButtonClick("/mp3/Dain.mp3", "ndain")}
            variant="Outlined"
            sx={{
              borderRadius: "55px",
              backgroundColor:
                speaker === "ndain" ? "#977CC9" : "rgba(151, 151, 151, 0.1)",
              color: speaker === "ndain" ? "#ffffff" : "#323232",
              gridArea: "d",
              fontSize: "calc(1.5vw + 1.5vh)",
              height: "26vh",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#977CC9",
                color: "white",
              },
              "&:active": {
                backgroundColor: "#977CC9",
                color: "white",
              },
            }}
          >
            여자 아이
          </Button>
          <Button
            onClick={handleSave}
            variant="Outlined"
            component={Link}
            to="/splashImage/custom/voiceChoice/speedChoice"
            sx={{
              height: "15vh",
              backgroundColor: "#BEBEBE",
              borderRadius: "55px",
              gridArea: "e",
              color: "black",
              fontSize: "calc(2vw + 2vh)",
              marginBottom: "80px",
              marginTop: "17px",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#977CC9", // hover color
                color: "white",
              },
              "&:active": {
                backgroundColor: "#977CC9", // active color
                color: "white",
              },
            }}
          >
            저장하기
          </Button>
        </Box>
      </Box>
      <audio ref={audioRef} src={audioSource} hidden />
    </>
  );
};

export default VoiceChoice;
