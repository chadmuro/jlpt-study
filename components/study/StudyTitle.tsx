import { withObservables } from "@nozbe/watermelondb/react";
import { Text } from "tamagui";

import Study from "../../model/Study";

const enhance = withObservables(["study"], ({ study }) => ({
  study
}));

interface Props {
  study: Study;
  text: string;
}

const RemainingText = ({ study, text }: Props) => {
  const ids = study ? JSON.parse(study.vocabularyIds) : [];
  return (
    <Text>
      {ids.length} {text}
    </Text>
  );
};

const EnhancedRemainingText = enhance(RemainingText);
export default EnhancedRemainingText;
