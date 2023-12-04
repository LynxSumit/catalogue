import { Edit } from "@mui/icons-material";
// import { Box, Button, Grid, Input,  Modal, Paper,  Typography, styled } from '@mui/material'

import { useDispatch, useSelector } from "react-redux";
import { setModifyHeader } from "../reducers/HomeSlice";
import {
  Box,
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
  Sheet,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/joy";
import { styled } from "@mui/joy";
import { useForm } from "react-hook-form";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Header = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.header);
  const { handleSubmit, register } = useForm();
  const {
    title: headerTitle,
    subTitle: headersubTitle,
    background: headerbackground,
    backgroundColor: headerColor,
  } = data;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const modifyHeader = (data) => {
    let { title, subTitle, backgroundColor, background } = data;

    let mybackground = URL.createObjectURL(background[0]);

    dispatch(
      setModifyHeader({
        value: { title, subTitle, background: mybackground, backgroundColor },
      })
    );

    setOpen(false);
  };

  return (
    <Sheet
      sx={{
        borderRadius: "0px",
        color: `${headerColor}`,
        mb: 1,
        width: "100vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)),  url(${headerbackground}) `,
      }}
    >
      <Grid>
        <Edit
          onClick={handleOpen}
          color="inherit"
          sx={{
            fontSize: 30,
            display: { xs: "none", md: "flex" },
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
        
        <Grid container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100vw",
              height: "354px",
              flexDirection: "column",
              textAlign: "center",
              marginTop: "2vmax",
              paddingX: 2,
              // zIndex: 3000,
            }}
          >
            <Typography
              // level="h1"
              // variant="plain"
              color="primary"
              sx={{ color: `white`, fontWeight : '400', fontSize  :'60px', lineHeight : '71.94px', fontStyle : 'Inria Serif' }}
              gutterBottom
            >
              {headerTitle}
            </Typography>

            <Typography
              textOverflow={"clip"}
              sx={{ wordWrap: "break-word", color: `white`, fontSize : '22px', fontWeight : '300', fontStyle : 'Inria Serif', lineHeight : '26.38px' }}
              level="body-lg"
              color="neutral"
              paragraph
            >
              {headersubTitle}
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Button variant="subtitle1" to="#">
              <Edit
                onClick={handleOpen}
                color="inherit"
                sx={{
                  display: { xs: "block", md: "none" },
                  fontSize: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  color: "#000",
                  float: "inline-end",
                  bgcolor: `#fff`,
                  padding: ".5vmax",
                  cursor: "pointer",
                  margin: "1vmax",
                }}
              />
            </Button>
          </Box>
          <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog>
              <ModalClose variant="plain" sx={{ mb: 1 }} />
              <DialogTitle
                sx={{
                  fontSize: 25,
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                Update Header
              </DialogTitle>
              <Divider />
              <DialogContent
                sx={{
                  backgroundColor: "whitesmoke",
                  padding: ".5vmax",
                  width: "fit-content",
                }}
              >
                Fill data to update Header
              </DialogContent>
              <form onSubmit={handleSubmit(modifyHeader)}>
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      defaultValue={headerTitle}
                      {...register("title", { required: true })}
                      color="neutral"
                      autoFocus
                      placeholder="Title"
                      fullWidth={false}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>SubTitle</FormLabel>
                    <Input
                      defaultValue={headersubTitle}
                      {...register("subTitle", { required: true })}
                      color="neutral"
                      autoFocus
                      placeholder="Subtitle"
                      fullWidth={false}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Enter Color Code for Header</FormLabel>
                    <Input
                      defaultValue={headerColor}
                      {...register("backgroundColor", { required: true })}
                      color="neutral"
                      autoFocus
                      placeholder="Color Code"
                      id="modal-modal-description"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Background Image</FormLabel>
                    <Button
                      component="label"
                      role={undefined}
                      tabIndex={-1}
                      variant="outlined"
                      color="neutral"
                      startDecorator={
                        <SvgIcon>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                            />
                          </svg>
                        </SvgIcon>
                      }
                    >
                      Upload a file
                      <VisuallyHiddenInput
                        {...register("background", { required: true })}
                        type="file"
                        accept="img/*"
                      />
                    </Button>
                  </FormControl>
                  <Button color="neutral" type="submit" sx={{bgcolor : '#000', color : '#fff', padding : '.9vmax', filter : 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}>
                    Submit
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
        </Grid>
      </Grid>
    </Sheet>
  );
};

export default Header;
