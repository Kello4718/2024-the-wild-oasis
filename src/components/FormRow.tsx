import styled from "styled-components";
import Row from "./Row";
import { FC } from "react";

const StyledFormRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 30rem 1fr;
    gap: 2.4rem;

    padding: 1.2rem 0;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }

    &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
    }
`;

const StyledFormLabel = styled.label`
    font-weight: 500;
`;

const StyledFormError = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

type FormRowProps = {
    label: string;
    errors?: {
        message?: string;
        type?: string;
    };
    children: JSX.Element;
};

const FormRow: FC<FormRowProps> = ({ label, children, errors }) => {
    return (
        <StyledFormRow>
            <StyledFormLabel htmlFor={children.props.id}>
                {label}
            </StyledFormLabel>
            <Row type="vertical" style={{ rowGap: "1rem" }}>
                {children}
                {errors && <StyledFormError>{errors.message}</StyledFormError>}
            </Row>
        </StyledFormRow>
    );
};

export default FormRow;
