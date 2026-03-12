import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <Accordion
      disableGutters
      elevation={0}
      square
      sx={{
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        overflow: "hidden",
        backgroundColor: "rgba(255,255,255,0.025)",
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        "&:before": {
          display: "none",
        },
        "&.Mui-expanded": {
          margin: 0,
          borderColor: "rgba(255,255,255,0.12)",
          backgroundColor: "rgba(255,255,255,0.04)",
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreRoundedIcon
            sx={{
              color: "rgba(241,245,249,0.7)",
              transition: "transform 220ms ease",
            }}
          />
        }
        sx={{
          px: { xs: 2.5, md: 3 },
          py: { xs: 1, md: 1.25 },
          minHeight: 78,
          "& .MuiAccordionSummary-content": {
            my: 1.4,
            mr: 2,
          },
          "& .MuiAccordionSummary-content.Mui-expanded": {
            my: 1.4,
          },
          "&.Mui-expanded": {
            minHeight: 78,
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            pr: 2,
            lineHeight: 1.5,
            color: "rgba(248,250,252,0.96)",
            fontSize: { xs: "1rem", md: "1.05rem" },
            letterSpacing: "-0.01em",
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          px: { xs: 2.5, md: 3 },
          pt: 0,
          pb: { xs: 2.75, md: 3 },
        }}
      >
        <Typography
          sx={{
            maxWidth: "58rem",
            color: "text.secondary",
            lineHeight: 1.95,
            fontSize: { xs: "0.97rem", md: "1rem" },
          }}
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}