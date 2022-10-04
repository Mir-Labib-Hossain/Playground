// src: https://www.youtube.com/watch?v=DgahQ6W5shQ

import Box from "./components/Box";
import Grid from "./components/Grid";
import GridRuler from "./components/GridRuler";

const App = () => {
  return (
    <div style={{ margin: "16px", position: "relative", height: "100vh" }}>
      <GridRuler spacing="sm" />
      <Grid container spacing="sm" justifyContent="space-between" alignItems="center" style={{ height: "100%", border: "2px solid red" }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box - 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box - 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box - 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box - 4</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
