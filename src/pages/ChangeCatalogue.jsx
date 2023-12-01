import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLayout } from "../reducers/layoutSlice";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardOverflow,
  Divider,
  FormControl,
  FormLabel,
  Stack,
} from "@mui/joy";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";

export default function ChangeCatalogue() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateHandler = async (data) => {
    dispatch(changeLayout({ value: data }));
    navigate("/home");
    toast.success("Filter Applied");
  };

  return (
    <>
      <Box
        sx={{
          flex: 1,
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "url(https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png)",
        }}
      >
        <Stack
          spacing={4}
          sx={{
            display: "flex",
            width: "60vw",
            maxWidth: "800px",
            mx: "auto",
            px: {
              xs: 2,
              md: 6,
            },
            py: {
              xs: 2,
              md: 3,
            },
          }}
        >
          <Card>
            <Box sx={{ mb: 1 }}>
              <Typography level="title-md" textAlign={"center"}>
                {" "}
                Select Rows & Columns for Catalogue
              </Typography>
            </Box>
            <Divider />

            <form
              style={{ justifyContent: "center" }}
              onSubmit={handleSubmit(updateHandler)}
            >
              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { md: "flex" }, my: 1 }}
              >
                <Stack
                  spacing={2}
                  sx={{ flexGrow: 1, display: "grid", placeItems: "center" }}
                >
                  <Stack spacing={1}>
                    <FormLabel>Rows</FormLabel>
                    <FormControl
                      sx={{
                        display: {
                          sm: "flex-column",
                          md: "flex-row",
                        },
                        gap: 2,
                      }}
                    >
                      <Select
                        {...register("rows", { required: true })}
                        sx={{
                          width: 240,
                          [`& .${selectClasses.indicator}`]: {
                            transition: "0.2s",
                            [`&.${selectClasses.expanded}`]: {
                              transform: "rotate(-180deg)",
                            },
                          },
                        }}
                        indicator={<KeyboardArrowDown />}
                        placeholder="no. of rows"
                        name="rows"
                        required
                      >
                        <Option value={1}>1</Option>
                        <Option value={2}>2</Option>
                        <Option value={3}>3</Option>
                        <Option value={4}>4</Option>
                        <Option value={5}>5</Option>
                        <Option value={6}>6</Option>
                      </Select>
                    </FormControl>
                    <FormControl
                      sx={{
                        display: {
                          sm: "flex-column",
                          md: "flex-row",
                        },
                        gap: 2,
                      }}
                    ></FormControl>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Columns</FormLabel>
                      <Select
                        sx={{
                          width: 240,
                          [`& .${selectClasses.indicator}`]: {
                            transition: "0.2s",
                            [`&.${selectClasses.expanded}`]: {
                              transform: "rotate(-180deg)",
                            },
                          },
                        }}
                        indicator={<KeyboardArrowDown />}
                        {...register("columns", { required: true })}
                        placeholder="no. of columns"
                        name="columns"
                        required
                      >
                        <Option value={3}>3</Option>
                        <Option value={4}>4</Option>
                        <Option value={5}>5</Option>
                        <Option value={6}>6</Option>
                        <Option value={7}>7</Option>
                        <Option value={8}>8</Option>
                        <Option value={9}>9</Option>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack>

              <CardOverflow
                sx={{ borderTop: "1px solid", borderColor: "divider" }}
              >
                <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                  <Button
                    color="neutral"
                    type="submit"
                    size="sm"
                    variant="solid"
                  >
                    Submit
                  </Button>
                </CardActions>
              </CardOverflow>
            </form>
          </Card>
        </Stack>
      </Box>

      <Box
        sx={{
          flex: 1,
          width: "100%",
        }}
      ></Box>
    </>
  );
}
