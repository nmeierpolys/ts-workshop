import {render, screen} from '../../test-utils'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {Avatar} from './avatar';


describe("avatar component", () => {
    test('it loads the default view',  () => {
        const {container} = render(<Avatar />);
        const editButton = screen.getByTestId('edit-button');
        const avatar = screen.getByTestId('avatar');
        const avatarList = screen.queryByTestId('avatar-list');

        expect(editButton).toBeInTheDocument();
        expect(avatar).toBeInTheDocument();
        expect(avatarList).not.toBeInTheDocument();
    });
})