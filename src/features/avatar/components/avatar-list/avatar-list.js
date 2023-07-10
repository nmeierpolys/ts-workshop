import { RobotIcon } from "../../../../components/icons/robot-icon";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { useState } from "react";

const listSize = new Array(10).fill("");

const AvatarList = ({ clickHandler }) => {
  const [selectedId, setSelectedId] = useState(0);

  const onClickHandler = (id) => {
    setSelectedId(id);
    clickHandler(id);
  };

  return (
    <UnorderedList display="flex" flexWrap="wrap">
      {listSize.length &&
        listSize.map((_, index) => {
          const id = index + 1;
          const isSelected = Number(selectedId) === id;
          return (
            <ListItem
              m="2"
              onClick={() => onClickHandler(id)}
              listStyleType="none"
              key={id}
              id={id}
            >
              <RobotIcon
                iconId={id}
                isSelected={isSelected}
                _hover={{ transform: "scale(1.1)" }}
              />
            </ListItem>
          );
        })}
    </UnorderedList>
  );
};

export { AvatarList };
