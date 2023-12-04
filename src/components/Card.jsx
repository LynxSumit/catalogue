/* eslint-disable react/prop-types */
import { AspectRatio, Box, Button, ButtonGroup, Card, CardOverflow, Chip, DialogContent, DialogTitle, Divider, FormControl, FormLabel, Input, Modal, ModalClose, ModalDialog, Stack, SvgIcon, styled } from "@mui/joy";
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
    <Card sx={{ minHeight: "280px", width: "auto", boxShadow : '2px', filter : 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25))' }}>

  
    <CardOverflow>
      <AspectRatio minHeight={300} maxHeight={400} sx={{height : '100%', boxShadow : '0px 1px 1px 0px rgba(0, 0, 0, 0.25)'}}>
      
        <img
          style={{ height: "100%"}}
          src={img}
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
        

      </AspectRatio>
   <Edit  onClick={handleOpen}  sx={{fontSize : 20,padding : '.5vmax', marginTop : '.2vmax',marginBottom : '-1vmax',  zIndex : 112,alignSelf : 'flex-end', borderRadius : '50%', cursor : 'pointer', background : 'whitesmoke'}}/>

      
      </CardOverflow>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
         
        }}
      >
    


        <Typography level="title-lg" sx={{margin : '.5vmax'}} textColor="#000">
          {title}
        </Typography>

        <Typography
          sx={{
            transition: "ease-in",
            transitionDuration: ".8s",
            msTransitionProperty: "all",
            color : 'black',
            margin : ' 0px .5vmax 1vmax'
          }}
          level="body-sm"
         
          
        >
          {desc}
        </Typography>
        <Button variant="solid" color="neutral"   sx={{bgcolor : '#000', color : '#fff', padding : '.9vmax', filter : 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'}}>Price : {price}</Button>

      </CardContent>
    </Card>
   
    <Modal 
    open={open} onClose={() => setOpen(false)}>
            <ModalDialog >
            {/* <ModalClose variant="plain" sx={{ mb: 1 }} /> */}
            <ModalClose variant="plain" sx={{ mb  :1 }} />
              <DialogTitle sx={{ fontSize: 25, display : 'flex', justifyContent : 'center', mt : 2  }}>Update Card</DialogTitle>
              <Divider/>
              <DialogContent sx={{ backgroundColor : 'whitesmoke', padding : '.5vmax', width : 'fit-content' }}>Fill data to update Card</DialogContent>
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
                   {...register("productImage", {required: true})}
                     
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
    </>
  );
}
