import { useState } from "react";
import { Alert } from "react-native";
import { Button, H2, Input, Text, XStack, YStack } from "tamagui";

import { supabase } from "../../utils/supabase";
import { MyStack } from "../MyStack";
import { SafeAreaView } from "../SafeAreaView";

export default function LoggedOut() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <SafeAreaView>
      <MyStack justifyContent="flex-start">
        <H2>{isLoginPage ? "Login" : "Register"}</H2>
        <YStack gap="$2">
          <Text>
            {isLoginPage
              ? "Login to keep track of your progress"
              : "Create an account to keep track of your progress"}
          </Text>
          <Input
            placeholder="Email"
            size="$4"
            borderWidth={2}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <Input
            placeholder="Password"
            size="$4"
            borderWidth={2}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <Button
            disabled={loading}
            onPress={isLoginPage ? signInWithEmail : signUpWithEmail}
          >
            {isLoginPage ? "Login" : "Register"}
          </Button>
          <XStack>
            <Text paddingRight="$2">
              {isLoginPage
                ? "Don't have an account?"
                : "Already have an account?"}
            </Text>
            <Text
              color="$red10"
              textDecorationLine="underline"
              onPress={() => setIsLoginPage(!isLoginPage)}
            >
              {isLoginPage ? "Register" : "Login"}
            </Text>
          </XStack>
        </YStack>
      </MyStack>
    </SafeAreaView>
  );
}
