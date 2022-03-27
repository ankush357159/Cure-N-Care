import React from "react";
import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { styled } from "@mui/system";

const Container = styled("Box")({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
  border: "1px solid #b3aead",
  borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
  borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
  "&:hover": {
    boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
    transform: "scale(1.1) ",
    transition: " all 0.8s ease-in-out",
  },
});

const Services = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mx: "auto",
        mt: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 16, sm: 18, md: 28, lg: 32, xl: 48 },
          fontWeight: 600,
          mb: 5,
        }}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Link href={`/backpain`} passHref={true}>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
              border: "1px solid #b3aead",
              borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              "&:hover": {
                boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
                transform: "scale(1.1) ",
                transition: " all 0.8s ease-in-out",
              },
            }}
          >
            <CardMedia
              component='img'
              src={"/back-pain.jpg"}
              alt='New Clinic'
              sx={{
                height: { xs: 75, sm: 85, md: 100, lg: 100, xl: 150 },
                width: { xs: 105, sm: 110, md: 150, lg: 150, xl: 200 },
                objectFit: "fill",
                position: "relative",
                loading: "lazy",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 18, lg: 20, xl: 26 },
                background: "#5175ed",
              }}
            >
              Back Pain
            </Typography>
          </Box>
        </Link>
        <Link href={`/neckpain`} passHref={true}>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
              border: "1px solid #b3aead",
              borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              "&:hover": {
                boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
                transform: "scale(1.1) ",
                transition: " all 0.8s ease-in-out",
              },
            }}
          >
            <CardMedia
              component='img'
              src={"/neck-pain.jpg"}
              alt='New Clinic'
              sx={{
                height: { xs: 75, sm: 85, md: 100, lg: 100, xl: 150 },
                width: { xs: 105, sm: 110, md: 150, lg: 150, xl: 200 },
                objectFit: "fill",
                position: "relative",
                loading: "lazy",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 18, lg: 20, xl: 26 },
                background: "#5175ed",
              }}
            >
              Neck Pain
            </Typography>
          </Box>
        </Link>
        <Link href={`/jointpain`} passHref={true}>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
              border: "1px solid #b3aead",
              borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              "&:hover": {
                boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
                transform: "scale(1.1) ",
                transition: " all 0.8s ease-in-out",
              },
            }}
          >
            <CardMedia
              component='img'
              src={"/joint-problem.jpg"}
              alt='New Clinic'
              sx={{
                height: { xs: 75, sm: 85, md: 100, lg: 100, xl: 150 },
                width: { xs: 105, sm: 110, md: 150, lg: 150, xl: 200 },
                objectFit: "fill",
                position: "relative",
                loading: "lazy",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 18, lg: 20, xl: 26 },
                background: "#5175ed",
              }}
            >
              Joint Pain
            </Typography>
          </Box>
        </Link>

        <Link href={`/arthritis`} passHref={true}>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
              border: "1px solid #b3aead",
              borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              "&:hover": {
                boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
                transform: "scale(1.1) ",
                transition: " all 0.8s ease-in-out",
              },
            }}
          >
            <CardMedia
              component='img'
              src={"/arthritis.jpg"}
              alt='New Clinic'
              sx={{
                height: { xs: 75, sm: 85, md: 100, lg: 100, xl: 150 },
                width: { xs: 105, sm: 110, md: 150, lg: 150, xl: 200 },
                objectFit: "fill",
                position: "relative",
                loading: "lazy",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 18, lg: 20, xl: 26 },
                background: "#5175ed",
              }}
            >
              Arthritis
            </Typography>
          </Box>
        </Link>

        <Link href={`/shoulderpain`} passHref={true}>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
              border: "1px solid #b3aead",
              borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              "&:hover": {
                boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
                transform: "scale(1.1) ",
                transition: " all 0.8s ease-in-out",
              },
            }}
          >
            <CardMedia
              component='img'
              src={"/shoulder-pain.jpg"}
              alt='New Clinic'
              sx={{
                height: { xs: 75, sm: 85, md: 100, lg: 100, xl: 150 },
                width: { xs: 105, sm: 110, md: 150, lg: 150, xl: 200 },
                objectFit: "fill",
                position: "relative",
                loading: "lazy",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 18, lg: 20, xl: 26 },
                background: "#5175ed",
              }}
            >
              Shoulder Pain
            </Typography>
          </Box>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "center",
          mt: { xs: 3, sm: 4, md: 5, lg: 5, xl: 6 },
        }}
      >
        <Link href={`/tendonitis`} passHref={true}>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
              border: "1px solid #b3aead",
              borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              "&:hover": {
                boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
                transform: "scale(1.1) ",
                transition: " all 0.8s ease-in-out",
              },
            }}
          >
            <CardMedia
              component='img'
              src={"/tendonitis.jpg"}
              alt='New Clinic'
              sx={{
                height: { xs: 75, sm: 85, md: 100, lg: 100, xl: 150 },
                width: { xs: 105, sm: 110, md: 150, lg: 150, xl: 200 },
                objectFit: "fill",
                position: "relative",
                loading: "lazy",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 18, lg: 20, xl: 26 },
                background: "#5175ed",
              }}
            >
              Tendonitis
            </Typography>
          </Box>
        </Link>

        <Link href={`/stroke`} passHref={true}>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
              border: "1px solid #b3aead",
              borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              "&:hover": {
                boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
                transform: "scale(1.1) ",
                transition: " all 0.8s ease-in-out",
              },
            }}
          >
            <CardMedia
              component='img'
              src={"/stroke-rehab.png"}
              alt='New Clinic'
              sx={{
                height: { xs: 75, sm: 85, md: 100, lg: 100, xl: 150 },
                width: { xs: 105, sm: 110, md: 150, lg: 150, xl: 200 },
                objectFit: "fill",
                position: "relative",
                loading: "lazy",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 18, lg: 20, xl: 26 },
                background: "#5175ed",
              }}
            >
              Stroke Rehab
            </Typography>
          </Box>
        </Link>

        <Link href={`/diabetes`} passHref={true}>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
              border: "1px solid #b3aead",
              borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              "&:hover": {
                boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
                transform: "scale(1.1) ",
                transition: " all 0.8s ease-in-out",
              },
            }}
          >
            <CardMedia
              component='img'
              src={"/diabetes.jpg"}
              alt='New Clinic'
              sx={{
                height: { xs: 75, sm: 85, md: 100, lg: 100, xl: 150 },
                width: { xs: 105, sm: 110, md: 150, lg: 150, xl: 200 },
                objectFit: "fill",
                position: "relative",
                loading: "lazy",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 18, lg: 20, xl: 26 },
                background: "#5175ed",
              }}
            >
              Diabetes
            </Typography>
          </Box>
        </Link>

        <Link href={`/spinalcord-injury`} passHref={true}>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
              border: "1px solid #b3aead",
              borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              "&:hover": {
                boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
                transform: "scale(1.1) ",
                transition: " all 0.8s ease-in-out",
              },
            }}
          >
            <CardMedia
              component='img'
              src={"/spinal-chord-injury.jpg"}
              alt='New Clinic'
              sx={{
                height: { xs: 75, sm: 85, md: 100, lg: 100, xl: 150 },
                width: { xs: 105, sm: 110, md: 150, lg: 150, xl: 200 },
                objectFit: "fill",
                position: "relative",
                loading: "lazy",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 18, lg: 20, xl: 26 },
                background: "#5175ed",
              }}
            >
              Spinal Injury
            </Typography>
          </Box>
        </Link>

        <Link href={`/spasticity`} passHref={true}>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              mx: { xs: 0.5, sm: 0.75, md: 2, lg: 2, xl: 3 },
              border: "1px solid #b3aead",
              borderBottomRightRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              borderBottomLeftRadius: { xs: 3, sm: 4, md: 5, lg: 6, xl: 7 },
              "&:hover": {
                boxShadow: "5px 2px 8px 1px rgba(142,122,222,0.75)",
                transform: "scale(1.1) ",
                transition: " all 0.8s ease-in-out",
              },
            }}
          >
            <CardMedia
              component='img'
              src={"/spasticity.jpg"}
              alt='New Clinic'
              sx={{
                height: { xs: 75, sm: 85, md: 100, lg: 100, xl: 150 },
                width: { xs: 105, sm: 110, md: 150, lg: 150, xl: 200 },
                objectFit: "fill",
                position: "relative",
                loading: "lazy",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 12, sm: 14, md: 18, lg: 20, xl: 26 },
                background: "#5175ed",
              }}
            >
              Spasticity
            </Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Services;
