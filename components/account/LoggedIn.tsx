import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import {
  useQuery,
  useUpdateMutation
} from "@supabase-cache-helpers/postgrest-swr";
import {
  Button,
  H2,
  Input,
  Separator,
  SizableText,
  Spinner,
  YStack
} from "tamagui";

import { supabase } from "../../utils/supabase";
import { MyStack } from "../MyStack";
import { SafeAreaView } from "../SafeAreaView";

interface Props {
  session: Session;
}

export default function LoggedIn({ session }: Props) {
  const { data, error, isLoading } = useQuery(
    supabase.from("profiles").select("username").eq("id", session.user.id)
  );
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (data) {
      setUsername(data[0].username ?? "");
      setDisplayName(data[0].username ?? "User");
    }
  }, [data]);

  const { trigger: update } = useUpdateMutation(
    supabase.from("profiles"),
    ["id"],
    "username"
    // {
    //   onSuccess: () => console.log("Success!")
    // }
  );

  if (isLoading)
    return (
      <Spinner
        size="large"
        color="$red10"
      />
    );

  async function handleUsernameSave() {
    if (username.length < 3) {
      return setValidationError("Username must be at least 3 characters long");
    }

    const res = await update({ id: session.user.id, username });
    setDisplayName(res.username);
  }

  return (
    <SafeAreaView>
      <MyStack>
        <YStack space="$true">
          <H2>{`Welcome back, ${displayName}`}</H2>
          <YStack gap="$2">
            <YStack>
              <Input
                placeholder="User name"
                size="$4"
                borderWidth={2}
                value={username}
                onChangeText={(e) => {
                  setUsername(e);
                  if (e.length >= 3) {
                    setValidationError("");
                  }
                }}
                autoCapitalize="none"
                returnKeyType="done"
              />
              {validationError && (
                <SizableText
                  color="$red10"
                  size="$2"
                >
                  {validationError}
                </SizableText>
              )}
            </YStack>
            <Button onPress={handleUsernameSave}>Update user name</Button>
          </YStack>
          <Separator marginVertical={15} />
          <Button onPress={() => supabase.auth.signOut()}>Logout</Button>
        </YStack>
      </MyStack>
    </SafeAreaView>
  );
}
