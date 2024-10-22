import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Blog Platform</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        {children}
      </Container>
    </>
  );
};

export default Layout;
