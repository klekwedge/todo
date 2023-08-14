import React from 'react';
import { render, screen } from '@testing-library/react';
import useCategoryTask from './useCategoryTask';

describe('useCategoryTask Hook', () => {
  it('returns correct badge for "personal" category', () => {
    const taskCategory = 'personal';
    render(useCategoryTask(taskCategory));

    const badge = screen.getByText('Personal');
    expect(badge).toBeInTheDocument();
  });

  it('returns correct badge for "work" category', () => {
    const taskCategory = 'work';
    render(useCategoryTask(taskCategory));

    const badge = screen.getByText('Work');
    expect(badge).toBeInTheDocument();
  });

  it('returns correct badge for "study" category', () => {
    const taskCategory = 'study';
    render(useCategoryTask(taskCategory));

    const badge = screen.getByText('Study');
    expect(badge).toBeInTheDocument();
  });

  it('returns correct badge for "other" category', () => {
    const taskCategory = 'other';
    render(useCategoryTask(taskCategory));

    const badge = screen.getByText('Other');
    expect(badge).toBeInTheDocument();
  });

  it('returns default badge for unknown category', () => {
    const taskCategory = 'unknown';
    const { container } = render(useCategoryTask(taskCategory));

    const badge = container.querySelector('.chakra-badge');
    expect(badge).toBeInTheDocument();
  });
});
