import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLayout } from "../reducers/layoutSlice";
import { Box, Button, Divider, FormControl, Stack } from "@mui/joy";
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
            flexDirection: "column",
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
          <Stack>
            <Typography
              sx={{
                color: "#000",
                padding: "1vmax",
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: "1.4vmax",
                fontWeight: 800,
              }}
            >
              {" "}
              Select Rows & Columns for Catalogue
            </Typography>

            <Divider />

            <form style={{}} onSubmit={handleSubmit(updateHandler)}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  margin: "2vmax",
                  gap: 4,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Stack>
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
                      size="lg"
                      sx={{
                        width: 340,
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
                <Stack>
                  <FormControl>
                    <Select
                      size="lg"
                      sx={{
                        width: 340,
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
                    </Select>
                  </FormControl>
                </Stack>

                <Button
                  color="neutral"
                  type="submit"
                  size="lg"
                  variant="solid"
                  sx={{
                    bgcolor: "#000",
                    color: "#fff",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                >
                  Go
                </Button>
              </Box>
            </form>
          </Stack>
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
