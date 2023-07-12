import { render, screen } from '../../test-utils'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Avatar } from './avatar';
import { DEFAULT_AVATAR_ID } from './constants'


describe("avatar component",  () => {
    test('it loads the default view',  async () => {
        const {container} = render(<Avatar />);
        const editButton = await screen.getByTestId('edit-button');
        const avatar = await screen.getByTestId(`saved-avatar-${DEFAULT_AVATAR_ID}`);
        const avatarList = await screen.queryByTestId('avatar-list');

        expect(editButton).toBeInTheDocument();
        expect(avatar).toBeInTheDocument();
        expect(avatarList).not.toBeInTheDocument();
    });

    test("it displays the avatar list when the the edit button is clicked", async () => {
        const {container} = render(<Avatar />);
        const editButton = await screen.getByTestId('edit-button');

        await userEvent.click(editButton);

        const avatarList = await screen.getByTestId('avatar-list');
        const avatar = await screen.queryByTestId(`saved-avatar-${DEFAULT_AVATAR_ID}`);
        const saveButton =  await screen.getByTestId('save-button');
        const cancelButton =  await screen.getByTestId('cancel-button');

        expect(avatarList).toBeInTheDocument();
        expect(saveButton).toBeInTheDocument();
        expect(cancelButton).toBeInTheDocument();
        expect(avatar).not.toBeInTheDocument();
    });

    test('a new avatar can be selected', async () => {
        const {container} = render(<Avatar />);
        let editButton = await screen.getByTestId('edit-button');

        await userEvent.click(editButton);

        const saveButton =  await screen.getByTestId('save-button');
        const avatarToSelect = await screen.getByTestId('avatar-1');

        expect(avatarToSelect).toBeInTheDocument();

        await userEvent.click(avatarToSelect);
        await userEvent.click(saveButton);

        const selectedAvatar = await screen.getByTestId('saved-avatar-1');
        editButton = await screen.getByTestId('edit-button');

        expect(selectedAvatar).toBeInTheDocument();
        expect(editButton).toBeInTheDocument();
    });
})
