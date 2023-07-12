import {
  Avatar,
  useToken,
} from "@chakra-ui/react";
import type { AvatarProps } from '@chakra-ui/react';
type Props = AvatarProps & {
  iconId?: string;
  isSelected?: boolean;
}

const RobotIcon = ({ iconId = '1', isSelected = false, ...rest }: Props) => {
  const [outline, boxShadow, unSelected] = useToken("colors", [
    "red.400",
    "purple.700",
    "yellow.400",
  ]);
  return (
    <>
      {!isSelected && (
        <Avatar
          width="100px"
          height="auto"
          name={iconId.toString()}
          outline="4px solid"
          outlineColor={unSelected}
          {...rest}
          src={`/icons/icon-${iconId}.svg`}
        />
      )}
      {isSelected && (
        <Avatar
          width="100px"
          height="auto"
          name={iconId}
          {...rest}
          outline="4px solid"
          outlineColor={outline}
          boxShadow={`0 0 30px ${boxShadow}`}
          src={`/icons/icon-${iconId}.svg`}
        />
      )}
    </>
  );
};

export { RobotIcon };
