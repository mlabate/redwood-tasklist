import { render } from '@redwoodjs/testing'

import TasklistLayout from './TasklistLayout'

describe('TasklistLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TasklistLayout />)
    }).not.toThrow()
  })
})
