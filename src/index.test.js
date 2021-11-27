import OnLeaveIntent from './index';

describe('OnLeaveIntent', () => {
  it("should run the callback function if the use goes out of the screen", () => {
    const callback = jest.fn()
    const OnLeaveIntent = new OnLeaveIntent(callback)

    // simula saida do usuário da página.
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(callback).toHaveBeenCalled()
  })
})