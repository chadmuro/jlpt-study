import { withObservables } from "@nozbe/watermelondb/react";
import { Text } from "tamagui";

import KanjiStudy from "../../model/KanjiStudy";

const enhance = withObservables(["study"], ({ study }) => ({
  study
}));

interface Props {
  study: KanjiStudy;
  text: string;
}

const RemainingText = ({ study, text }: Props) => {
  const ids = study ? JSON.parse(study.kanjiIds) : [];
  return (
    <Text>
      {ids.length} {text}
    </Text>
  );
};

const EnhancedRemainingText = enhance(RemainingText);
export default EnhancedRemainingText;
