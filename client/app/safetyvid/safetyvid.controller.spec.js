'use strict';

describe('Component: SafetyvidComponent', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var SafetyvidComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SafetyvidComponent = $componentController('safetyvid', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
