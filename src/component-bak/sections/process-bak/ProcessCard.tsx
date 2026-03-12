import { Box, Stack, Typography } from "@mui/material";
import SouthEastRoundedIcon from "@mui/icons-material/SouthEastRounded";

type ProcessCardProps = {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
};

export function ProcessCard({
  number,
  title,
  description,
  isLast = false,
}: ProcessCardProps) {
  return (
    <Box className="relative">
      {!isLast && (
        <Box
          aria-hidden="true"
          className="absolute left-6 top-14 hidden w-px sm:block"
          sx={{
            height: "calc(100% + 12px)",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.14), rgba(255,255,255,0.05), transparent)",
          }}
        />
      )}

      <Box
        className="group relative rounded-3xl border p-5 sm:p-6"
        sx={{
          borderColor: "rgba(255,255,255,0.08)",
          backgroundColor: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(10px)",
          transition: "all 220ms ease",
          boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
          "&:hover": {
            borderColor: "rgba(255,255,255,0.14)",
            backgroundColor: "rgba(255,255,255,0.045)",
            transform: "translateY(-2px)",
            boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
          },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 2.5 }}
          alignItems={{ xs: "flex-start", sm: "flex-start" }}
        >
          <Box className="shrink-0">
            <Box
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              sx={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "0.82rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                {number}
              </Typography>
            </Box>
          </Box>

          <Box className="min-w-0 flex-1">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={2}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "rgba(255,255,255,0.96)",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                  },
                }}
              >
                {title}
              </Typography>

              <SouthEastRoundedIcon
                sx={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.22)",
                  transition: "transform 220ms ease, color 220ms ease",
                  ".group:hover &": {
                    transform: "translate(2px, -2px)",
                    color: "rgba(255,255,255,0.45)",
                  },
                }}
              />
            </Stack>

            <Typography
              sx={{
                mt: 1.5,
                maxWidth: "60ch",
                fontSize: { xs: "0.94rem", sm: "0.98rem" },
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.64)",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}