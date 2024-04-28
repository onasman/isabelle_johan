import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { google } from "googleapis";
import { env } from "~/env";

const sheetId = "1lDSUV700fooGLsdM4BYYtC2n7FEHekoaIOu-Ten8BCw";
const tabName = "rsvp";
const range = "A:H";

export const rsvpRouter = createTRPCRouter({
  addRSVP: publicProcedure
    .input(
      z.array(
        z.object({
          firstname: z.string().min(1),
          lastname: z.string().min(1),
          phone: z.string().min(1),
          email: z.string().min(1),
          allergies: z.string().min(1),
          comment: z.string().nullable(),
        }),
      ),
    )

    .mutation(async ({ input }) => {
      const auth = new google.auth.GoogleAuth({
        credentials: env.GOOGLE_CREDENTIALS,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
      const googleSheetClient = google.sheets("v4");

      await googleSheetClient.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: `${tabName}!${range}`,
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        auth,
        requestBody: {
          majorDimension: "ROWS",
          values: input.map((obj) => Object.values(obj)),
        },
      });
      return "Success";
    }),
});
