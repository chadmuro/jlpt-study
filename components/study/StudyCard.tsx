import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { View } from "tamagui";

import { StudyCardDetails } from "./StudyCardDetails";

interface Props {
  cardData: {
    id: number;
    kanji: string;
    japanese: string;
    english: string;
  };
  showAnswer: boolean;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function StudyCard({
  cardData,
  showAnswer,
  setShowAnswer
}: Props) {
  const [hiddenText, setHiddenText] = useState(false);
  const rotate = useSharedValue(0);
  const frontAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 600 })
        }
      ]
    };
  });

  const backAnimatedStyles = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${rotateValue}deg`, { duration: 600 })
        }
      ]
    };
  });

  useEffect(() => {
    if (cardData) {
      if (rotate.value === 1) {
        setHiddenText(true);
        rotate.value = 0;
        setTimeout(() => {
          setHiddenText(false);
        }, 300);
      }
    }
  }, [cardData]);

  function flipShowAnswer() {
    rotate.value = 1;
    setShowAnswer(true);
  }

  function flipHideAnswer() {
    rotate.value = 0;
    setShowAnswer(false);
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.frontCard, frontAnimatedStyles]}>
        <StudyCardDetails
          hiddenText={hiddenText}
          flipCard={showAnswer ? flipHideAnswer : flipShowAnswer}
          cardData={cardData}
          isFront={true}
        />
      </Animated.View>
      <Animated.View style={[styles.backCard, backAnimatedStyles]}>
        <StudyCardDetails
          hiddenText={hiddenText}
          flipCard={showAnswer ? flipHideAnswer : flipShowAnswer}
          cardData={cardData}
          isFront={false}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative"
  },
  frontCard: {
    position: "absolute",
    backfaceVisibility: "hidden",
    width: "100%"
  },
  backCard: {
    position: "absolute",
    backfaceVisibility: "hidden",
    width: "100%"
  }
});
