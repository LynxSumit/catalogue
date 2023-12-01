/* eslint-disable react/prop-types */
import { Button, Card, Chip, DialogContent, DialogTitle, FormControl, FormLabel, Input, Modal, ModalDialog, Stack, SvgIcon, styled } from "@mui/joy";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setModifyCard } from "../reducers/HomeSlice";
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

export default function CARD({ img, title, desc, price }) {
  const dispatch = useDispatch();
  const { card } = useSelector((state) => state.card);
 
  const {handleSubmit, register} = useForm()
  const {
    title : cardTitle,description : cardDescription,price : cardPrice
  } = card;
  
  const [open, setOpen] = useState(false);
  const handleOpen = () =>{

    setOpen(true);

  } 
  const modifyCard = (data) => {
    let {title , description , price , productImage} = data;
    
   let myProductImage = URL.createObjectURL(productImage[0])

    dispatch(
    setModifyCard({value : {title , description , price , productImage : myProductImage}})
    );
    
    setOpen(false);
  };

  return (
    <>
    <Card sx={{ minHeight: "280px", width: "auto" }}>
    <Typography  onClick={handleOpen}  sx={{zIndex : 112, textAlign : 'center', borderRadius : '50%', cursor : 'pointer', background : 'white', width : 'fit-content'}} variant="body1" color="initial"><Edit/></Typography>
      <CardCover>
   
        <img
          style={{ height: "100%" }}
          src={img}
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
        

      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />

      
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
    

        <Chip sx={{}}>Price : {price}</Chip>

        <Typography level="body-md" textColor="#fff">
          {title}
        </Typography>

        <Typography
          sx={{
            transition: "ease-in",
            transitionDuration: ".8s",
            msTransitionProperty: "all",
          }}
          level="body-sm"
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
    <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog sx={{backgroundImage : `linear-gradient(45deg , black,transparent)`}}>
              <DialogTitle sx={{fontSize : 25, textAlign : 'center', width : '100%'}}>Update Card</DialogTitle>
              <DialogContent>Fill data to update Card</DialogContent>
              <form onSubmit={handleSubmit(modifyCard)}>
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                    defaultValue={cardTitle}
                     {...register("title", {required: true})}
                      color="neutral"
                      autoFocus
                      placeholder="Title"
                      fullWidth={false}
                      
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input
                   
                    
                    defaultValue={cardDescription}
                     {...register("description", {required: true})}
                      color="neutral"
                     variant="plain"
                      placeholder="Description"
                     
                      id="modal-modal-description"
                      
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Price</FormLabel>
                    <Input
                   
                    
                    defaultValue={cardPrice}
                     {...register("price", {required: true})}
                      color="neutral"
                     variant="plain"
                      placeholder="Price"
                     
                      id="modal-modal-description"
                      
                    />
                  </FormControl>
                  <FormControl>

                  <FormLabel>Product Image</FormLabel>
                  <Button
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    variant="outlined"
                    color="warning"
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
                   {...register("productImage", {required: true})}
                     
                      type="file"
                      accept="img/*"
                    />
                  </Button>
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
