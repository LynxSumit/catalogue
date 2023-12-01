import {
  Category,
  Edit,
  Instagram,
  Mail,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Button,
  Chip,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalDialog,
  Stack,
} from "@mui/joy";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setModifyFooter } from "../reducers/HomeSlice";
export default function Footer() {
  const dispatch = useDispatch();
  const { footer } = useSelector((state) => state.footer);
  const { handleSubmit, register } = useForm();
  const { youtube, instagram, twitter } = footer;

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
      <Box
        bgcolor={"#555e68"}
        sx={{
          display: "flex",
          height: "30vh",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            margin: "auto",
          }}
        >
          <Typography variant="body1" color="initial">
            {" "}
            Address of the company Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum, quod.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
              variant="body1"
              color="initial"
            >
              <Phone /> 958749798478
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
              variant="body1"
              color="initial"
            >
              <Mail />
              info@nularksolution.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "50%",
            }}
            className="Social-Media Container"
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <YouTube color="error" sx={{ fontSize: 30, margin: 2 }} />
              <Chip>{youtube}</Chip>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Instagram sx={{ fontSize: 30, color: "white ", margin: 2 }} />
              <Chip>{instagram}</Chip>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Twitter sx={{ color: "skyblue", fontSize: 30, margin: 2 }} />
              <Chip>{twitter}</Chip>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              bgcolor: "black",
              opacity: ".4",
              padding: ".3vmax",
              cursor: "pointer",
            }}
          >
            <Category sx={{ fontSize: 35, color: "white" }} />
          </Box>
        </Box>
      </Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          height: "auto",
          backgroundColor: "black",
          opacity: ".7",
          padding: ".4vmax",
          width: "100%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        Powered By NuLark Solutions
        <Button
          onClick={handleOpen}
          sx={{
            fontSize: 30,
            margin: 1,
            background: "white",
            color: "black",
            opacity: ".6",
            borderRadius: "50%",
            padding: ".4vmax",
          }}
        >
          <Edit />
        </Button>
      </Typography>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle
            sx={{ fontSize: 25, textAlign: "center", width: "100%" }}
          >
            Update SocialMedia Usernames
          </DialogTitle>
          <DialogContent>Enter Social media usernames</DialogContent>
          <form onSubmit={handleSubmit(modifyHeader)}>
            <Stack spacing={2}>
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

              <Button color="neutral" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
