Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: jest.fn(),
});

const IntersectionObserverMock = jest.fn();
IntersectionObserverMock.prototype.observe = jest.fn();
IntersectionObserverMock.prototype.disconnect = jest.fn();

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: IntersectionObserverMock,
});
