import { RobotIcon } from "../../../../components/icons/robot-icon";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import { useState } from "react";

const listSize = new Array(10).fill("");

type Props = {
  clickHandler: (id: string) => void;
};

const AvatarList = ({ clickHandler }: Props) => {
  const [selectedId, setSelectedId] = useState<string>('0');

  const onClickHandler = (id: string) => {
    setSelectedId(id);
    clickHandler(id);
  };

  return (
    <UnorderedList data-testid="avatar-list" display="flex" flexWrap="wrap">
      {listSize.length &&
        listSize.map((_, index) => {
          const id = (index + 1).toString();
          const isSelected = selectedId === id;
          return (
            <ListItem
              m="2"
              onClick={() => onClickHandler(id)}
              listStyleType="none"
              key={id}
              id={id}
              data-testid={`avatar-${id}`}
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

export type { Props };

export { AvatarList };
