import {
  Edit,
  Instagram,
  Mail,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Button,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
} from "@mui/joy";
import { Box, Typography } from "@mui/material";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setModifyFooter } from "../reducers/HomeSlice";
export default function Footer() {
  const dispatch = useDispatch();
  const { footer } = useSelector((state) => state.footer);
  const { data } = useSelector((state) => state.header);

  const { handleSubmit, register } = useForm();
  const {
    youtube,
    instagram,
    twitter,
    companyAddress,
    companyEmail,
    companyNo,
    copyrightSentence,
  } = footer;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const modifyHeader = (data) => {
    dispatch(
      setModifyFooter({
        value: data,
      })
    );

    setOpen(false);
  };

  return (
    <>
      <Suspense>
        {" "}
        <Box
          sx={{
            position: "relative",
            width: "auto",
            height: "30vh",
            padding: "2vmax",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)),  url(${data.background}) `,
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              justifyContent: "center",
              width: "100vw",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,

              marginTop: "2vmax",
              marginBottom: "1vmax",
            }}
          >
            <Typography
              color="initial"
              sx={{
                color: "#FFF",
                fontFamily: "Inria Serif",
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              Address :{" "}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                color: "#FFF",
                fontFamily: "Inria Serif",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "normal",
              }}
            >
              {companyAddress}
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                }}
                variant="body1"
                color="initial"
              >
                <Phone /> {companyNo}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                }}
                variant="body1"
                color="initial"
              >
                <Mail />
                {companyEmail}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: { md: "row", xs: "column" },
                mx: "auto",
                gap: 2,
                marginTop: ".5vmax",
                width: "50%",
              }}
              className="Social-Media Container"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  color: "white",
                }}
              >
                <YouTube sx={{ fontSize: 30, color: "white" }} />@{youtube}
                <Box sx={{ fontSize: 20, display: { md: "flex", xs: "none" } }}>
                  |
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  color: "white",
                }}
              >
                <Instagram sx={{ fontSize: 30, color: "white " }} />@{instagram}
                <Box sx={{ fontSize: 20, display: { md: "flex", xs: "none" } }}>
                  |
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  color: "white",
                }}
              >
                <Twitter sx={{ color: "white", fontSize: 30 }} />@{twitter}
              </Box>
            </Box>
          </Box>

          <Edit
            onClick={handleOpen}
            color="inherit"
            sx={{
              position: "absolute",
              top: ".3vmax",
              left: { md: "95vw", xs: "85vw" },
              fontSize: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              color: "black",
              float: "inline-end",
              bgcolor: `#fff`,
              padding: ".5vmax",
              cursor: "pointer",
              opacity: 1,
              margin: "1vmax",
            }}
          />

          {/* Modal  */}
        </Box>
      </Suspense>
      <Typography
        sx={{
          color: "#000",
          fontFamily: "Inria Serif",
          textAlign: "center",
          fontSize: { md: "15px", xs: "18px" },
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "normal",
        }}
      >
        {" "}
        {copyrightSentence}
      </Typography>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog size="lg">
          <ModalClose variant="plain" sx={{ mb: 1 }} />
          <DialogTitle
            sx={{ fontSize: 25, textAlign: "center", mt: 2, mx: "auto" }}
          >
            Update Footer
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{
              backgroundColor: "whitesmoke",
              padding: "8px",
              width: "fit-content",
            }}
          >
            Enter the following details to update Footer
          </DialogContent>
          <Grid
            container
            sx={{ mx: 0 }}
            spacing={2}
            component={"form"}
            onSubmit={handleSubmit(modifyHeader)}
          >
            <Grid xs={12} md={4}>
              <FormControl>
                <FormLabel>Youtube Username</FormLabel>
                <Input
                  defaultValue={youtube}
                  {...register("youtube", { required: true })}
                  color="neutral"
                  autoFocus
                  placeholder="Youtube UserName"
                  fullWidth={false}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} md={4}>
              <FormControl>
                <FormLabel>Instagram Username</FormLabel>
                <Input
                  defaultValue={instagram}
                  {...register("instagram", { required: true })}
                  color="neutral"
                  autoFocus
                  placeholder="instagram username"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} md={4}>
              <FormControl>
                <FormLabel>Twitter Username</FormLabel>
                <Input
                  defaultValue={twitter}
                  {...register("twitter", { required: true })}
                  color="neutral"
                  autoFocus
                  placeholder="twitter username"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>

            <Grid xs={12}>
              <FormControl>
                <FormLabel>Company Copyright Line</FormLabel>
                <Input
                  defaultValue={copyrightSentence}
                  {...register("copyrightSentence", { required: true })}
                  color="neutral"
                  autoFocus
                  placeholder="Enter Copyright Line"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl>
                <FormLabel>Company Address</FormLabel>
                <Input
                  defaultValue={companyAddress}
                  {...register("companyAddress", { required: true })}
                  color="neutral"
                  autoFocus
                  placeholder="Enter company address"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl>
                <FormLabel>Company Email</FormLabel>
                <Input
                  defaultValue={companyEmail}
                  {...register("companyEmail", { required: true })}
                  color="neutral"
                  autoFocus
                  placeholder="Enter company email"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl>
                <FormLabel>Company Phone Number</FormLabel>
                <Input
                  defaultValue={companyNo}
                  {...register("companyNo", { required: true })}
                  color="neutral"
                  autoFocus
                  placeholder="Enter company phone"
                  id="modal-modal-description"
                />
              </FormControl>
            </Grid>
            <Grid xs={12} sx={{ textAlign: "center" }}>
              <Button
                color="neutral"
                sx={{
                  bgcolor: "#000",
                  color: "#fff",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  width: "40%",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </ModalDialog>
      </Modal>
    </>
  );
}
