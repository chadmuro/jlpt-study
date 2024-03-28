import { withObservables } from "@nozbe/watermelondb/react";
import { Text } from "tamagui";

import GrammarStudy from "../../model/GrammarStudy";

const enhance = withObservables(["study"], ({ study }) => ({
  study
}));

interface Props {
  study: GrammarStudy;
  text: string;
}

const RemainingText = ({ study, text }: Props) => {
  const ids = study ? JSON.parse(study.grammarIds) : [];
  return (
    <Text>
      {ids.length} {text}
    </Text>
  );
};

const EnhancedRemainingText = enhance(RemainingText);
export default EnhancedRemainingText;
