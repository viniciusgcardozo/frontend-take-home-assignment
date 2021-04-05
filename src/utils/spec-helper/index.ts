import { screen } from '@testing-library/react';

export const getByTextDeep = (text: string) =>
  screen.getByText((_, node: Element) => {
    const hasText = (node: Element) => node.textContent === text;
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      child => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  });
