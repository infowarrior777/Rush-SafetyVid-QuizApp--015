'use strict';

describe('Component: SafetyquizComponent', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var SafetyquizComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SafetyquizComponent = $componentController('safetyquiz', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
