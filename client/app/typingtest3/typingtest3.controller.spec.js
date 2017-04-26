'use strict';

describe('Component: Typingtest3Component', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var Typingtest3Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    Typingtest3Component = $componentController('typingtest3', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
