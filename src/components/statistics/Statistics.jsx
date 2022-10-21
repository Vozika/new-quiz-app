import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";

const style = {
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(90%, 700px)",
  bgcolor: "background.paper",
  border: "1px solid #bdbdbd",
  boxShadow: 24,
  p: 3,
};

const Statistics = () => {
  const { interfaceText } = useSelector((store) => store.options);

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData(interfaceText.All_TIME_RIGHT_ANSWERS, localStorage.rightAnswers),
    createData(interfaceText.All_TIME_WRONG_ANSWERS, localStorage.wrongAnswers),
    createData(
      interfaceText.RIGHT_ANSWERS_ON_AVERAGE,
      Number(localStorage.rightAnswers) > 0 &&
        Math.round(
          (Number(localStorage.rightAnswers) /
            (Number(localStorage.rightAnswers) +
              Number(localStorage.wrongAnswers))) *
            100
        )
    ),
    createData(interfaceText.LONGEST_IRON_MAN, localStorage.ironManStreak),
    createData(interfaceText.IRON_MAN_ATTEMPTS, localStorage.ironManAttempts),
    createData(interfaceText.OPTION5050_USED, localStorage.option5050),
    createData(interfaceText.GAMES_FINISHED, localStorage.gamesFinished),
  ];

  return (
    <>
      <Box sx={style}>
        <Typography variant="h3">{interfaceText.STATISTICS}</Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "1rem" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: "1rem" }}>
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Statistics;
