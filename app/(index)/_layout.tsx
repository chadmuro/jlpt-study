import { useEffect } from "react";
import { Q } from "@nozbe/watermelondb";
import { useDatabase } from "@nozbe/watermelondb/react";
import { SplashScreen, Stack, useRouter } from "expo-router";

import { useStudy } from "../../contexts/studyContext";
import Settings from "../../model/Settings";

export default function Layout() {
  const { loading } = useStudy();
  const router = useRouter();
  const database = useDatabase();

  useEffect(() => {
    async function initialLoad() {
      if (!loading) {
        const settings = await database
          .get<Settings>("settings")
          .query(Q.where("user_id", 1))
          .fetch();

        if (!settings.length) {
          SplashScreen.hideAsync();
          // if first load show info screen
          router.push("/info");
          await database.write(async () => {
            await database.get<Settings>("settings").create((setting) => {
              setting.userId = 1;
              setting.theme = "system";
              setting.notificationTime = null;
            });
          });
        } else {
          SplashScreen.hideAsync();
        }
      }
    }

    initialLoad();
  }, [loading]);

  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="study" />
      <Stack.Screen name="review" />
      <Stack.Screen
        name="info"
        options={{
          presentation: "modal"
        }}
      />
    </Stack>
  );
}
