
import { Flex, IconButton, ButtonGroup } from "@chakra-ui/react";
import { EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { DEFAULT_AVATAR_ID } from "./constants";
import { RobotIcon } from "../../components/icons/robot-icon";
import { AvatarList } from "./components/avatar-list";

const Avatar = () => {
  const [avatarId, setAvatar] = useState(DEFAULT_AVATAR_ID);
  const [isEditMode, setIsEditMode] = useState(false);

  const onEditHandler = () => {
    setIsEditMode(() => !isEditMode);
  };

  const formHandler = (updatedAvatar) => {
    setAvatar(updatedAvatar);
  };

  return (
    <Flex direction="column" m="7">
      <Flex justifyContent="end">
        {!isEditMode && (
          <IconButton data-testid="edit-button" m="1" onClick={onEditHandler} icon={<EditIcon />} />
        )}
        {isEditMode && (
          <ButtonGroup>
            <IconButton data-testid="save-button" m="1" onClick={onEditHandler} icon={<CheckIcon />} />
            <IconButton data-testid="cancel-button" m="1" onClick={onEditHandler} icon={<CloseIcon />} />
          </ButtonGroup>
        )}
      </Flex>
      <Flex alignItems="center" direction="column">
        {!isEditMode && <RobotIcon data-testid="avatar" iconId={avatarId} />}
        {isEditMode && <AvatarList data-testid="avatar-list" clickHandler={formHandler} />}
      </Flex>
    </Flex>
  );
};

export { Avatar };
