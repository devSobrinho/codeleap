import { IoIosArrowUp } from 'react-icons/io';
import { ButtonIcon } from './Button/ButtonIcon';

export function GoTop(): JSX.Element {
    return (
        <ButtonIcon
            href="#top"
            mx="2rem"
            my="1rem"
            w="1rem"
            color="gray.900"
            icon={IoIosArrowUp}
            textTooltip="Go to top"
        />
    );
}
