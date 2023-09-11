import { useState } from "react";
import { Alert } from "react-native";
import { Button, H1, H2, Input, Text, YStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { SafeAreaView } from "../../components/SafeAreaView";
import { useSession } from "../../contexts/sessionContext";
import { supabase } from "../../utils/supabase";

export default function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { session } = useSession();
  console.log(session);

  if (session) {
    return (
      <SafeAreaView>
        <MyStack>
          <YStack>
            <H1>HI</H1>
            <Button onPress={() => supabase.auth.signOut()}>Sign out</Button>
          </YStack>
        </MyStack>
      </SafeAreaView>
    );
  }

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
        <H2>Login</H2>
        <YStack>
          <Text>Login to keep track of your progress</Text>
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
            onPress={() => signInWithEmail()}
          >
            Sign in
          </Button>
          <Button
            disabled={loading}
            onPress={() => signUpWithEmail()}
          >
            Sign up
          </Button>
        </YStack>
      </MyStack>
    </SafeAreaView>
  );
}
