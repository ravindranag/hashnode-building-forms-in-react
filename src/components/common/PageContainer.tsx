import { Container, ContainerProps, Stack, StackProps } from "@mui/material";

const PageContainer = (props: ContainerProps & StackProps) => (
  <Container
    component={Stack}
    {...props}
    sx={{ display: "flex", ...props.sx }}
  />
);

export default PageContainer;
