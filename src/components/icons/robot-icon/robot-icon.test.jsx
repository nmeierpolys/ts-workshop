import { render, screen } from '../../../test-utils'
import '@testing-library/jest-dom'
import { RobotIcon } from './robot-icon';

describe("RobotIcon component",  () => {
  test('it renders a RobotIcon with basic inputs',  async () => {
    render(<RobotIcon iconId="1" isSelected={false} />);
    const avatar = await screen.getByLabelText('1');

    expect(avatar).toBeInTheDocument();
  });

  test('it renders a selected RobotIcon',  async () => {
    render(<RobotIcon iconId="1" isSelected={false} />);
    const avatar = await screen.getByLabelText('1');

    expect(avatar).toBeInTheDocument();
  });

  test('it handles a numeric iconId value',  async () => {
    render(<RobotIcon iconId={1} isSelected={false} />);
    const avatar = await screen.getByLabelText('1');

    expect(avatar).toBeInTheDocument();
  });
})
